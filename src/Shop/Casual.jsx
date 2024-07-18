import React,{useState} from 'react';
import './Casual.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GraphicTshirt2 from './img1/21.png';
import GraphicTshirt3 from './img1/22.png';
import GraphicTshirt4 from './img1/23.png';
import GraphicTshirt5 from './img1/1.png';
import GraphicTshirt6 from './img1/3.png';
import GraphicTshirt7 from './img1/4.png';
import GraphicTshirt8 from './img1/5.png';
import GraphicTshirt9 from './img1/6.png';
import GraphicTshirt from './img1/7.png';




const products = [
  {
    id: 9,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image:GraphicTshirt2,
  },
  {
    id: 10,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: GraphicTshirt3,
  },
  {
    id: 11,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    rating: 5,
    image: GraphicTshirt4,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 145,
    rating: 3.5,
    image:GraphicTshirt5,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: GraphicTshirt6,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 120,
    originalPrice: 150,
    rating: 5,
    image: GraphicTshirt7,
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 145,
    rating: 3.5,
    image:GraphicTshirt8,
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    price: 180,
    rating: 4.5,
    image:GraphicTshirt9,
  },
  
];

const ProductCard = ({ product }) => {

  
  return (
    <div className="productcard">
      <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
      <h3>{product.name}</h3>
      <div className="rating">
        {'⭐'.repeat(Math.floor(product.rating))}
        {product.rating % 1 ? '⭐️' : ''}
        <span>({product.rating}/5)</span>
      </div>
      <div className="price">
        {product.originalPrice ? (
          <>
            <span className="original-price">${product.originalPrice}</span>
            <span className="discount-price">${product.price}</span>
          </>
        ) : (
          <span>${product.price}</span>
        )}
      </div>
      
    </div>
  );
};

const App = () => {

  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedStyles, setSelectedStyles] = useState([]);

  const colors = ['green', 'red', 'yellow', 'orange', 'blue', 'purple', 'pink', 'white', 'black'];
  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
  const styles = ['Casual', 'Formal', 'Party', 'Gym'];

  const handlePriceChange = (event) => {
    const value = event.target.value.split(',').map(Number);
    setPriceRange(value);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color) ? prevColors.filter((c) => c !== color) : [...prevColors, color]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleStyleChange = (style) => {
    setSelectedStyles((prevStyles) =>
      prevStyles.includes(style) ? prevStyles.filter((s) => s !== style) : [...prevStyles, style]
    );
  };

  const applyFilters = () => {
    const filters = {
      priceRange,
      selectedColors,
      selectedSize,
      selectedStyles,
    };
    console.log('Filters applied:', filters);
  };

  return (
    <div>
        <Navbar/>
        <div className="filter-container">
      <h2>Filters</h2>

      <div className="filter-section">
        <h3>Price</h3>
        <input
          type="range"
          min="50"
          max="200"
          value={priceRange}
          onChange={handlePriceChange}
          multiple
        />
        <div className="price-values">
          <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="filter-section">
        <h3>Colors</h3>
        <div className="colors">
          {colors.map((color) => (
            <div
              key={color}
              className={`color-box ${selectedColors.includes(color) ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Size</h3>
        <div className="sizes">
          {sizes.map((size) => (
            <div
              key={size}
              className={`size-box ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Dress Style</h3>
        <div className="styles">
          {styles.map((style) => (
            <div
              key={style}
              className={`style-box ${selectedStyles.includes(style) ? 'selected' : ''}`}
              onClick={() => handleStyleChange(style)}
            >
              {style}
            </div>
          ))}
        </div>
      </div>

      <button className="apply-button" onClick={applyFilters}>
        Apply Filter
      </button>
    </div>

        <div className="app">
      <h1>Casual</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
   
    <Footer/>
    </div>
  );
};

export default App;
