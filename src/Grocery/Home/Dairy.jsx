import React from 'react'
import './Dairy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt,faSearch ,faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from '@reach/router';

const Vegetable = (addToCart) => {

    const products= [
        {
            name: 'Milk',
            image: 'https://i.pinimg.com/564x/18/d3/98/18d398f7412ee60c449c7a41c931b70a.jpg',
            price: 40,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Amul Butter',
            image: 'https://s3.amazonaws.com/images.ecwid.com/images/27522058/1435709758.jpg',
            price: 30,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Custard Pie',
            image: 'https://cdn.pixabay.com/photo/2015/06/17/13/32/cake-812452_960_720.jpg',
            price: 30,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
            },
          {
            name: 'Amul Curd',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/110768a.jpg?ts=1654845569',
            price: 25,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
         
          {
            name: 'Chesee',
            image: 'https://cdn.pixabay.com/photo/2020/05/17/04/33/cheese-5179968_1280.jpg',
            price: 20,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Ice Creame',
            image: 'https://cdn.pixabay.com/photo/2015/12/20/16/44/ice-cream-1101396_1280.jpg',
            price: 35,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Bread',
            image: 'https://cdn.pixabay.com/photo/2017/09/01/19/05/breadbasket-2705179_1280.png',
            price: 45,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Panner',
            image: 'https://osamdairy.com/wp-content/uploads/2018/05/Product-Paneeri-708x449.jpg',
            price: 30,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
            },
            {
            name: 'Milkmaid',
            image: 'https://n2.sdlcdn.com/imgs/b/2/k/SDL041763953_1-af74e.jpg',
            price: 40,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
          name: 'Eggs',
          image: 'https://cdn.pixabay.com/photo/2020/04/06/01/34/breakfast-5008019_1280.jpg',
          price: 35,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
          name: 'Milk Powder',
          image: 'https://i5.walmartimages.com/asr/1fafc75b-3341-4851-bb8d-b3eb4146d16a_2.7fa3862ba8a10b74bcce7e740f2e5c53.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
          price: 40,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
            name: 'Amul Lassi',
            image: 'https://www.jiomart.com/images/product/600x600/490022078/amul-lassi-1-l-tetra-pak-product-images-o490022078-p590041243-4-202203151737.jpg',
            price: 50,
            stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
          name: 'Coffee',
          image: 'https://cdn.pixabay.com/photo/2016/08/05/17/31/coffee-1572741_1280.png',
          price: 30,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
          name: 'Ghee',
          image: 'https://images.nosh.com/brands/254994261.carringtonfarms-12oz-organicghee-clarifiedbutter-front.jpg',
          price: 45,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
         
          {
          name: 'Dark Chocolate',
          image: 'https://cdn.pixabay.com/photo/2017/05/06/16/44/chocolate-2290244_960_720.jpg',
          price: 50,
          stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
          },
          {
          name: 'Whipped Cream',
          image: 'https://cdn.pixabay.com/photo/2014/03/07/11/00/bananas-282313_1280.jpg',
          price: 35,
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