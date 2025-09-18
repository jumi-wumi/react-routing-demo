// Mål: Visa produktkort på startsidan
import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const Home = () => {
  // Hämta ut funktioner ur context
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Min Råttiga Webshop</h1>

      {/* wrappa korten i en flex  */}
      <div style={{ display: "flex" }}>
        {/* loopar igenom alla produkter (map av array) */}
        {/* () inte {} efter en arrow function för att returnera värdet automatiskt (implicit return) */}
        {products.map((product, index) => (
          <ProductCard
            key={index} //unik key prop från Reacts diffing algo
            name={product.name}
            price={product.price}
            category={product.category}
            onAddToCart={() => addToCart(product)} // callback funktion som prop
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
