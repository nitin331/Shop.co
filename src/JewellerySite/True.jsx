import React from 'react';
import { Link } from 'react-router-dom';
import './True.css';

const True = () => {
  return (
    <div>
      <div className='heading'><h2>TRUE DIAMOND PROMISE</h2></div>
      <div className='image-container'>
        <img src="img/8.webp" alt="" className="diamond-image" />
        <img src="img/9.webp" alt="" className="diamond-image" />
        <img src="img/10.webp" alt="" className="diamond-image" />
      </div>
      <div className='button'>
        <Link to='/certificate'>
        <div className='btext'>VIEW SAMPLE CERTIFICATE</div>
        </Link>
      </div>
     <div className='offerimg'>
     <img src='img/offer.webp' alt='offerdeal'></img>
     </div>
    </div>
  );
}

export default True;
