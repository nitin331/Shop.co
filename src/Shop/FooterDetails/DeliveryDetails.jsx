import React from 'react';
import './DeliveryDetails.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

const DeliveryDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="delivery-container">
      <h1>Delivery Details</h1>
      <p>
        Welcome to our Delivery Details page. Here you will find all the information you need regarding our delivery policies, shipping options, and timelines.
      </p>
      <h2>Shipping Options</h2>
      <p>We offer the following shipping options:</p>
      <ul>
        <li><strong>Standard Shipping:</strong> Delivery within 5-7 business days.</li>
        <li><strong>Express Shipping:</strong> Delivery within 2-3 business days.</li>
        <li><strong>Overnight Shipping:</strong> Delivery by the next business day.</li>
      </ul>
      <h2>Shipping Charges</h2>
      <p>
        Shipping charges are calculated based on the total weight of your order and the selected shipping method. The charges will be displayed at checkout before you complete your order.
      </p>
      <h2>Order Processing Time</h2>
      <p>
        Orders are processed within 1-2 business days. You will receive a confirmation email once your order has been shipped.
      </p>
      <h2>Tracking Your Order</h2>
      <p>
        Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to check the status of your delivery on our carrier's website.
      </p>
      <h2>International Shipping</h2>
      <p>
        We currently ship to the following countries: USA, Canada, UK, Australia, and many others. Please note that international shipping times may vary depending on the destination country.
      </p>
      <h2>Customs and Import Duties</h2>
      <p>
        International orders may be subject to customs and import duties. These charges are not included in our shipping fees and must be paid by the recipient. Please check with your local customs office for more information.
      </p>
      <h2>Delivery Issues</h2>
      <ol>
        <li>
          <strong>What should I do if my order hasn't arrived?</strong>
          <p>
            If your order hasn't arrived within the estimated delivery time, please contact our customer support team with your order number and tracking information. We will assist you in locating your package.
          </p>
        </li>
        <li>
          <strong>What happens if my package is damaged during shipping?</strong>
          <p>
            If your package is damaged during shipping, please contact our customer support team immediately. Provide us with photos of the damaged package and we will work with you to resolve the issue.
          </p>
        </li>
        <li>
          <strong>Can I change my delivery address after my order has been shipped?</strong>
          <p>
            Once your order has been shipped, we are unable to change the delivery address. Please ensure that your shipping information is correct before completing your order.
          </p>
        </li>
      </ol>
    </div>
    <Footer/>
    </div>
  );
}

export default DeliveryDetails;
