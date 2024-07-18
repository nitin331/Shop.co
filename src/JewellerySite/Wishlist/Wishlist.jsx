import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './Wishlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Wishlist = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <div className='container2'>
      <h2>Wishlist <FontAwesomeIcon icon={faHeart} className="fa-heart" spin /></h2>
      <div className="wishlist-container">
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist-message"> {/* New div for the message */}
            <p>Your Wishlist is empty </p>
          </div>
        ) : (
          wishlistItems.map((item, index) => (
            <div className="wishlist-item" key={index}>
              <img src={item.imageUrl} alt={item.name} height={'100px'} width={'60%'} />
              <div className="wishlist-info">
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price} /-</p>
              </div>
              <div className="wishlist-actions">
                <IconButton onClick={() => removeFromWishlist(item.id)} >
                  <DeleteIcon style={{ color: 'red' }} />
                </IconButton>
              </div>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
};

export default Wishlist;
