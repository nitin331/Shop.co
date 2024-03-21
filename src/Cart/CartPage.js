// CartPage.js
import React from 'react';
import CartItem from './CartItem';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <CartItem key={product.id} product={product} removeFromCart={removeFromCart} />
        ))
      )}
    </div>
  );
};

export default CartPage;
