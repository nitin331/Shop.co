import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productName, price) => {
    const item = {
      name: productName,
      price: price
    };

    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (productName) => {
    const updatedCart = cartItems.filter(item => item.name !== productName);
    setCartItems(updatedCart);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="shopping-cart">
      {cartItems.length === 0 ? (
        <div className="box">
          <h1 style={{ color: 'orange' }}>Cart is empty</h1>
        </div>
      ) : (
        cartItems.map((item, index) => (
          <div className="box" key={index}>
            <i className="fas fa-times" onClick={() => removeFromCart(item.name)}></i>
            {/* You may need to adjust the image source */}
            <img src={`images/${item.name}.jpg`} alt={item.name} />
            <div className="content">
              <h3>{item.name}</h3>
              <span className="price">₹{item.price.toFixed(2)}</span>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <h3 className="total">Total: <span>₹{totalPrice.toFixed(2)}</span></h3>
      )}
    </div>
  );
};

export default ShoppingCart;
