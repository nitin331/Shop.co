// AddToCart.js
import React from 'react';

const AddToCart = ({ product, addToCart }) => {
  return (
    <div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
