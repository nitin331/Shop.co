import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './JewellerySite/Navbar';
import Home from './JewellerySite/Home';
import Collection from './JewellerySite/Collection';
import True from './JewellerySite/True';
import CertificateSlider from './JewellerySite/CertificateSlider'; 
import CartPage from './JewellerySite/CartPage';
import BraceletProducts from './JewellerySite/BraceletProducts';
import EarringProducts from './JewellerySite/EarringProducts';
import MensCollectionProducts from './JewellerySite/MensCollectionProducts';
import RingProducts from './JewellerySite/RingProducts';
import TennisBraceletProducts from './JewellerySite/TennisBraceletProducts';
import PendantProducts from './JewellerySite/PendantProducts';
import Certificate from './JewellerySite/Certificate';
import SignIn from './JewellerySite/SignIn';
import Registration from './JewellerySite/Registration'
import Wishlist from './JewellerySite/Wishlist/Wishlist';
import About from './JewellerySite/Info/About';
import Return from './JewellerySite/Info/Return';
import ShippingPolicy from './JewellerySite/Info/ShippingPolicy'
import BuybackPolicy from './JewellerySite/Info/BuybackPolicy'
import PrivacyPolicy from './JewellerySite/Info/PrivacyPolicy'
import TermsConditons from './JewellerySite/Info/TermsCondition'
import OfferPage from './JewellerySite/OfferPage';
import Engine from './JewellerySite/engine/Engine';
import Body from './JewellerySite/Body/Body';
import Bearing from './JewellerySite/Bearings/Bearings';
import ClutchSystem from './JewellerySite/ClutchSystem/ClutchSystem';
import CarAccessories from './JewellerySite/Car Accessories/CarAccessories';
import OfferStripe from './JewellerySite/OfferStripe';
import Maintenance from './JewellerySite/Maintenance Service Parts/Maintenance';
import ElectricCom from './JewellerySite/Electric Components/ElectricCom'
import TyresandAlloys from './JewellerySite/Tyres and Alloys/TyresandAlloys'
import AlloyWheels from './JewellerySite/Tyres and Alloys/AlloyWheels';



