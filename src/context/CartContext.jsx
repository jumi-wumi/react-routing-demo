import { createContext, useState } from "react";

// Skapa context-objektet som ska hålla cart datan och funktioner
export const CartContext = createContext();

// Skapa Providern som ska omsluta de komponenter som behöver tillgång till kundvagnen
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
