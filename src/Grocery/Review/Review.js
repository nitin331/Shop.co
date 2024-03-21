import React,{useEffect} from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Review = () => {
  useEffect(() => {
    const swiper = new Swiper('.review-slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <section className="review" id="review">
    <h1 className="heading"> client's <span>review</span> </h1>
    <div className="swiper review-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide slide">

          <i className="fas fa-quote-right" />
          <div className="user">
            <img src="images/WhatsApp Image 2024-02-21 at 10.47.29_a5a25b77.jpg" alt="" />
            <div className="user-info">
              <h3>shubham jadhav          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut voluptatum sunt mollitia tempora, vitae consectetur.</p></h3>
              <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar}  style={{ color: 'gold' }} />
                  ))}
                </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide slide">
         
          <i className="fas fa-quote-right" />
          <div className="user">
            <img src="images/WhatsApp Image 2024-02-21 at 10.57.21_d2acb1e8.jpg" alt="" />
            <div className="user-info">
              <h3>zeeshan shaikh <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut voluptatum sunt mollitia tempora, vitae consectetur.</p></h3>
              <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar}  style={{ color: 'gold' }} />
                  ))}
                </div>
            </div>
          </div>
        </div>
        
        <div className="swiper-slide slide">

                    <i className="fas fa-quote-right" />
                    <div className="user">
                      <img src="images/WhatsApp Image 2021-11-22 at 1.33.49 AM.jpeg" alt="" />
                      <div className="user-info">
                        <h3>nitin handal  <p>I recently discovered this website and their section of instant South Indian mixes and I'm so glad I did! The mixes are incredibly convenient and easy to make, yet they taste like they've been cooked for hours. My family and I are huge fans of South Indian cuisine, and these mixes have made it so much easier for us to enjoy our favorite dishes at home. The quality of the ingredients is top-notch and the taste is authentic.</p></h3>
                        <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar}  style={{ color: 'gold' }} />
                  ))}
                </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide slide">

                       <i className="fas fa-quote-right" />
                       <div className="user">
                     <img src="images/WhatsApp Image 2021-11-22 at 1.33.49 AM.jpeg" alt="" />
                        <div className="user-info">
                     <h3>Pranav Wasade <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut voluptatum sunt mollitia tempora, vitae consectetur.</p></h3>
                     <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar}  style={{ color: 'gold' }} />
                  ))}
                </div>
                         </div>
                          </div>
                         </div>
             </div>
          
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default Review;
