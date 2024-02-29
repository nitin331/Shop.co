// Grocery.js

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Grocery/Navbar/Navbar';
import Home from './Grocery/Home/Home';
import Banner from './Grocery/Banner/Banner';
import Product from './Grocery/Product/Product';
import About from './Grocery/About/About';
import Review from './Grocery/Review/Review';
import Blog from './Grocery/Blog/Blog';
import Contact from './Grocery/Contact/Contact';
import Footer from './Grocery/Footer/Footer';

const Grocery = () => {

 

  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/product" element={<Product  />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Banner/>
      <Product />
      <About/>
      <Review/>
      <Blog/>
      <Contact/>
      <Footer />
    </BrowserRouter>
  );
};

export default Grocery;
