


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import Navbar from './Navbar';
import Footer from './Footer';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, amount) => {
    const updatedCart = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity + amount };
      }
      return item;
    }).filter(item => item.quantity > 0); // Remove item if quantity goes below 1

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subtotal * 0.20; // Assuming a 20% discount
  const deliveryFee = 15; // Fixed delivery fee
  const total = subtotal - discount + deliveryFee;

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <center><h1>Your Cart</h1></center>
      <div className="cart-page">
        
        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/">Continue Shopping</Link></p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h2>{item.name}</h2>
                    
                    <p>Size: {item.selectedSize}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="controls">
                    <button className="remove-button" onClick={() => handleRemoveFromCart(index)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-details">
                <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
                <p>Discount (-20%): <span>-${discount.toFixed(2)}</span></p>
                <p>Delivery Fee: <span>${deliveryFee.toFixed(2)}</span></p>
                <hr />
                <p>Total: <span>${total.toFixed(2)}</span></p>
              </div>
              <button className="checkout-button" onClick={() => navigate('/payment')}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;

