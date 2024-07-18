import React from 'react';
import './CustomerSupport.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

const CustomerSupport = () => {
  return (
    <div>
        <Navbar/>
        <div className="support-container">
      <h1>Customer Support</h1>
      <p>
        Welcome to our Customer Support page. If you have any questions or need assistance, please feel free to contact us. We are here to help you with any issues or inquiries you may have.
      </p>
      <h2>Contact Information</h2>
      <p>
        <strong>Email:</strong> support@shacara.com<br />
        <strong>Phone:</strong> +1 (123) 456-7890<br />
        <strong>Address:</strong> 123 Shacara St, Example City, EX 12345, Country
      </p>
      <h2>Support Hours</h2>
      <p>
        Our support team is available during the following hours:
      </p>
      <ul>
        <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
        <li>Saturday: 10:00 AM - 4:00 PM</li>
        <li>Sunday: Closed</li>
      </ul>
      <h2>Frequently Asked Questions</h2>
      <ol>
        <li>
          <strong>How can I track my order?</strong>
          <p>
            You can track your order by logging into your account and visiting the "Order History" section. You will find the tracking information for each of your orders.
          </p>
        </li>
        <li>
          <strong>What is your return policy?</strong>
          <p>
            We accept returns within 30 days of purchase. The product must be in its original condition and packaging. Please contact our support team to initiate a return.
          </p>
        </li>
        <li>
          <strong>How can I change my shipping address?</strong>
          <p>
            You can change your shipping address by logging into your account and updating the address in the "Account Information" section. If your order has already been shipped, please contact our support team for further assistance.
          </p>
        </li>
        <li>
          <strong>How do I reset my password?</strong>
          <p>
            Click on the "Forgot Password" link on the login page and follow the instructions to reset your password. If you encounter any issues, please contact our support team.
          </p>
        </li>
      </ol>
    </div>
    <Footer/>
    </div>
  );
}

export default CustomerSupport;
