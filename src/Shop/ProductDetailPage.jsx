// ProductDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './Product.css';
import GraphicTshirt from './img1/12.png';
import GraphicTshirt1 from './img1/13.png';
import GraphicTshirt2 from './img1/14.png';
import Footer from './Footer';
import Navbar from './Navbar';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = [
        {
          id: 1,
          name: 'T-shirt with Tape Details',
          price: 120,
          rating: 4.5,
          image: 'https://i.pinimg.com/564x/7a/ed/a1/7aeda100a3369204d272bfcfdfd73bbd.jpg',
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://i.pinimg.com/564x/7a/ed/a1/7aeda100a3369204d272bfcfdfd73bbd.jpg",
            "https://i.pinimg.com/564x/a9/5b/3f/a95b3f0f1b75a8b3aedf8ea5bd3b59c0.jpg",
            "https://i.pinimg.com/564x/7a/ed/a1/7aeda100a3369204d272bfcfdfd73bbd.jpg",
          ],
        },
        {
          id: 2,
          name: 'Skinny Fit Jeans',
          price: 240,
          rating: 4,
          image: 'https://i.pinimg.com/564x/a7/e3/70/a7e3707ac6f504214fc0cc8cb7aaf24d.jpg',
          discount: "20%",
          description: ' Skinny jeans are the slimmest jean style, designed to form a sleek silhouette that shows off the leg.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://i.pinimg.com/564x/a7/e3/70/a7e3707ac6f504214fc0cc8cb7aaf24d.jpg",
            "https://i.pinimg.com/564x/e3/de/b9/e3deb9dc8d4a925b24bef4fae61a101b.jpg",
            "https://i.pinimg.com/564x/8f/5f/89/8f5f89dd79fd183dacd788a7409a8e85.jpg",
          ],
        },
        {
          id: 3,
          name: 'Checkered Shirt',
          price: 120,
          rating: 4,
          image: 'https://i.pinimg.com/564x/ea/90/6d/ea906d6a62891d6451a3deab2d3e540c.jpg',
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://i.pinimg.com/564x/ea/90/6d/ea906d6a62891d6451a3deab2d3e540c.jpg",
            "https://i.pinimg.com/564x/9d/ff/cf/9dffcfd075a138b742b6e1c16f37f210.jpg",
            "https://i.pinimg.com/564x/3b/db/70/3bdb7064339c0f49aa666c5483abb72c.jpg",
          ],
        },
        {
          id: 4,
          name: 'Tape Details',
          price: 120,
          rating: 4,
          image: 'https://i.pinimg.com/564x/7f/4a/24/7f4a242475ec5f72feeaea95c6316931.jpg',
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://i.pinimg.com/564x/7f/4a/24/7f4a242475ec5f72feeaea95c6316931.jpg",
            "https://i.pinimg.com/564x/51/3f/10/513f1086aaca35c03220a185e2b8bdc9.jpg",
            "https://i.pinimg.com/564x/3e/09/99/3e099952e49667ed398a14f493b991d8.jpg",
          ],
        },
        {
          id: 5,
          name: 'Tape Details',
          price: 120,
          rating: 4,
          image: 'https://i.pinimg.com/564x/ea/21/20/ea2120f0447487d1d740dde7c2bd60f4.jpg',
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
          ],
        },
        {
          id: 6,
          name: 'ONE LIFE GRAPHIC T-SHIRT',
          price: 120,
          rating: 4,
          image: GraphicTshirt,
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [GraphicTshirt, GraphicTshirt1, GraphicTshirt2],
        },
        {
          id: 7,
          name: 'Tape Details',
          price: 120,
          rating: 4,
          image: 'https://i.pinimg.com/564x/ea/21/20/ea2120f0447487d1d740dde7c2bd60f4.jpg',
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
          ],
        },
        {
          id: 8,
          name: 'Gradient Graphic T-shirt',
          price: 120,
          rating: 4,
          image: 'https://i.pinimg.com/564x/ea/21/20/ea2120f0447487d1d740dde7c2bd60f4.jpg',
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
          ],
        },
        {
          id: 9,
          name: 'Gradient Graphic T-shirt',
          price: 145,
          rating: 4,
          image: 'https://i.pinimg.com/564x/ea/21/20/ea2120f0447487d1d740dde7c2bd60f4.jpg',
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
          ],
        },
        {
          id: 10,
          name: 'Polo with Tipping Details',
          price: 180,
          rating: 4,
          image: 'https://i.pinimg.com/564x/ea/21/20/ea2120f0447487d1d740dde7c2bd60f4.jpg',
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
          ],
        },
        {
          id: 11,
          name: 'Black Striped T-shirt',
          price: 150,
          rating: 4,
          image: 'https://i.pinimg.com/564x/ea/21/20/ea2120f0447487d1d740dde7c2bd60f4.jpg',
          discount: null,
          description: 'This T-shirt is comfortable and stylish, perfect for casual wear.',
          colors: ["#4d4d33", "#0f4d4d", "#0f0f4d"],
          sizes: ["S", "M", "L", "X-L"],
          images: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
          ],
        },
        

        
      ];
      const product = products.find((p) => p.id === parseInt(id));
      setProduct(product);
      setSelectedImage(product.images[0]);
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[2]);
      setTotalPrice(product.price); // Initialize the total price
    };

    fetchProduct();
  }, [id]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type) => {
    const newQuantity = type === 'increment' ? quantity + 1 : quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * product.price);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      selectedColor,
      selectedSize,
      image: selectedImage,
    };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="product-detail-page">
        <div className="product-images">
          <div className="thumbnails">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? 'active' : ''}
              />
            ))}
          </div>
        </div>
        <div className="main-image">
          <img src={selectedImage} alt={product.name} />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <div className="rating">
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={product.rating} precision={0.5} readOnly />
            </Stack>
            <span>{product.rating}/5</span>
          </div>
          <div className="price">
            <span className="current-price">${totalPrice.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            {product.discount && <span className="discount">-{product.discount}</span>}
          </div>
          <p>{product.description}</p>
          <div className="color-selection">
            <p>Select Colors</p>
            <div className="colors">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`color ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                ></div>
              ))}
            </div>
          </div>
          <div className="size-selection">
            <p>Choose Size</p>
            <div className="sizes">
              {product.sizes.map((size, index) => (
                <div
                  key={index}
                  className={`size ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="purchase-section">
            <div className="quantity-selection">
              <button onClick={() => handleQuantityChange('decrement')}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange('increment')}>+</button>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
