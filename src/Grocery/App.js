
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Grocery/Home/Home';
import Product from './Grocery/Product/Product'
import About from './Grocery/About/About';
import Blog from './Grocery/Blog/Blog';
import Contact from './Grocery/Contact/Contact';
import Vegetable from './Grocery/Home/Vegetable';
import Fruit from './Grocery/Home/Fruit'
import Dairy from './Grocery/Home/Dairy'
import SignIn from './Grocery/Home/SignIn';
import Registration from './Grocery/Home/Registration';
import Strip from './Grocery/Home/RollingStrip/Strip'
import Cart from './Grocery/Product/Cart';







const Grocery = () => {
  
  return (
    
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vegetable" element={<Vegetable/>} />
        <Route path="/fruit" element={<Fruit/>} />
        <Route path="/dairy" element={<Dairy/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/strip" element={<Strip/>} />
        <Route path="/cart" element={<Cart/>}/>
       

        
        
      </Routes>
    
     
      
      
      
    </BrowserRouter>
  );
};

export default Grocery;
