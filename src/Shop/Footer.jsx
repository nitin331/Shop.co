import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubscribe = () => {
      alert(`Subscribed with email: ${email}`);
    };

  return (
    <div className="footer-container">
      <div className="newsletter">
        <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="newsletter-input">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleSubscribe}>Subscribe to Newsletter</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="company">
          <h3>SHOP.CO</h3>
          <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
          <div className="social-media">
  <a href="https://x.com/" target="_blank">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.13.0/twitter.svg" alt="Twitter" style={{ width: '20px', height: '30px' }} ></img>
  </a>
  <a href="https://www.facebook.com/" target="_blank">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.13.0/facebook.svg" alt="Facebook" style={{ width: '20px', height: '30px' }} ></img>
  </a>
  <a href="https://www.instagram.com/" target="_blank">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.13.0/instagram.svg" alt="Instagram" style={{ width: '20px', height: '30px' }} ></img>
  </a>
  <a href="https://www.pinterest.com/" target="_blank">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.13.0/pinterest.svg" alt="Pinterest" style={{ width: '20px', height: '30px' }} ></img>
  </a>
</div>

        </div>
        <div className="links">
          <div>
            <h4>COMPANY</h4>
            <a href="aboutus">About</a>
            <a href="">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>
          <div className='help'>
            <h4>HELP</h4>
            <a href="customersupport">Customer Support</a>
            <a href="deliverydetails">Delivery Details</a>
            <a href="termsandconditions">Terms & Conditions</a>
            <a href="privacypolicy">Privacy Policy</a>
          </div>
          <div className='faq'>
            <h4>FAQ</h4>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Orders</a>
            <a href="#">Payments</a>
          </div>
          <div className='resources'>
            <h4>RESOURCES</h4>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">YouTube Playlist</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Shop.co © 2000-2024, All Rights Reserved</p>
       
      </div>
    </div>
  );
}

export default Footer;
