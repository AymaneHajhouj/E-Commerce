import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Panier</h2>
      {cart.map((product, index) => (
        <div className="cart-item" key={index}>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      ))}
      <div className="cart-total">Total : ${total.toFixed(2)}</div>
    </div>
  );
}

export default Cart;
