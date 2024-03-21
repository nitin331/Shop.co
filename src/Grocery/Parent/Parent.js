// Cart.js
import React from 'react';

const Cart = ({ cart, closeCart }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, cartIndex) => (
          <li key={cartIndex}>{item.name}</li>
        ))}
      </ul>
      <button onClick={closeCart}>Close Cart</button>
    </div>
  );
};

export default Cart;
