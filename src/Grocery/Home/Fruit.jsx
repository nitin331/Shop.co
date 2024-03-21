import React from 'react'
import './Fruit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt,faSearch,faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@reach/router';

const Vegetable = (addToCart) => {

    const products= [
        {
            name: 'Apple',
            image: 'https://cdn.pixabay.com/photo/2016/11/29/03/23/apples-1867043_1280.jpg',
            price: 40,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Banana',
            image: 'https://cdn.pixabay.com/photo/2018/01/29/22/56/bananas-3117509_1280.jpg',
            price: 30,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Orange',
            image: 'https://cdn.pixabay.com/photo/2016/03/05/22/17/food-1239233_1280.jpg',
            price: 25,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Grapes',
            image: 'https://cdn.pixabay.com/photo/2014/12/28/18/22/grapes-582207_640.jpg',
            price: 50,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Watermelon',
            image: 'https://cdn.pixabay.com/photo/2017/06/16/14/35/watermelon-2409368_960_720.jpg',
            price: 20,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Pineapple',
            image: 'https://cdn.pixabay.com/photo/2015/02/14/18/10/pineapple-636562_1280.jpg',
            price: 35,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Mango',
            image: 'https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241_1280.jpg',
            price: 45,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
        {
          name: 'Strawberry',
          image: 'https://cdn.pixabay.com/photo/2018/01/17/22/24/strawberries-3089148_960_720.jpg',
          price: 35,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Peach',
          image: 'https://cdn.pixabay.com/photo/2017/07/21/22/11/apricots-2527193_1280.jpg',
          price: 40,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Pear',
          image: 'https://cdn.pixabay.com/photo/2010/12/13/10/06/food-2280_1280.jpg',
          price: 30,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Cherry',
          image: 'https://cdn.pixabay.com/photo/2018/01/10/16/59/cherries-3074284_1280.jpg',
          price: 45,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Blueberry',
          image: 'https://cdn.pixabay.com/photo/2015/08/18/21/17/blueberries-894839_1280.jpg',
          price: 30,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Kiwi',
          image: 'https://cdn.pixabay.com/photo/2016/03/05/23/02/breakfast-1239438_1280.jpg',
          price: 50,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Plum',
          image: 'https://cdn.pixabay.com/photo/2017/06/21/15/35/plum-2427588_1280.jpg',
          price: 35,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Apricot',
          image: 'https://cdn.pixabay.com/photo/2020/01/16/14/23/apricots-4770760_1280.jpg',
          price: 40,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Grapefruit',
          image: 'https://cdn.pixabay.com/photo/2018/10/16/20/25/grapefruit-3752413_960_720.jpg',
          price: 35,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Lemon',
          image: 'https://cdn.pixabay.com/photo/2018/03/14/15/12/lemon-3225459_1280.jpg',
          price: 25,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Pomegranate',
          image: 'https://cdn.pixabay.com/photo/2018/03/25/11/43/pomegranate-3259161_1280.jpg',
          price: 45,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Cranberry',
          image: 'https://cdn.pixabay.com/photo/2016/10/24/21/51/cranberry-1767425_1280.jpg',
          price: 30,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Raspberry',
          image: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berry-2270_1280.jpg',
          price: 40,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
      ];
  return (
    <div>
     <header className="header">
      
      <a href="#" className="logo"><img src="https://media.istockphoto.com/id/1045368942/vector/abstract-green-leaf-logo-icon-vector-design-ecology-icon-set-eco-icon.jpg?s=612x612&w=0&k=20&c=XIfHMI8r1G73blCpCBFmLIxCtOLx8qX0O3mZC9csRLs=" alt="" height="45px"/> Go Organic</a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#product">product</a>
        <a href="#about">about</a>
        <a href="#review">review</a>
        <a href="#blog">blog</a>
        <a href="#contact">contact</a>
      </nav>
      <div className="icons">
        {/* <div onClick={toggleCart}>
          <FontAwesomeIcon icon={faShoppingBasket} />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div> */}
        <div><FontAwesomeIcon className="search-icon" icon={faSearch} /></div>
        <div><Link to="/signin"><button><FontAwesomeIcon icon={faUser} /></button></Link></div>
      </div>
    </header>
    <section className="product" id="product">
    <h1 className="heading">
      our <span>products</span>
    </h1>
    <div className="box-container">
      {products.map((product, index) => (
        <div className="box" key={index}>
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="content">
            <h3>{product.name}</h3>
            <div className="price">₹{product.price}</div>
            <div className="stars">
              {product.stars.map((star, starIndex) => (
                <FontAwesomeIcon icon={star} key={starIndex} style={{ color: 'gold' }} />
              ))}
            </div>
            <Link to="/cart"><button
              className="btn" >
              Add to Cart
            </button></Link>
          </div>
        </div>
      ))}
    </div>
  </section>
  </div>
  )
}

export default Vegetable;