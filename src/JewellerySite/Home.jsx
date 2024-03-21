import React from 'react'
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from './Collection';
import True from './True';
import CertificateSlider from './CertificateSlider';
import Footer from './Footer';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "pink" }}
        onClick={onClick}
      />
    );
  }

const Home = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <Arrow/>,
        prevArrow: <Arrow/>,
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




  return (
    <div className='home'>
        <img src="https://mimilux.com/cdn/shop/files/White_Simple_Photocentric_Jewelry_Promo_Banner_Landscape.jpg?v=1689452834&width=3840" alt="" height={'100%'} width={'100%'} />
        <div className='cardhead'>
            <h2>BEST SELLERS</h2>
            </div>
            <div className="container">
      <Slider {...settings}>
        <div className='card'>
         <img src='https://i.pinimg.com/564x/0f/59/ac/0f59ac6038204fde17752f9ef2e6d1da.jpg' alt='' className='w-80' height={'300px'}></img>
         <div className='card-body'>
         <h3>Bracelet</h3>
            <p>Price :₹1999</p>
         </div>
        </div>
        <div className='card'>
         <img src='https://i.pinimg.com/564x/34/af/6c/34af6c7c457bcb1013aa968ecdc5deb2.jpg' alt='' className='w-80' height={'300px'}></img>
         <div className='card-body'>
         <h3>Earring</h3>
            <p>Price :₹2999</p>
         </div>
        </div>
        <div className='card'>
         <img src='/img/123.webp' alt='' className='w-80' height={'300px'}></img>
         <div className='card-body'>
         <h3>Rings</h3>
            <p>Price :₹5999</p>
         </div>
        </div>
        <div className='card'>
         <img src='/img/img4.webp' alt='' className='w-80' height={'300px'}></img>
         <div className='card-body'>
            <h3>Bead Bracelet</h3>
            <p>Price :₹6000</p>
         </div>
        </div>
      </Slider>
    </div>
    <Collection/>
        <True/>
        <CertificateSlider/>
        <Footer />
    </div>
  )
}

export default Home