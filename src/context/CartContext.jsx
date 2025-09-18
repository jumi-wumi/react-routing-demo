// Syfte: Detta är en Context-fil som låter alla komponenter inom Provider få tillgång till carts variables och funktioner oavsett nesting, utan att skicka props. 

// Importer från React:
// 1. createContext: skapar ett Context-objekt som kan delas globalt i komponentträdet
// 2. useState: React hook för att spara ett lokalt state, alltså reaktivt värde i en variabel (cart)
import { createContext, useState } from "react";

// Skapa context-objektet som ska hålla cart-datan och dess funktioner som vi exporterar så att andra filer kan importera CartContext och genom useContext-hooken få tillgång till datan och metoderna i objektet.
// CartContext-objektet som vi skapar här blir länken som parar ihop kompoenterna som vill komma åt context:et med useContext(CartContext) och Provider. När en child-komponent till CartContext.Proviver använder hook:en useContext(CartContext) läser hook:en värdet som skickas i Provider.value
// Fix för ESlint error: gör en cartContext.js fil med bara export på const CartContext = createContext() och döp om denna filen till CartProvider.jsx och updatera imports
export const CartContext = createContext();

// Skapa Provider-komponenten som omsluter de komponenter som behöver ha tillgång till cart-data och funktioner 
export const CartProvider = ({ children }) => {
  // deklarera lokala state
  const [cart, setCart] = useState([]);

  // Funktion för att lägga till produkter i cart
  const addToCart = (product) => {
    // spread existing element och lägga till product sists. State uppdatering med prev för att ensure att vi alltid jobbar från det senaste cart state värdet
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function för att ta bort från cart baserat på index
  const removeFromCart = (index) => {
    // JS filter method för att return en ny array utan produkt
    // _ är en throwaway variabel för vi bryr oss inte om den första param bara index
    // för varje element i arrayn check index och return true om elementes index inte är lika med index (det vi vill ta bort)
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Kollade-kontot-och-har-ångest-nu-funktion
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {/* Children representerar allt JSX som placeras inom <CartProvider> */}
      {children}
    </CartContext.Provider>
  );
};
