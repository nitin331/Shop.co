import React, { useState } from 'react';
import AddToCart from './AddToCart';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './Bracelet.css';

const BraceletProducts = ({ products, addToCart }) => {
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

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div>Filter</div>
      <Divider />
      <List>
        {/* You can add your filter options related to product details here */}
        {/* For example, if you have categories, you can list them */}
        {['Category 1', 'Category 2', 'Category 3'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* You can customize the icons here */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <div className="container">
        <center>
          <h1>Bracelets</h1>
        </center>
        <div className="btn">
          <Button onClick={toggleDrawer(true)}>Filter</Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      </div>
      <div className="card-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.imageUrl} className="card-img-top" alt={product.name} height={'100PX'} width={'60%'}></img>
            <div className="card-body">
              <div className="product-info">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">Price: ₹{product.price} /-</p>
              </div>
              <div className="actions">
              <AddToCart product={product} addToCart={() => handleAddToCart(product)} />
                <IconButton className='favicon' >
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

export default BraceletProducts;
