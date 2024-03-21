// Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
  
    console.log('Registration Clicked');
    console.log('Form Data:', formData);
    
  };

  return (
    <div className="auth-container">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
         
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
         
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
         
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
         
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

      
        <p className="signin-link">
          Already have an account? <Link to="/signin">Sign In here</Link>.
        </p>
      </form>
    </div>
  );
}

export default Registration;
