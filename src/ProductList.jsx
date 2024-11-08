import React from 'react';
import Product from './Product';
import './App.css';

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: 'Samsung M55', price: 500, description: 'Description du Samsung M55' },
    { id: 2, name: 'Iphone 16 Pro', price: 1400, description: 'Description du Iphone 16 Pro' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
