import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header>
      <div>
        <Link to="/" className="home-button">Accueil</Link>
      </div>
      <h1>Mon E-commerce</h1>
      <Link to="/cart">Panier ({cartCount})</Link>
    </header>
  );
}

export default Header;

