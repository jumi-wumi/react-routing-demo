import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartComponent = () => {
  // Hämta ut funktioner och variablar ur context
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      {/* visa feedback om cart är tom. Annars loopa ut varje cart item  */}
      {cart.length === 0 ? (
        <p>Kundvagnen är tom</p>
      ) : (
        <>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} {item.price}SEK
              <button onClick={() => removeFromCart(index)}>X</button>
            </li>
          ))}s
        </ul>
        {/* rensa  */}
        <button onClick={clearCart}>Töm</button>
        </>
      )}
    </div>
  );
};

export default CartComponent;
