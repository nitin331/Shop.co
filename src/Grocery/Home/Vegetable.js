import React from 'react'
import './Vegetable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket,faStar, faStarHalfAlt,faSearch,faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@reach/router';


const Vegetable = () => {

    const products= [
        {
          name: 'Avacado',
          image: 'https://cdn.pixabay.com/photo/2021/04/14/17/45/avocado-6179050_1280.jpg',
          price: 160,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        
        {
          name: 'Mint Leaves',
          image: 'images/product-6.jpg',
          price: 20,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
      
        {
          name: 'Spinach',
          image: 'https://cdn.pixabay.com/photo/2022/08/27/04/00/vegetables-7413568_1280.jpg',
          price: 30,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Carrot',
          image: 'https://cdn.pixabay.com/photo/2018/03/12/12/01/food-3219467_960_720.jpg',
          price: 25,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Cucumber',
          image: 'https://cdn.pixabay.com/photo/2020/04/07/06/05/cucumber-5012185_960_720.png',
          price: 15,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Bell Pepper',
          image: 'https://cdn.pixabay.com/photo/2014/10/22/21/54/bell-peppers-499068_1280.jpg',
          price: 40,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Chilli',
          image: 'https://cdn.pixabay.com/photo/2016/03/05/19/01/appetite-1238240_1280.jpg',
          price: 40,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Bitter Melon',
          image: 'https://cdn.pixabay.com/photo/2012/03/01/00/36/vegetables-19727_1280.jpg',
          price: 40,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Broccoli',
          image: 'https://cdn.pixabay.com/photo/2022/02/18/09/33/broccoli-7020269_1280.jpg',
          price: 35,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Cauliflower',
          image: 'https://cdn.pixabay.com/photo/2013/01/08/01/15/cauliflower-74221_960_720.jpg',
          price: 30,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Eggplant',
          image: 'https://cdn.pixabay.com/photo/2013/01/08/01/14/eggplant-74209_1280.jpg',
          price: 25,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Green Beans',
          image: 'https://cdn.pixabay.com/photo/2014/11/06/17/31/green-beans-519439_1280.jpg',
          price: 20,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Lettuce',
          image: 'https://cdn.pixabay.com/photo/2018/06/17/14/45/salad-3480650_1280.jpg',
          price: 15,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Onion',
          image: 'https://cdn.pixabay.com/photo/2020/02/22/08/40/foods-4869862_1280.jpg',
          price: 25,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Potato',
          image: 'https://cdn.pixabay.com/photo/2012/12/24/08/39/agriculture-72254_1280.jpg',
          price: 20,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Raddish',
          image: 'https://cdn.pixabay.com/photo/2017/07/02/22/01/radish-2465978_960_720.jpg',
          price: 15,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Tomato',
          image: 'https://cdn.pixabay.com/photo/2016/03/05/19/03/tomatoes-1238255_1280.jpg',
          price: 30,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Zucchini',
          image: 'https://cdn.pixabay.com/photo/2018/06/17/14/45/zucchini-3480653_960_720.jpg',
          price: 18,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Sweet Potato',
          image: 'https://cdn.pixabay.com/photo/2015/09/12/06/36/sweet-potato-936680_1280.jpg',
          price: 25,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
        },
        {
          name: 'Cabbage',
          image: 'https://cdn.pixabay.com/photo/2017/07/11/19/29/bokchoy-2494763_1280.png',
          price: 22,
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
        <div><FontAwesomeIcon className="search-icon" icon={faSearch} /></div>
        <div><FontAwesomeIcon className="shoppingbasket" icon={faShoppingBasket} size='1rem'/></div>
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
              className="btn"  >
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