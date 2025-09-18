import React from 'react'
// Visa kort för produkter med namn, pris och fungerarnde knapp för att lägga till i kundvagn
// Props: name, price, category, onAddToCart, 

const ProductCard = ({ name, price, category, onAddToCart }) => {
  return (
    <div 
    style={{
        border: "2px solid black",
        padding: "1rem",
        width: "300px"
    }}>
        {/* produktnamn  */}
        <h3>{name}</h3>

        {/* kategori  */}
        <p>Kategori: {category}</p>

        {/* pris  */}
        <p>Pris: {price}</p>

        {/* knapp för att add to cart  */}
        <button onClick={onAddToCart}>Köp</button>
    </div>
  )
}

export default ProductCard