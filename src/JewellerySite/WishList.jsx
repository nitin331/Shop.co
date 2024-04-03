import React from 'react';
import './WishList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; // Import the far faHeart icon

const WishList = () => {
  return (
    <div className='cart'>
      <h2>WishList <FontAwesomeIcon icon={faHeart} className="icon cart-icon" /></h2>
    </div>
  );
};

export default WishList;
