
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBars, faSearch,faUser } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
import Product from '../Product/Product';
import About from '../About/About';
import Review from '../Review/Review';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'
import Strip from '../Home/RollingStrip/Strip'
import './Home.css';









const Home = () => {

  return (
    <div>
    <header className="header">
      
      <a href="#" className="logo"><img src="https://media.istockphoto.com/id/1045368942/vector/abstract-green-leaf-logo-icon-vector-design-ecology-icon-set-eco-icon.jpg?s=612x612&w=0&k=20&c=XIfHMI8r1G73blCpCBFmLIxCtOLx8qX0O3mZC9csRLs=" alt="" height="45px"/> iDOrganic</a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#product">product</a>
        <a href="#about">about</a>
        <a href="#review">review</a>
        <a href="#blog">blog</a>
        <a href="#contact">contact</a>
      </nav>
      <div className="icons">
        <div><FontAwesomeIcon className="search-icon" icon={faSearch} /></div>
       <div><Link to="/cart"><FontAwesomeIcon className="shoppingbasket" icon={faShoppingBasket} size='1rem'/></Link></div>
        <div><Link to="/signin"><button><FontAwesomeIcon icon={faUser} /></button></Link></div>

      </div>
    </header>
   
  



   <Strip/>



    <section className="home" id="home">
      <div className='overlay'></div>
    <video src="video/organic.mp4" autoPlay loop muted ></video>
      <div className="content">
      
        <h3>buy best <span>organic product</span> online </h3>
        <a href="#product"  id="product" className="btn">get yours now</a>

        
    
      </div>
    </section>
    <section className="banner-container">
                  <div className="banner">
                <img src="images/banner1.png" alt="" />
                <div className="content">
                  <span>limited sales</span>
                  <h3>Vegetables</h3>
               <Link to="/vegetable" className="btn" >See All</Link>
                </div>
              </div>
              <div className="banner">
                <img src="images/banner2.png" alt="" />
                <div className="content">
                  <span>limited sales</span>
                  <h3>fruits</h3>
                  <Link to="/fruit" className="btn" >See All</Link>
                </div>
              </div>
              <div className="banner">
                <img src="images/dairy.jpg" alt="" />
                <div className="content">
                  <span>limited sales</span>
                  <h3>dairy</h3>
                  <Link to="/dairy" className="btn" >See All</Link>
                </div>
              </div>
              
    </section>
       <Product />
       <About/>
       <Review/>
       <Blog/>
       <Contact/>
       <Footer/>
    </div>

  );
}

export default Home;
