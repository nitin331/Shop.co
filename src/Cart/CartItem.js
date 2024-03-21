// CartItem.js
import React from 'react';

const CartItem = ({ product, removeFromCart }) => {
  return (
    <div>
      <img src={product.imageUrl} width={'200px'}></img>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
