import React from 'react';
import './Payment.css'

const PaymentPage = () => {
  return (
    <div className="wrapper">
      <div className="containe">
        <form action="">
          <h1>
            <span><i className="fas fa-shipping-fast"></i></span>
            Shipping Details
          </h1>
          <div className="name">
            <div>
              <label htmlFor="f-name">First</label>
              <input type="text" id="f-name" name="f-name" />
            </div>
            <div>
              <label htmlFor="l-name">Last</label>
              <input type="text" id="l-name" name="l-name" />
            </div>
          </div>
          <div className="street">
            <label htmlFor="address">Street</label>
            <input type="text" id="address" name="address" />
          </div>
          <div className="address-info">
            <div>
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" />
            </div>
            <div>
              <label htmlFor="zip">Zip</label>
              <input type="text" id="zip" name="zip" />
            </div>
          </div>
          <h1>
            <span><i className="far fa-credit-card"></i></span> Payment Information
          </h1>
          <div className="cc-num">
            <label htmlFor="card-num">Credit Card No.</label>
            <input type="text" id="card-num" name="card-num" />
          </div>
          <div className="cc-info">
            <div>
              <label htmlFor="expire">Exp</label>
              <input type="text" id="expire" name="expire" />
            </div>
            <div>
              <label htmlFor="security">CCV</label>
              <input type="text" id="security" name="security" />
            </div>
          </div>
          <div className="btns">
            <button type="submit">Purchase</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
