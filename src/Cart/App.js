// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage1 from './Cart/ProductPage1';
import ProductPage2 from './Cart/ProductPage2';
import ProductPage3 from './Cart/ProductPage3';
// import Cart from './Cart/Cart';
import CartPage from './Cart/CartPage';

const App = () => {
  // Load cart data from local storage or initialize an empty array if none exists
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const productsPage1 = [
    {
      id: 1,
      name: "Gold Chain Bracelet",
      description: "Elegant gold chain bracelet for a classic look.",
      price: 299.99,
      imageUrl: "https://i.pinimg.com/564x/0f/59/ac/0f59ac6038204fde17752f9ef2e6d1da.jpg"
    },
    {
      id: 2,
      name: "Pearl Strand Bracelet",
      description: "Timeless pearl bracelet for a sophisticated style.",
      price: 199.99,
      imageUrl: "https://i.pinimg.com/564x/b9/0f/27/b90f27e80cd1acb49fa9acbaa28917a9.jpg"
    },
    {
      id: 3,
      name: "Silver Cuff Bracelet",
      description: "Chic silver cuff bracelet for a modern touch.",
      price: 149.99,
      imageUrl: "https://i.pinimg.com/564x/b4/5b/a7/b45ba7563961a2344576bba9c51d55b2.jpg"
    },
    {
      id: 4,
      name: "Rose Gold Bangle",
      description: "Beautiful rose gold bangle with intricate design.",
      price: 349.99,
      imageUrl: "https://i.pinimg.com/564x/94/ee/30/94ee30595c87704ae36ff10e7e223fad.jpg"
    },
    {
      id: 5,
      name: "Crystal Bead Bracelet",
      description: "Delicate bracelet adorned with shimmering crystal beads.",
      price: 79.99,
      imageUrl: "https://i.pinimg.com/564x/d4/19/5b/d4195be3e2077794b31140673e1c88aa.jpg"
    },
    {
      id: 6,
      name: "Leather Wrap Bracelet",
      description: "Trendy leather wrap bracelet for a casual yet stylish look.",
      price: 89.99,
      imageUrl: "https://i.pinimg.com/564x/c8/91/57/c89157823928e95be1ceb151be1b2032.jpg"
    },
    {
      id: 7,
      name: "Sapphire Tennis Bracelet",
      description: "Exquisite tennis bracelet featuring stunning sapphires.",
      price: 1299.99,
      imageUrl: "https://i.pinimg.com/564x/ed/18/ba/ed18bad861fb5798988d849fb2d55e85.jpg"
    },
    {
      id: 8,
      name: "Emerald Cuff Bracelet",
      description: "Luxurious cuff bracelet adorned with vibrant emeralds.",
      price: 1799.99,
      imageUrl: "https://i.pinimg.com/564x/dc/47/da/dc47da85af1dbb98f5d1d82b65b7ae18.jpg"
    },
    {
      id: 9,
      name: "Sterling Silver Charm Bracelet",
      description: "Charming sterling silver bracelet with assorted charms.",
      price: 119.99,
      imageUrl: "https://i.pinimg.com/564x/63/01/ef/6301ef69fa9039ca9d54f2889dfe91bd.jpg"
    },
    {
      id: 10,
      name: "Gemstone Link Bracelet",
      description: "Elegant link bracelet featuring various gemstones.",
      price: 399.99,
      imageUrl: "https://i.pinimg.com/564x/b2/c2/ac/b2c2ac0ea0b1e1fb2175a24daef0e601.jpg"
    },
    {
      id: 11,
      name: "Charm Bangle Bracelet",
      description: "Adorable bangle bracelet with an assortment of charms.",
      price: 69.99,
      imageUrl: "https://i.pinimg.com/564x/da/b2/3e/dab23e9b4eaea8d847ae50cac1ac0085.jpg"
    },
    {
      id: 12,
      name: "Infinity Symbol Bracelet",
      description: "Trendy bracelet featuring the infinity symbol.",
      price: 59.99,
      imageUrl: "https://i.pinimg.com/564x/e2/e2/14/e2e214d95af8dd12b12e56800eba2b54.jpg"
    },
    {
      id: 13,
      name: "Tanzanite Tennis Bracelet",
      description: "Exquisite tennis bracelet featuring rare tanzanite gemstones.",
      price: 1599.99,
      imageUrl: "https://i.pinimg.com/564x/9c/a8/88/9ca888382a87a5b1611edc3e3d188adc.jpg"
    },
    {
      id: 14,
      name: "Chunky Chain Bracelet",
      description: "Bold and stylish chunky chain bracelet.",
      price: 199.99,
      imageUrl: "https://i.pinimg.com/564x/a0/bc/cd/a0bccd16a26e92c520a238e7ebac603c.jpg"
    },
    {
      id: 15,
      name: "Engraved Cuff Bracelet",
      description: "Personalized cuff bracelet with custom engraving.",
      price: 89.99,
      imageUrl: "https://i.pinimg.com/564x/69/71/a1/6971a13e0e29c58e7fcbc9ac144e8a68.jpg"
    },
    {
      id: 16,
      name: "Birthstone Charm Bracelet",
      description: "Charming bracelet featuring birthstone charms for each month.",
      price: 149.99,
      imageUrl: "https://i.pinimg.com/564x/10/0d/15/100d15b3ca355fafb228232fc01ffcaa.jpg"
    },
    {
      id: 17,
      name: "Hematite Bead Bracelet",
      description: "Stylish bracelet made with hematite beads.",
      price: 49.99,
      imageUrl: "https://i.pinimg.com/564x/17/5f/0f/175f0f835edbb897324dbc56a34f4d98.jpg"
    },
    {
      id: 18,
      name: "Vintage Pearl Bracelet",
      description: "Timeless vintage-inspired pearl bracelet.",
      price: 219.99,
      imageUrl: "https://i.pinimg.com/564x/66/09/1b/66091bb5b8346ba65299665635dc1b52.jpg"
    },
    {
      id: 19,
      name: "Diamond Halo Bracelet",
      description: "Elegant bracelet featuring diamonds surrounded by halos of smaller diamonds.",
      price: 1899.99,
      imageUrl: "https://i.pinimg.com/564x/34/e9/0f/34e90f2e8b4e0d995ce4cb3ef178c26f.jpg"
    },
    {
      id: 20,
      name: "Diamond Tennis Bracelet",
      description: "Stunning tennis bracelet featuring sparkling diamonds.",
      price: 999.99,
      imageUrl: "https://i.pinimg.com/564x/5a/ab/46/5aab46b2967c2cf831f40bec6e5ec31c.jpg"
    },
  ];

  const productsPage2 = [
    {
      id: 21,
      name: "Diamonds Stud Earring",
      description: "Classic diamond stud earrings for everyday elegance.",
      price: 899.99,
      imageUrl: "https://i.pinimg.com/564x/34/af/6c/34af6c7c457bcb1013aa968ecdc5deb2.jpg"
    },
    {
      id: 22,
      name: "Sapphire Drop Earrings",
      description: "Elegant drop earrings featuring vibrant sapphires.",
      price: 1299.99,
      imageUrl: "https://i.pinimg.com/564x/aa/28/f9/aa28f978c71f5bbaf28060f2ede0835d.jpg"
    },
    {
      id: 23,
      name: "Rose Gold Dangle Earrings",
      description: "Chic dangle earrings crafted in rose gold.",
      price: 399.99,
      imageUrl: "https://i.pinimg.com/564x/4f/f7/4e/4ff74eb540d7bf4e6438fb76455a8f8c.jpg"
    },
    {
      id: 24,
      name: "Emerald Cluster Earrings",
      description: "Gorgeous cluster earrings adorned with vibrant emeralds.",
      price: 1599.99,
      imageUrl: "https://i.pinimg.com/564x/5f/a4/23/5fa4235522b388fe4f594d2d079b589c.jpg"
    },
    {
      id: 25,
      name: "Pearl Stud Earrings",
      description: "Classic pearl stud earrings for timeless elegance.",
      price: 199.99,
      imageUrl: "https://i.pinimg.com/564x/d1/98/e9/d198e9c89de48ac9dc39f8628a4f945c.jpg"
    },
    {
      id: 26,
      name: "Tanzanite Drop Earrings",
      description: "Exquisite drop earrings featuring rare tanzanite gemstones.",
      price: 1799.99,
      imageUrl: "https://i.pinimg.com/564x/e8/b7/f4/e8b7f45b93a1ae17d5cf4378a04fbb05.jpg"
    },
    {
      id: 27,
      name: "Infinity Symbol Earrings",
      description: "Symbolic earrings featuring the infinity symbol.",
      price: 79.99,
      imageUrl: "https://i.pinimg.com/564x/57/f8/2d/57f82d18523e5e732e09bb2c60cbbfcc.jpg"
    },
    {
      id: 28,
      name: "Halo Diamond Earrings",
      description: "Elegant halo diamond earrings for special occasions.",
      price: 2999.99,
      imageUrl: "https://i.pinimg.com/564x/a6/eb/ef/a6ebefe9f67e97ef3e6618ac90a7885f.jpg"
    },
    {
      id: 29,
      name: "Gold Hoop Earrings",
      description: "Simple and versatile gold hoop earrings.",
      price: 149.99,
      imageUrl: "https://i.pinimg.com/564x/ee/ee/9b/eeee9b65a0b20cd17a6379b0a7cb1caf.jpg"
    },
    {
      id: 30,
      name: "Ruby Stud Earrings",
      description: "Bold ruby stud earrings for a pop of color.",
      price: 1399.99,
      imageUrl: "https://i.pinimg.com/564x/cf/1e/87/cf1e876ad931ff7a099e6a006417f16a.jpg"
    },
    {
      id: 31,
      name: "Sterling Silver Huggie Earrings",
      description: "Charming huggie earrings crafted in sterling silver.",
      price: 59.99,
      imageUrl: "https://i.pinimg.com/564x/c3/f0/d8/c3f0d8b3195b732c46c8a3823832704b.jpg"
    },
    {
      id: 32,
      name: "Crystal Chandelier Earrings",
      description: "Statement chandelier earrings adorned with sparkling crystals.",
      price: 499.99,
      imageUrl: "https://i.pinimg.com/564x/0c/a8/9e/0ca89e649a39fa509e2d2a1cfa596af7.jpg"
    }
  ];
  const productsPage3 = [
    { id: 5, name: 'Product X', price: 15 },
    { id: 6, name: 'Product Y', price: 25 },
  ];
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/page1" element={<ProductPage1 products={productsPage1} addToCart={addToCart} />} />
          <Route path="/page2" element={<ProductPage2 products={productsPage2} addToCart={addToCart} />} />
          <Route path="/page3" element={<ProductPage3 products={productsPage3} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart}/>} />
        </Routes>
        {/* <Cart cart={cart}  /> */}
      </div>
    </Router>
  );
};

export default App;
