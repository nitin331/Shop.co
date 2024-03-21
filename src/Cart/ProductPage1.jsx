import React from 'react';
import AddToCart from './AddToCart';
import './ProductPage.css'; // Import CSS file for styling

const ProductPage1 = ({ products, addToCart }) => {
  return (
    <div className='card-container'>
      {products.map((product, index) => (
        <div className="card" key={index}>
          <img src={product.imageUrl} className="card-img-top" alt={product.name} height={'100PX'} width={'60%'}></img>
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
           
            <p className="card-text">Price: ${product.price}</p>
            <AddToCart product={product} addToCart={addToCart} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage1;
