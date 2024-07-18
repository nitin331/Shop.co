import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faBars, faTimes, faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon

const Navbar = ({ cartCount }) => {
  const [showNav, setShowNav] = useState(window.innerWidth >= 769);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const searchIconRef = useRef(null);
  const searchBoxRef = useRef(null);

  const toggleNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowNav(window.innerWidth >= 769);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="site-name"><Link to="/" className="nav-link">SpareDrive Solutions</Link></div>
        <ul className={`nav-items ${showNav || showMobileNav ? 'show' : 'hide'}`}>
          <li className="nav-item"><a href="/bracelet" className="nav-link">Clutch System</a></li>
          <li className="nav-item"><a href="/rings" className="nav-link">Bearings</a></li>
          <li className="nav-item"><a href="/pendant" className="nav-link">Ac Parts</a></li>
          <li className="nav-item"><a href="/earrings" className="nav-link">Filters</a></li>
          <li className="nav-item"><a href="/tennis-bracelets" className="nav-link">Engine Parts </a></li>
          <li className="nav-item"><a href="mens-collection" className="nav-link">Maintenance service</a></li>
        </ul>

        <div className="navbar-icons">
          {showSearchBox ? (
            <div ref={searchBoxRef} className="search-box-container">
              <input type="text" placeholder="Search..." className="search-box" />
              <FontAwesomeIcon icon={faTimesCircle} className="close-icon" onClick={toggleSearchBox} />
            </div>
          ) : (
            <FontAwesomeIcon icon={faSearch} className="icon cart-icon" onClick={toggleSearchBox} ref={searchIconRef} />
          )}

          <Link to='/wishlist'>
            <FontAwesomeIcon icon={faHeart} className="icon cart-icon" />
          </Link>
          <Link to={'/cart'} className="cart-link">
            <FontAwesomeIcon icon={faShoppingCart} className="icon cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <Link to='/signin'>
            <FontAwesomeIcon icon={faUser} className="icon cart-icon" />
          </Link>
          {showMobileNav ? (
            <FontAwesomeIcon icon={faTimes} className="icon" onClick={toggleNav} />
          ) : (
            <FontAwesomeIcon icon={faBars} className={`icon hamburger-icon ${showMobileNav ? 'active' : ''}`} onClick={toggleNav} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
