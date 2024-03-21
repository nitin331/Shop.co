import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';

import './Navbar.css';


const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItems, { name: product.name, price: product.price }];
    setCartItems(updatedCart);
    console.log(`Added ${product.name} to cart. Price: ${product.price}`);
  };

  return (
    <div>
      <header className="header">
        <a href="#" className="logo"> Grocery </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#product">product</a>
          <a href="#about">about</a>
          <a href="#review">review</a>
          <a href="#blog">blog</a>
          <a href="#contact">contact</a>
        </nav>
        <div className="icons">
          <div onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingBasket} />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </div>
          <div><FontAwesomeIcon className="search-icon" icon={faSearch} /></div>
          <div><FontAwesomeIcon className="fa-icon" icon={faBars} /></div>
        </div>
      </header>
      <Product addToCart={addToCart}/>
      {showCart && (
        <div className="cart-section">
          {cartItems.length > 0 ? (
            <div className="cart-box">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name}</span> - <span>{item.price}</span>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