const App = () => {
   const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [cartCount, setCartCount] = useState(0);
  


  // Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    const savedCartCount = localStorage.getItem('cartCount');
    if (savedCartCount !== null) {
      setCartCount(parseInt(savedCartCount));
    }
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    const newCartCount = cartCount + 1;
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
  
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1; // Assuming each product object has a 'quantity' property
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, {...product, quantity: 1}]); // Assuming each product object has a 'quantity' property
  
      // Update the cart count only if a new product is added
      const newCartCount = cartCount + 1;
      setCartCount(newCartCount);
      localStorage.setItem('cartCount', newCartCount);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    setCartCount(cartCount - 1);
    const productToRemove = cart.find((item) => item.id === productId);
    if (!productToRemove) return;
  
  
   
    const newCartCount = cartCount - productToRemove.quantity;
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
  };
 

  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem('wishlistItems')) || []
  );

  
  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== productId);
    setWishlistItems(updatedWishlist);
  };


  const productsPage1 = [
    {
      id: 1,
      name: "Clutch Cable",
      description: "Clutch Cable",
      price: 699.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/502c1f3.jpg"
    },
    {
      id: 2,
      name: "Clutch Control Switch",
      description: "Clutch Control Switch",
      price: 399.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/b9cb465.jpg"
    },
    {
      id: 3,
      name: "Clutch Disc",
      description: "Clutch Disctouch.",
      price: 1149.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/ac626db.jpg"
    },
    {
      id: 4,
      name: "Clutch Hose",
      description: "Clutch Hose.",
      price: 249.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/84792a6.jpg"
    },
    {
      id: 5,
      name: "Clutch Kit",
      description: "Clutch Kit",
      price: 1779.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/4f437d1.jpg"
    },
    {
      id: 6,
      name: "Clutch Master Cylinder",
      description: "Clutch Master Cylinder.",
      price: 1789.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/57be749.jpg"
    },
    {
      id: 7,
      name: "Clutch Pedal",
      description: "Clutch Pedal",
      price: 1299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a20873c.jpg"
    },
    {
      id: 8,
      name: "Clutch Pressure Plate",
      description: "Clutch Pressure Plate",
      price: 1799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e698864.jpg"
    },
    {
      id: 9,
      name: "Clutch Release Fork",
      description: "Clutch Release Fork",
      price: 1419.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9bf75c6.jpg"
    },
    {
      id: 10,
      name: "Clutch Release Lever",
      description: "Clutch Release Lever",
      price: 399.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/fc67e26.jpg"
    },
    {
      id: 11,
      name: "Clutch Slave Cylinde",
      description: "Clutch Slave Cylinde",
      price: 469.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/07421e2.jpg"
    },
    {
      id: 12,
      name: "Clutch Repair Kit",
      description: "Trendy bracelet featuring the infinity symbol.",
      price: 559.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/8a3d983.jpg"
    },
   
  ];

  const productsPage2 = [
    {
      id: 21,
      name: "Air Filter",
      description: "Air Filter.",
      price: 199.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a16bbf6.jpg"
    },
    {
      id: 22,
      name: "Automatic Transmission Filter",
      description: "Automatic Transmission Filter",
      price: 1299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/21ce121.jpg"
    },
    {
      id: 23,
      name: "Cabin Filter",
      description: "Cabin Filter",
      price: 399.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/5724225.jpg"
    },
    {
      id: 24,
      name: "Filter",
      description: "Gorgeous cluster earrings adorned with vibrant emeralds.",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/32a61d7.webp"
    },
    {
      id: 25,
      name: "Filter Set",
      description: "Filter Set",
      price: 1199.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9e9e332.jpg"
    },
    {
      id: 26,
      name: "Fuel Filter",
      description: "Fuel Filter",
      price: 799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/82fc142.jpg"
    },
    {
      id: 27,
      name: "Fuel Pump Filter",
      description: "Fuel Pump Filter.",
      price: 579.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e4ecb77.jpg"
    },
    {
      id: 28,
      name: "Oil Filter",
      description: "Oil Filter",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e59eb08.jpg"
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
    {
      id: 57,
      name: "Belt Parts",
      description: "Belt Parts",
      price: 999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/ddbeb81.jpg"
    },
    {
      id: 58,
      name: "Brake Repair Kit",
      description: "Brake Repair Kit",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/8945d07.jpg"
    },
   
    {
      id: 60,
      name: "Brake Fluid",
      description: "Brake Fluid",
      price: 799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/3de286d.jpg"
    },
    {
      id: 61,
      name: "Fog Lamp",
      description: "Fog Lamp",
      price: 199.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/2f94c53.jpg"
    },
    {
      id: 62,
      name: "Glow Plug",
      description: "Glow Plug.",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d6d71f0.jpg"
    },
    {
      id: 63,
      name: "Spark Plug",
      description: "Spark Plug",
      price: 79.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/acd0058.jpg"
    },
    {
      id: 59,
      name: "Wiper Blade and Sets",
      description: "Trendy Wiper Blade and Sets",
      price: 149.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/1053d82.jpg"
    },
    {
      id: 64,
      name: "Horn",
      description: "Horn",
      price: 69.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d5b3ac7.jpg"
    },
    {
      id: 65,
      name: "Shock Absorber and Strut",
      description: "Shock Absorber and Strut",
      price: 299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7ffcac5.jpg"
    },
    {
      id: 66,
      name: "Engine Oil ",
      description: "Engine Oil ",
      price: 1729.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/4614ecf.webp"
    },
    {
      id: 67,
      name: "Clutch",
      description: "Clutch",
      price: 199.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e8cb288.jpg"
    },
    {
      id: 68,
      name: "Repair Service Kit",
      description: "Repair Service Kit",
      price: 89.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/5f75a07.jpg"
    }
  
  ];

  const productsPage4 = [
 
    {
      id: 45,
      name: "Big End Bearing",
      description: "Big End Bearing.",
      price: 1499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/40e95ca.jpg"
    },
    {
      id: 46,
      name: "Camshaft Bush",
      description: "Camshaft Bush",
      price: 1299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/3759fa0.jpg"
    },
    {
      id: 47,
      name: "Camshaft Seal",
      description: "Camshaft Seal",
      price: 999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d2a2960.jpg"
    },
    {
      id: 48,
      name: "Carburettor",
      description: "Carburettor.",
      price: 2299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7103bee.jpg"
    },
    {
      id: 49,
      name: "Carburettor Flanget",
      description: "Carburettor Flange",
      price: 799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0442561.jpg"
    },
    {
      id: 50,
      name: "Control Unit Glow Plug",
      description: "Control Unit Glow Plug",
      price: 1899.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/2676bd2.jpg"
    },
    {
      id: 51,
      name: "Crankcase Gasket",
      description: "Crankcase Gasket",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d19747a.jpg"
    },
    {
      id: 52,
      name: "Crankshaft Gear",
      description: "Crankshaft Gear",
      price: 2599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/abc8452.jpg"
    },
    {
      id: 53,
      name: "Cylinder Head",
      description: "Cylinder Head.",
      price: 999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7a30f2b.jpg"
    },
    {
      id: 54,
      name: "EGR Valve",
      description: "EGR Valve",
      price: 1999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/80f936e.jpg"
    },
    {
      id: 55,
      name: "Injector",
      description: "Injector",
      price: 899.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7f152d0.jpg"
    },
    {
      id: 56,
      name: "Oil Pressure Switcht",
      description: "Oil Pressure Switch",
      price: 1799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/68b39b5.jpg"
    }

  ];
   
  const productsPage5 = [
    {
      id: 33,
      name: " 13 Inch Alloy Wheel",
      description: "The importance of rear wheel bearings can not be ignored as it is the first connection in moving and static areas of a car. It basically serves as a friction reduction device which increases the rotation efficiency. The rolling generates less friction than sliding. The rear wheel bearing kit does that with the help of metal balls that rolls in between two metal rings. Furthermore, the grease allows the smooth motion while letting the wheel hub rotate as freely as possible.",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/1c06dba.jpg"
    },
    {
      id: 34,
      name: "14 Inch Alloy Wheel ",
      description: "Pilot Bearing",
      price: 670.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/67a74ba.jpg"
    },
    {
      id: 35,
      name: "15 Inch Alloy Wheel ",
      description: "Shock Absorber Bearing.",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e56e31f.jpg"
    },
    {
      id: 36,
      name: "16 Inch Alloy Wheel ",
      description: "Transmission Bearing",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/f97ddeb.jpg"
    },
   
   
  
  ];

  const productsPage6 = [
    {
      id: 69,
      name: "AC compressor",
      description: "AC compressor",
      price: 8999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/66617d2.jpg"
    },
    {
      id: 70,
      name: "AC Compressor Clutch",
      description: "AC Compressor Clutch",
      price: 1499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/13b308d.jpg"
    },
    {
      id: 71,
      name: "AC Compressor Oil",
      description: "AC Compressor Oil",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/b0c7133.jpg"
    },
    {
      id: 72,
      name: "AC Compressor Valve",
      description: "AC Compressor Valve",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c9b37c4.jpg"
    },
    {
      id: 73,
      name: "AC Control Unit",
      description: "AC Control Unit",
      price: 799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/63dbad4.jpg"
    },
    {
      id: 74,
      name: "AC Pressure Switch",
      description: "AC Pressure Switch.",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a6a0e7a.jpg"
    },
    {
      id: 75,
      name: "AC Repair Kit",
      description: "AC Repair Kit",
      price: 549.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c425f85.jpg"
    },
    {
      id: 76,
      name: "Air Duct",
      description: "Air Duct.",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/6f792c1.jpg"
    },
    {
      id: 77,
      name: "Air Vent",
      description: "Air Vent",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/699e30c.jpg"
    },
    {
      id: 78,
      name: "Cabin Temperature Sensor",
      description: "Cabin Temperature Sensors.",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0bbbcd9.jpg"
    },
    {
      id: 79,
      name: "Blower Motor Resistor ",
      description: "Blower Motor Resistor",
      price: 579.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0588546.jpg"
    },
    {
      id: 80,
      name: "Condenser Fan",
      description: "Condenser Fan",
      price: 699.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9b70bd1.jpg"
  }

  ];  
  const productsPage7= [
    {
      id: 69,
      name: "AC compressor",
      description: "AC compressor",
      price: 8999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/66617d2.jpg"
    },
    {
      id: 70,
      name: "AC Compressor Clutch",
      description: "AC Compressor Clutch",
      price: 1499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/13b308d.jpg"
    },
    {
      id: 71,
      name: "AC Compressor Oil",
      description: "AC Compressor Oil",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/b0c7133.jpg"
    },
    {
      id: 72,
      name: "AC Compressor Valve",
      description: "AC Compressor Valve",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c9b37c4.jpg"
    },
    {
      id: 73,
      name: "AC Control Unit",
      description: "AC Control Unit",
      price: 799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/63dbad4.jpg"
    },
    {
      id: 74,
      name: "AC Pressure Switch",
      description: "AC Pressure Switch.",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a6a0e7a.jpg"
    },
    {
      id: 75,
      name: "AC Repair Kit",
      description: "AC Repair Kit",
      price: 549.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c425f85.jpg"
    },
    {
      id: 76,
      name: "Air Duct",
      description: "Air Duct.",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/6f792c1.jpg"
    },
    {
      id: 77,
      name: "Air Vent",
      description: "Air Vent",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/699e30c.jpg"
    },
    {
      id: 78,
      name: "Cabin Temperature Sensor",
      description: "Cabin Temperature Sensors.",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0bbbcd9.jpg"
    },
    {
      id: 79,
      name: "Blower Motor Resistor ",
      description: "Blower Motor Resistor",
      price: 579.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0588546.jpg"
    },
    {
      id: 80,
      name: "Condenser Fan",
      description: "Condenser Fan",
      price: 699.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9b70bd1.jpg"
  }

  ];
  return (

    <Router>
      <div>
        <Navbar cartCount={cartCount}  />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} /> 
          <Route path="/true" element={<True />} /> 
          <Route path="/certificates" element={<CertificateSlider />} />
          <Route path="/bracelet" element={<BraceletProducts products={productsPage1} addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/earrings" element={<EarringProducts products={productsPage2} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/mens-collection" element={<MensCollectionProducts products={productsPage3} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/rings" element={<RingProducts products={productsPage5} addToCart={addToCart} addToWishlist={addToWishlist} />}  />
          <Route path="/tennis-bracelets" element={<TennisBraceletProducts products={productsPage4} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/pendant" element={<PendantProducts products={productsPage6} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/alloywheels" element={<AlloyWheels addToCart={addToCart} addToWishlist={addToWishlist} />}  />

          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart}/>} />
          <Route path="/certificate" element={<Certificate/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/return-policy" element={<Return/>} />
          <Route path="/shipping-policy" element={<ShippingPolicy/>} />
          <Route path="/buyback-policy" element={<BuybackPolicy/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-conditions" element={<TermsConditons/>}/>
          <Route path='/OfferPage' element={<OfferPage/>}/>
          <Route path="/Engine" element={<Engine/>}/>
          <Route path='/Body' element={<Body/>}/>
          <Route path='/Bearing' element={<Bearing/>}/>
          <Route path='/ClutchSystem' element={<ClutchSystem/>} />
          <Route path='/CarAccessories'element={<CarAccessories/>}/>
          <Route path='/OfferStripe' element={<OfferStripe/>}/>
          <Route path='/Maintenance' element={<Maintenance/>}/>
          <Route path='/ElectricCom' element={<ElectricCom/>}/>
          <Route path='/TyresandAlloys' element={<TyresandAlloys/>}/>
           
      </Routes> 
      </div>
    </Router>
   
  );
};

export default App;