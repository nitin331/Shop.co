// SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './SignIn.css' 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
  
    console.log('Sign In Clicked');
    console.log('Email:', email);
    console.log('Password:', password);
    
  };

  return (
    <div className='body'>
       <section className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
         
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
         
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>

      
        <p className="registration-link">
          Don't have an account? <Link to="/registration">Register here</Link>.
        </p>
      </form>
       </section>
    </div>
  );
}

export default SignIn;
