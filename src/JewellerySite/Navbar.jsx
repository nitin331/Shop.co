import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTwitter, faInstagram, faTelegram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faHeart, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ cartCount }) => {
  const [showNav, setShowNav] = useState(window.innerWidth >= 769);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleNav = () => {
    setShowMobileNav(!showMobileNav);
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
      <div className="social-icons">
          <a href="https://www.facebook.com/" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" className="social-icon"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="https://twitter.com/" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://telegram.com/" className="social-icon"><FontAwesomeIcon icon={faTelegram} /></a>
          <a href="https://pinterst.com/" className="social-icon"><FontAwesomeIcon icon={faPinterest} /></a>
          <a href="https://instagram.com/" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="site-name"><Link to="/" className="nav-link">MIMILUX</Link></div>
        <ul className={`nav-items ${showNav || showMobileNav ? 'show' : 'hide'}`}>
          <li className="nav-item"><a href="/bracelet" className="nav-link">Bracelets</a></li>
          <li className="nav-item"><a href="/rings" className="nav-link">Rings</a></li>
          <li className="nav-item"><a href="/pendant" className="nav-link">Pendants</a></li>
          <li className="nav-item"><a href="/earrings" className="nav-link">Earrings</a></li>
          <li className="nav-item"><a href="/tennis-bracelets" className="nav-link">Tennis Bracelets</a></li>
          <li className="nav-item"><a href="mens-collection" className="nav-link">Men's Collection</a></li>
        </ul>

        <div className="navbar-icons">
          <FontAwesomeIcon icon={faSearch} className="icon cart-icon" />
          <FontAwesomeIcon icon={faHeart} className="icon cart-icon" />
          <Link to={'/cart'} className="cart-link">
            <FontAwesomeIcon icon={faShoppingCart} className="icon cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
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
