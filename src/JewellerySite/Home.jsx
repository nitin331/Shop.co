import React,{useState,useEffect} from 'react'
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from './Collection';

import { Link } from 'react-router-dom';
// import True from './True';
// import CertificateSlider from './CertificateSlider';
import Footer from './Footer';
import OfferPage from './OfferPage';
import CustomerReview from './CustomerReview';
import OfferStripe from './OfferStripe';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#a987a2" }}
        onClick={onClick}
      />
    );
  }

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState("https://mimilux.com/cdn/shop/files/White_Simple_Photocentric_Jewelry_Promo_Banner_Landscape.jpg?v=1689452834&width=3840");

    useEffect(() => {
        const interval = setInterval(() => {
            
            setCurrentImageIndex(index => (index + 1) % images.length);
           
            setImageSrc(images[currentImageIndex]);
        }, 1500); 

        return () => clearInterval(interval);
    }, [currentImageIndex]); 

    const images = [
        "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://media.istockphoto.com/id/478107962/photo/auto-parts.jpg?s=612x612&w=0&k=20&c=C31mE-cVYFlLqJp9smDKUczPoBEtoYl5gaGxdvH0lmM=",
       
    ];

    <div className='container'>
    <div className='heading'>
      <h2>Search by Category</h2>
    </div>
    
    
  </div>

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
      
        <div className='homeimg'>
        <img src={imageSrc} alt="" height={'90%'} width={'100%'} />
        </div>
        {/* <div className='image-gallery'>
      <div className='image-container'>
        <img
          src='https://hiteshautoparts.in/wp-content/uploads/2020/10/banner01.png'
          alt='Rings'
          className='gallery-image1'
        />
        <div className='image-title'>RINGS (bearing)</div>
      </div>
      <div className='image-container'>
        <img
          src='https://boodmo.com/media/cache/catalog_image/images/categories/e59eb08.jpg'
          alt='Earrings'
          className='gallery-image'
        />
        <div className='image-title'>EARRINGS (filters)</div>
      </div>
    </div> */}
<OfferStripe/>

        <div className='cardhead'>
            <h2>Best Brands We Trust</h2>
            </div>
            
            <div className="container">
      <Slider {...settings}>
        
        <div className='card'>
         <img src='https://boodmo.com/media/images/brand/52704b7.webp' alt='' className='w-80' height={'300px'}></img>
         {/* <div className='card-body'>
         <h3>Bracelet</h3>
            <p>Price :₹1999 /-</p>
         </div> */}
        </div>
        <div className='card'>
         <img src='https://boodmo.com/media/images/brand/af34236.webp' alt='' className='w-80' height={'300px'}></img>
         {/* <div className='card-body'>
         <h3>Earring</h3>
            <p>Price :₹2999 /-</p>
         </div> */}
        </div>
        <div className='card'>
         <img src='https://boodmo.com/media/images/brand/4f106b0.webp' alt='' className='w-80' height={'300px'}></img>
         {/* <div className='card-body'>
         <h3>Rings</h3>
            <p>Price :₹5999 /-</p>
         </div> */}
        </div>
        <div className='card'>
         <img src='https://boodmo.com/media/images/brand/10a8568.webp' alt='' className='w-80' height={'300px'}></img>
         {/* <div className='card-body'>
            <h3>Bead Bracelet</h3>
            <p>Price :₹6999 /-</p>
         </div> */}
        </div>
        <div className='card'>
         <img src='https://boodmo.com/media/images/brand/669cf6a.webp' alt='' className='w-80' height={'300px'}></img>
      
        </div>
        <div className='card'>
         <img src='https://boodmo.com/media/images/brand/7ab516c.webp' alt='' className='w-80' height={'300px'}></img>
      
        </div>
        <div className='card'>
         <img src='https://boodmo.com/media/images/brand/e5b18f5.webp' alt='' className='w-80' height={'300px'}></img>
      
        </div>
        <div className='card'>
         <img src='https://boodmo.com/media/images/brand/987fd20.webp' alt='' className='w-80' height={'300px'}></img>
      
        </div>

        <div className='card'>
         <img src='https://boodmo.com/media/images/brand/1586c06.webp' alt='' className='w-80' height={'300px'}></img>
         {/* <div className='card-body'>
            <h3>Mens Ring</h3>
            <p>Price :₹8999 /-</p>
         </div> */}
        </div>
      </Slider>
    </div>
    <Collection/>
        {/* <True/>
        <CertificateSlider/> */}
       
    <OfferPage/>
    <CustomerReview/>
        <Footer />
    </div>
  )
}

export default Home