// ProductPage2.js
import React from 'react';
import AddToCart from './AddToCart';
import './ProductPage.css';

const ProductPage2 = ({ products, addToCart }) => {
  return (
    <div className="product-container">
    <h1>Products Page 3</h1>
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <AddToCart product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductPage2;
