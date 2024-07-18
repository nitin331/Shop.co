import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here
    alert('Payment successful!');
    navigate('/'); // Redirect to home or another page after payment
  };

  return (
    <div className="payment-page">
      <h1>Checkout</h1>
      <form onSubmit={handlePayment}>
        <h2>Shipping Address</h2>
        <div className="form-group">
          <label>Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>ZIP Code</label>
            <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} required />
          </div>
        </div>
        <h2>Payment Method</h2>
        <div className="form-group payment-method">
          <label>
            <input
              type="radio"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit Card
            <img src="/images/visa.png" alt="Visa" className="payment-logo" />
            <img src="/images/mastercard.png" alt="Mastercard" className="payment-logo" />
          </label>
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              value="bankTransfer"
              checked={paymentMethod === 'bankTransfer'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Bank Transfer
          </label>
        </div>

        {paymentMethod === 'creditCard' && (
          <>
            <h2>Payment Information</h2>
            <div className="form-group">
              <label>Name on Card</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
              </div>
            </div>
          </>
        )}

        {paymentMethod === 'paypal' && (
          <div className="form-group">
            <label>PayPal Email</label>
            <input type="email" required />
          </div>
        )}

        {paymentMethod === 'bankTransfer' && (
          <div className="form-group">
            <label>Bank Account Number</label>
            <input type="text" required />
          </div>
        )}

        <button type="submit" className="payment-button">Place Your Order</button>
      </form>
    </div>
  );
};

export default PaymentPage;


