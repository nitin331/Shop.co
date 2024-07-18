import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-info">
          <h2>SpareDrive Solutions</h2>
          <div>
            <p><i className="fas fa-map-marker-alt"></i> Awfis, Adani Inspire, unit 304, Bandra Kurla Complex Rd,</p>
            <p>G Block BKC, Bandra East, Mumbai - 400051</p>
          </div>
          <div>
            <p><i className="fas fa-envelope"></i> Email: contact@SpareDrivesolutions.in</p>
            <p><i className="fas fa-phone"></i> Phone: +91 6562124860</p>
          </div>
        </div>
        
        <div className="footer-info">
          <h2>Categories</h2>
          <ul>
            <li><a href="/bearing">Bearing</a></li>
            <li><a href="/filters">Filters</a></li>
            <li><a href="/air-conditioning">Air Conditioning</a></li>
            <li><a href="/clutch-system">Clutch System</a></li>
            <li><a href="/engine-parts">Engine Parts</a></li>
            <li><a href="/maintenance-service">Maintenance Service</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h2 className='info'>Information</h2>
          <ul className='about'>
            <li><a href="/about">About Us</a></li>
            <li><a href="/return-policy">Return Policy</a></li>
            <li><a href="/buyback-policy">Buyback Policy</a></li>
            <li><a href="/shipping-policy">Shipping Policy</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h2 className='FOLLOW'>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
      <div className="copy">
        Copyright © 2024 <span>SpareDrive Solutions Private Limited</span>
      </div>
    </div>
  );
}

export default Footer;
