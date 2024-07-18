import React, { useState } from 'react';
import AddToCart from './AddToCart';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Bracelet.css';

const TennisBraceletProducts = ({ products, addToCart, addToWishlist }) => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);

    if (alreadyInCart) {
      setSnackbarMessage('Item is already in the cart.');
    } else {
      setCartItems([...cartItems, product]);
      addToCart(product);
      setSnackbarMessage('Item has been added to the cart.');
    }

    setSnackbarOpen(true);
  };

 

  return (
    <div>
      <div className="container">
        <center>
          <h1>Tennis Bracelet</h1>
        </center>
      </div>
      <div className="card-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.imageUrl} className="card-img-top" alt={product.name} height={'100PX'} width={'60%'}></img>
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">Price: ₹{product.price} /-</p>
              <div className="actions">
              <AddToCart product={product} addToCart={() => handleAddToCart(product)} />
                <IconButton className='favicon' onClick={() => addToWishlist(product)}>
                  <FavoriteBorderIcon />
                </IconButton>
                </div>
            </div>
          </div>
        ))}
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default TennisBraceletProducts;
