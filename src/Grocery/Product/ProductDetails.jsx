// ProductDetails.js
import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
