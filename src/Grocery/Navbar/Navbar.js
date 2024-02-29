// Navbar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {
  faBars,
  faSearch,
  faGrinHearts,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
 

  const toggleCart = () => {
    setShowCart(!showCart);
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

      {showCart && (
        <div className="cart-section">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.name} - {item.price}</li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
