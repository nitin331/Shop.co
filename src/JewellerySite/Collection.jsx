import React from 'react';
import './Collection.css';
import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <div className='container'>
      <div className='heading'>
        <h2>Search by Category</h2>
      </div>
      
      <div className='row'>
        <div className="image-container">
          <Link to="/Engine">
            <img src="https://i.pinimg.com/originals/ab/fe/8b/abfe8bc2c2d68e84a0ed2f931e6dd013.jpg" alt="Rings" />
            <div className="auto-name"> Engine Parts</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Body">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/e59eb08.jpg" alt="Earrings" />
            <div className="auto-name"> Body</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Bearing ">
            <img src="https://4.imimg.com/data4/YO/NX/MY-8611789/industrial-bearings-250x250.jpg" alt="Pendants" />
            <div className="auto-name">Bearings Parts</div>
          </Link>
        </div>
        <div className="image-container"> 
          <Link to="/ClutchSystem">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/4f437d1.jpg" alt="Bracelets" />
            <div className="auto-name">Clutch System</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CarAccessories">
            <img src="https://i.pinimg.com/originals/ab/fe/8b/abfe8bc2c2d68e84a0ed2f931e6dd013.jpg" alt="Tennis Bracelets" />
            <div className="auto-name">Car Accessories</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Maintenance">
            <img src="https://t3.ftcdn.net/jpg/02/24/21/76/240_F_224217647_u7H90R2Ln17UxzdU7gecZF0ir2tSq6ka.jpg" alt="Mens Collection" />
            <div className="auto-name">Maintenance Service</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ElectricCom">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/090a41d.jpg" alt="Mens Collection" />
            <div className="auto-name">Electric Components</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/TyresandAlloys">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/9efb038.jpg" alt="Mens Collection" />
            <div className="auto-name">Tyres and Alloys</div>
          </Link>
        </div>
      </div>
    
      
      
    </div>
  )
}

export default Collection;
