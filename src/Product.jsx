import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Prix: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Ajouter au Panier</button>
    </div>
  );
}

export default Product;
