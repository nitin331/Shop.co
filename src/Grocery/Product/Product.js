import React, { useState } from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link,Routes,Route } from 'react-router-dom';
import Cart from './Cart'

const Product = () => {

  const [cartItems, setCartItems] = useState([]);
  
  const products= [
    {
      name: 'Avacado',
      image: 'https://cdn.pixabay.com/photo/2021/04/14/17/45/avocado-6179050_1280.jpg',
      price: 160,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Kiwi',
      image: 'https://freepngimg.com/convert-png/16243-kiwi-transparent',
      price: 110,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Nescafe',
      image: 'images/product-3.jpg',
      price: 150,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Water melon',
      image: 'images/product-4.jpg',
      price: 50,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Amul Lassi',
      image: 'https://www.jiomart.com/images/product/600x600/490022078/amul-lassi-1-l-tetra-pak-product-images-o490022078-p590041243-4-202203151737.jpg',
      price: 50,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Heinz Ketchup',
      image: 'images/product-5.jpg',
      price: 230,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Mint Leaves',
      image: 'images/product-6.jpg',
      price: 20,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Bananas',
      image: 'images/bananas-on-the-same-branch-isolated-on-yellow-pastel-color-background-free-photo.jpg',
      price: 50,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Amul Curd',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/110768a.jpg?ts=1654845569',
      price: 25,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      name: 'Double Stuffed Oreos',
      image: 'images/double-stuffed-oreos.webp',
      price: 40,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    }
  ];


  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  return (
    <section className="product" id="product">
    <h1 className="heading">
      our <span>products</span>
    </h1>
    <div className="box-container">
      {products.map((product, index) => (
        <div className="box" key={index}>
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="content">
            <h3>{product.name}</h3>
            <div className="price">₹{product.price}</div>
            <div className="stars">
              {product.stars.map((star, starIndex) => (
                <FontAwesomeIcon icon={star} key={starIndex}  style={{ color: 'gold' }} />
              ))}
            </div>
            <Link to="/cart"><button
              className="btn"  onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button></Link>
          </div>
        </div>
      ))}
    </div>
     {/* Link to the Cart page */}
    

{/* Route for the Cart page */}
<Routes>
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
  </section>
  );
};

export default Product;
