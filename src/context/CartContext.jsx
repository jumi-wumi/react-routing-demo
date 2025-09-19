// Syfte: Detta är en Context-fil som låter alla komponenter inom Provider få tillgång till carts variables och funktioner oavsett nesting, utan att skicka props.

// Importer från React:
// 1. createContext: skapar ett Context-objekt som kan delas globalt i komponentträdet vilket gör att vi slipper prop-drilling när flera komponenter i flera nivåer behöver nå viss data (i vårt fall cart)
// 2. useState: React hook för att spara ett lokalt state, alltså reaktivt värde i en variabel (cart)
import { createContext, useState } from "react";

// Skapa context-objektet som ska hålla cart-datan och dess funktioner som vi exporterar så att andra filer kan importera CartContext och genom useContext-hooken få tillgång till datan och metoderna i objektet.
// CartContext-objektet som vi skapar här blir länken som parar ihop kompoenterna som vill komma åt context:et med useContext(CartContext) och Provider. När en child-komponent till CartContext.Proviver använder hook:en useContext(CartContext) läser hook:en värdet som skickas i Provider.value

// Fix för ESlint error: gör en cartContext.js fil med bara export på const CartContext = createContext() och döp om denna filen till CartProvider.jsx och updatera imports
export const CartContext = createContext();

// Skapa Provider-komponenten som omsluter de komponenter som behöver ha tillgång till cart-data och funktioner
// children: en speciell React prop som automatiskt innehåller all JSX som placeras mellan <CartProvider> </CartProvider> (se hur vi använder den i vårt return).
// Här i Provider-komponenten pass:ar vi children som ett argument till CartProvider-komponenten
export const CartProvider = ({ children }) => {
  // deklarera lokalt state: cart-variable är en array. setCart är funktionen som uppdaterar värdet som cart-variable håller.
  // Vi pass:ar en tom array i useState hooken för att sätta det initiala värdet av cart-variable till en tom array eftersom att vi vill börja med en tom kundvagn.
  // Eftersom att vi deklarerar cart som ett state i en Context Provider kommer alla children av Providern läsa värdet av cart och kalla på funktionerna som uppdaterar värdet av cart.
  // När setCart triggas, i vilken av CartProviders konsumerande komponenter aka children som helst, kommer alla children av CartProvider omrenderas då useState-variabels-uppdatering triggar komponent omrendering
  const [cart, setCart] = useState([]);

  // Funktion för att lägga till produkter i cart som vi deklarerar i Provider så att alla konsumerande children av CartProvider kan kalla på dessa funktioner för att uppdatera cart-variables-värde (state)
  // Vi skickar product som parameter. product är ett objekt som representerar produkten (se produtcs array:n i /data/products.js)
  // Eftersom att vi alltid vill påverka det senaste state-värdet av cart (vi vill ju inte råka bara lägga till 1 produkt när användaren har gjort 2 snabba klick vilket vi riskerar när flera state-uppdateringar sker nära inpå eller asynkront) använder vi funktionell state-uppdatering, alltså vi uppdaterar sate med en funktion
  // Reacts state-uppdateringar är asynkrona och kan batchas vilket kan resultera i "stale state" eftersom att flera setCart kan köras typ samtidigt och vi kan inte anta att cart alltid har det senaste värdet
  const addToCart = (product) => {
    // Vi använder state-uppdaterings-funktionen setCart som vi definierade när vi deklarerade vårt cartState (rad 22)
    // Istället för att skicka ett nytt värde i setCart direkt skickar vi en funktion som vår det senaste värdet av state som argument, konvention är att döpa det arumentet till prev (förkortning av previous)
    // Om vi hade skickat cart istället för prevCart så använder vi en variabel som redan finns sedan Reacts senaste rendering.
    // När vi istället använder en funktion köar React dessa funktioner och kör dem i ordring vilket ser till att varje funktion får det nyaste state-värdet
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function för att ta bort från cart baserat på index
  // index: parameter som representerar positionen i array:n som vi vill ta bort
  const removeFromCart = (index) => {
    // JS filter method för att returnera en ny array som innehåller de element som INTE är index. Index representerar ju elementet vi vill ta bort.
    // _ är en throwaway variabel för vi bryr oss inte om den första param bara index
    // för varje element i arrayn check index och return true om elementes index inte är lika med index (det vi vill ta bort)
    // Vi använder funktionell uppdatering av cart av samma anledning som förklarades för addToCart funtionen.
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Kollade-kontot-och-har-ångest-nu-funktion
  const clearCart = () => setCart([]);

  // Nu returnerar vi vår Provider som vi definierat i denna funktionella CartProvider som vi deklarerat state och tillhörande funktoner i
  return (
    // CartContext.Provider förser (provide) ett value-objekt till alla children
    // Se App.jsx där vi importerar CartProvider och låter den omsluta hela App-komponenten för att förse alla underliggande komponenter i App (Eftersom att vi Renderar Router i App, som i sin tur importerar och renderar våra pages-komponenter med sina underliggande komponenter, kommer alla som behöver få tillgång till carts värde och funktioner)
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {/* Children representerar allt JSX som placeras inom <CartProvider> */}
      {children}
    </CartContext.Provider>
  );
};
