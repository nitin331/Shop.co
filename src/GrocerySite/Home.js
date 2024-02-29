import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Grocery = () => {
  return (
          <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Complete Responsive Grocery Store Website</title>
            <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link rel="stylesheet" href="./style.css" />
            <header className="header">
              <a href="#" className="logo"> <i className="fas fa-shopping-cart" /> Grocery </a>
              <nav className="navbar">
                <a href="#home">home</a>
                <a href="#product">product</a>
                <a href="#about">about</a>
                <a href="#review">review</a>
                <a href="#blog">blog</a>
                <a href="#contact">contact</a>
              </nav>
              <div className="icons">
              <FontAwesomeIcon icon={faShoppingBasket} />
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
              
              </div>
              {/* shopping cart */}zz
              <div className="shopping-cart">
                <div className="box">
                  <h1 style={{color: 'orange'}}>Cart is empty</h1>
                  <a href="#product" className="btn">Add Items</a>
                </div>
              </div>
              {/* end */}
            </header>
            {/* end */}
            {/* home */}
            <section className="home" id="home">
              <div className="content">
                <h3>buy best <span> organic product </span> online </h3>
                <a href="#" className="btn"> get yours now </a>
              </div>
            </section>
            {/* end */}
            {/* banner */}
            <section className="banner-container">
              <div className="banner">
                <img src="images/banner1.png" alt="" />
                <div className="content">
                  <span>limited sales</span>
                  <h3>Vegetables</h3>
                  <a href="#" className="btn">shop now</a>
                </div>
              </div>
              <div className="banner">
                <img src="images/banner2.png" alt="" />
                <div className="content">
                  <span>limited sales</span>
                  <h3>fruits</h3>
                  <a href="#" className="btn">shop now</a>
                </div>
              </div>
              <div className="banner">
                <img src="images/banner3.png" alt="" />
                <div className="content">
                  <span>limited sales</span>
                  <h3>assorted</h3>
                  <a href="#" className="btn">shop now</a>
                </div>
              </div>
            </section>
            {/* end */}
            {/* product */}
            <section className="product" id="product">
              <h1 className="heading"> our <span>products</span></h1>
              <div className="box-container">
                <div className="box">
                  <div className="image">
                    <img src="images/istockphoto-1299023802-612x612.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>heinz ketchup</h3>
                    <div className="price">₹230</div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <button className="add-to-cart-btn" onclick="addToCart(' ketchup', 14.99)"> <i className="fas fa-shopping-cart" /></button>
                    <i className="fas fa-heart" />
                    <i className="fas fa-eye" />
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/dlqlO3YfSWGsQ4Tka1YVPQ.webp" alt="" />
                  </div>
                  <div className="content">
                    <h3>heinz ketchup</h3>
                    <div className="price">₹230</div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <button className="add-to-cart-btn" onclick="addToCart('heinz ketchup', 14.99)"> <i className="fas fa-shopping-cart" /></button>
                    <i className="fas fa-heart" />
                    <i className="fas fa-eye" />
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/product-3.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>heinz ketchup</h3>
                    <div className="price">₹230</div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <button className="add-to-cart-btn" onclick="addToCart('heinz', 14.99)"> <i className="fas fa-shopping-cart" /></button>
                    <i className="fas fa-heart" />
                    <i className="fas fa-eye" />
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/product-4.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>Water Melon</h3>
                    <div className="price">₹50</div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <button className="add-to-cart-btn" onclick="addToCart('Water Melon', 50.99)"> <i className="fas fa-shopping-cart" /></button>
                    <i className="fas fa-heart" />
                    <i className="fas fa-eye" />
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/product-5.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>heinz ketchup</h3>
                    <div className="price">₹230</div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <i className="fas fa-shopping-cart" />
                    <i className="fas fa-heart" />
                    <i className="fas fa-eye" />
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/product-6.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>Mint Leaves</h3>
                    <div className="price">₹230</div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <i className="fas fa-shopping-cart" />
                    <i className="fas fa-heart" />
                    <i className="fas fa-eye" />
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/bananas-on-the-same-branch-isolated-on-yellow-pastel-color-background-free-photo.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>heinz ketchup</h3>
                    <div className="price">₹230</div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <button className="add-to-cart-btn" onclick="addToCart('heinz', 14.99)"> <i className="fas fa-shopping-cart" /></button>
                    <i className="fas fa-heart" />
                    <i className="fas fa-eye" />
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/double-stuffed-oreos.webp" alt="" />
                  </div>
                  <div className="content">
                    <h3>heinz ketchup</h3>
                    <div className="price">₹230</div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <button className="add-to-cart-btn" onclick="addToCart('heinz', 14.99)"> <i className="fas fa-shopping-cart" /></button>
                    <i className="fas fa-heart" />
                    <i className="fas fa-eye" />
                  </div>
                </div>
              </div>
            </section>
            {/* end */}
            {/* about */}
            <section className="about" id="about">
              <h1 className="heading"> <span>about </span> us </h1>
              <div className="row">
                <div className="content">
                  <h3>we make organic food in market</h3>
                  <div className="divider" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam rem cupiditate sequi porro assumenda tenetur rerum modi, pariatur enim quis officiis nesciunt et</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam aut voluptatum ipsa dolorum.</p>
                  <a href="#" className="btn">read more</a>
                </div>
                <div className="image">
                  <img src="images/about1.png" alt="" />
                </div>
                <div className="image">
                  <img src="images/about2.png" alt="" />
                </div>
              </div>
            </section>
            {/* end */}
            {/* review */}
            <section className="review" id="review">
              <h1 className="heading"> client's <span>review</span> </h1>
              <div className="swiper review-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut voluptatum sunt mollitia tempora, vitae consectetur.</p>
                    <i className="fas fa-quote-right" />
                    <div className="user">
                      <img src="images/WhatsApp Image 2024-02-21 at 10.47.29_a5a25b77.jpg" alt="" />
                      <div className="user-info">
                        <h3>shubham jadhav</h3>
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut voluptatum sunt mollitia tempora, vitae consectetur.</p>
                    <i className="fas fa-quote-right" />
                    <div className="user">
                      <img src="images/WhatsApp Image 2024-02-21 at 10.57.21_d2acb1e8.jpg" alt="" />
                      <div className="user-info">
                        <h3>zeeshan shaikh</h3>
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut voluptatum sunt mollitia tempora, vitae consectetur.</p>
                    <i className="fas fa-quote-right" />
                    <div className="user">
                      <img src="images/WhatsApp Image 2021-11-22 at 1.33.49 AM.jpeg" alt="" />
                      <div className="user-info">
                        <h3>prasad bachhav
                        </h3>
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut voluptatum sunt mollitia tempora, vitae consectetur.</p>
                    <i className="fas fa-quote-right" />
                    <div className="user">
                      <img src="images/WhatsApp Image 2021-11-22 at 1.33.49 AM.jpeg" alt="" />
                      <div className="user-info">
                        <h3>akshay divekar
                        </h3>
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut voluptatum sunt mollitia tempora, vitae consectetur.</p>
                    <i className="fas fa-quote-right" />
                    <div className="user">
                      <img src="images/WhatsApp Image 2021-11-22 at 1.33.49 AM.jpeg" alt="" />
                      <div className="user-info">
                        <h3>pranav wasade</h3>
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut voluptatum sunt mollitia tempora, vitae consectetur.</p>
                    <i className="fas fa-quote-right" />
                    <div className="user">
                      <img src="images/WhatsApp Image 2021-11-22 at 1.33.49 AM.jpeg" alt="" />
                      <div className="user-info">
                        <h3>nitin handal</h3>
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end */}
            {/* blog */}
            <section className="blog" id="blog">
              <h1 className="heading"> our <span> blog</span> </h1>
              <div className="box-container">
                <div className="box">
                  <div className="image">
                    <img src="images/blog1.png" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#"> <i className="fas fa-user" /> by admin </a>
                    </div>
                    <h3>healthy vegetables to try</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates voluptatum magni similique beatae doloribus qui facilis officia.</p>
                    <a href="#" className="btn"> read more </a>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/blog2.png" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#"> <i className="fas fa-user" /> by admin </a>
                    </div>
                    <h3>healthy vegetables to try</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates voluptatum magni similique beatae doloribus qui facilis officia.</p>
                    <a href="#" className="btn"> read more </a>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/blog3.png" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#"> <i className="fas fa-user" /> by admin </a>
                    </div>
                    <h3>healthy vegetables to try</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates voluptatum magni similique beatae doloribus qui facilis officia.</p>
                    <a href="#" className="btn"> read more </a>
                  </div>
                </div>
              </div>
            </section>
            {/* end */}
            {/* contact */}
            <section className="contact" id="contact">
              <h1 className="heading"> contact <span> now </span> </h1>
              <div className="row">
                <div className="image">
                  <img src="images/contact.png" alt="" />
                </div>
                <form action>
                  <div className="inputBox">
                    <input type="text" placeholder="first name" />
                    <input type="text" placeholder="last name" />
                  </div>
                  <div className="inputBox">
                    <input type="email" placeholder="email address" />
                    <input type="number" placeholder="phone" />
                  </div>
                  <textarea placeholder="message" id cols={30} rows={10} defaultValue={""} />
                  <input type="submit" defaultValue="order now" className="btn" />
                </form>
              </div>
            </section>
            {/* end */}
            {/* footer */}
            <section className="footer">
              <div className="box-container">
                <div className="box">
                  <h3>find us here</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusamus praesentium.</p>
                  <div className="share">
                    <a href="#" className="fab fa-facebook-f" />
                    <a href="#" className="fab fa-twitter" />
                    <a href="#" className="fab fa-instagram" />
                    <a href="#" className="fab fa-linkedin" />
                  </div>
                </div>
                <div className="box">
                  <h3>contact us</h3>
                  <p>+52 2 1478 7412</p>
                  <a href="#" className="link">ninjashub@gmail.com</a>
                </div>
                <div className="box">
                  <h3>localization</h3>
                  <p>230 points of pines dr <br />
                    colorado springs <br />
                    United States.
                  </p>
                </div>
              </div>
              <div className="credit">created by <span> ninjashub </span> all rights reserved!</div>
            </section>
          </div>
        );
      }

export default Grocery