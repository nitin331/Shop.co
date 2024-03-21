// Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <a href="/page1">page1</a>
      <a href="/page2">page2</a>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default Cart;
