import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">SHOP.CO</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuActive ? faTimes : faBars} />
        </div>
        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/">Shop</a>
            <div className="dropdown">
              <a href="/casual">Casual</a>
              <a href="/shop/category2">Category 2</a>
            </div>
          </li>
          <li className="navbar-item">
            <a href="/on-sale">On Sale</a>
          </li>
          <li className="navbar-item">
            <a href="/new-arrivals">New Arrivals</a>
          </li>
          <li className="navbar-item">
            <a href="/brands">Brands</a>
          </li>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder="Search for products..." />
        </div>
        <div className="navbar-icons">
          <a href="/cart" className="navbar-icon">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          </a>
          <a href="/account" className="navbar-icon">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

