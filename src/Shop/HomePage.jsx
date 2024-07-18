import React from "react";
import "./Home.css"; // Assuming you have some CSS for styling

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import HomeBanner from './img1/1.jpg'
import TshirtwithTapeDetails from './img1/2.png';
import skinnyFitJeans from './img1/1.png';
import checkeredShirt from './img1/3.png';
import sleeveStripedTshirt from './img1/4.png';
import verticalStripedShirt from './img1/5.png';
import courageGraphicTshirt from  './img1/6.png';
import looseFitBermudaShorts from './img1/7.png' ;
import fadedSkinnyJeans from  './img1/8.png';
import Navbar from "./Navbar";


const HomePage = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
         
        }
      }
    ]
  };


  const products = [
    {
      id: '1',
      name: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
      image:TshirtwithTapeDetails ,
      discount: null,
    },
    {
      id: '2',
      name: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      rating: 3.5,
      discount: "20%",
      image: skinnyFitJeans,
    },
    {
      id: '3',
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: checkeredShirt,
      discount: null,
    },
    {
      id: '4',
      name: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      rating: 4.5,
      discount: "30%",
      image:sleeveStripedTshirt  ,
    },
  ];

  const topSelling = [
    {
      id: '5',
      name: "Vertical Striped Shirt",
      price: 212,
      originalPrice: 232,
      rating: 5.0,
      discount: "20%",
      image:verticalStripedShirt
        ,
    },
    {
      id: '6',
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      discount: null,
      image:courageGraphicTshirt
        ,
    },
    {
      id: '7',
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      discount: null,
      image:looseFitBermudaShorts
        ,
    },
    {
      id: '8',
      name: "Faded Skinny Jeans",
      price: 210,
      rating: 4.5,
      discount: null,
      image:fadedSkinnyJeans
        ,
    },
  ];
  return (
    <div>
      <Navbar/>
      <div className="banner-image-container">
        <img src={HomeBanner} alt="Fashion Banner" className="banner-image" />
      </div>
      <div className="brand-logos-container">
        <div className="brand-logo">VERSACE</div>
        <div className="brand-logo">ZARA</div>
        <div className="brand-logo">GUCCI</div>
        <div className="brand-logo">PRADA</div>
        <div className="brand-logo">Calvin Klein</div>
      </div>
      <div className="new-arrivals">
        <h1>NEW ARRIVALS</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <h2>{product.name}</h2>
              <div className="rating">⭐ {product.rating}/5</div>
              {product.discount ? (
                <div className="price">
                  <span className="original-price">${product.originalPrice}</span>
                  <span className="discounted-price">${product.price}</span>
                  <span className="discount">{product.discount}</span>
                </div>
              ) : (
                <div className="price">${product.price}</div>
              )}
            </div>
          ))}
        </div>
        <button className="view-all">View All</button>
      </div>
      <div className="new-arrivals">
        <h1>TOP SELLING</h1>
        <div className="product-list">
          {topSelling.map((product, index) => (
            <div className="product" key={index}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <h2>{product.name}</h2>
              <div className="rating">⭐ {product.rating}/5</div>
              {product.discount ? (
                <div className="price">
                  <span className="original-price">${product.originalPrice}</span>
                  <span className="discounted-price">${product.price}</span>
                  <span className="discount">{product.discount}</span>
                </div>
              ) : (
                <div className="price">${product.price}</div>
              )}
            </div>
          ))}
        </div>
        <button className="view-all">View All</button>
      </div>
      <div className="app">
        <div className="header">
          <h1>BROWSE BY DRESS STYLE</h1>
        </div>
        <div className="grid">
          <div className="grid-item casual">
            <span>Casual</span>
          </div>
          <div className="grid-item formal">
            <span>Formal</span>
          </div>
          <div className="grid-item party">
            <span>Party</span>
          </div>
          <div className="grid-item gym">
            <span>Gym</span>
          </div>
        </div>
      </div>
     <div className="slider">
     <h1>OUR HAPPY CUSTOMERS</h1>
     <Slider {...settings}>
      
        <div className='card'>
         
         <div className='review'>
          <div className='review-text'>
          <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
            <p>"Great service! The team at SpareDrive Solutions helped me find the right spare parts for my car quickly and efficiently."</p>
            <p><strong>- Sia Doe</strong></p>
          </div>
        </div>
        </div>
        <div className='card'>
         
         <div className='review'>
          <div className='review-text'>
          <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
            <p>"Great service! The team at SpareDrive Solutions helped me find the right spare parts for my car quickly and efficiently."</p>
            <p><strong>- Sia Doe</strong></p>
          </div>
        </div>
        </div>
        <div className='card'>
        <div className='review'>
          <div className='review-text'>
          <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
            <p>"Great service! The team at SpareDrive Solutions helped me find the right spare parts for my car quickly and efficiently."</p>
            <p><strong>- Sia Doe</strong></p>
          </div>
        </div>
        
        </div>
        <div className='card'>
        <div className='review'>
          <div className='review-text'>
          <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
            <p>"Great service! The team at SpareDrive Solutions helped me find the right spare parts for my car quickly and efficiently."</p>
            <p><strong>- Sia Doe</strong></p>
          </div>
        </div>
        
        </div>
        <div className='card'>
        <div className="reviewer">
        <span className="reviewer-name">Alex K.</span>
        <span className="verified">&#x2714;</span>  
      </div>
      <div className="review-text">
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
      </div>
        
        </div>
      </Slider>
     </div>
     <Footer/>
    </div>
  );
};

export default HomePage;
