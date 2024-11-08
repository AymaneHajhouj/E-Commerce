import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
