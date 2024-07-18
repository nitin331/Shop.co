// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Shop/HomePage';
import ProductDetailPage from './Shop/ProductDetailPage';
import CartPage from './Shop/CartPage';
import Casual from './Shop/Casual'
import About from './Shop/FooterDetails/About';
import TermsAndConditions from './Shop/FooterDetails/Terms';
import PrivacyPolicy from './Shop/FooterDetails/PrivacyPolicy';
import CustomerSupport from './Shop/FooterDetails/CustomerSupport';
import DeliveryDetails from './Shop/FooterDetails/DeliveryDetails';
import PaymentPage from './Shop/PaymentPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/casual' element={<Casual/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/customersupport' element={<CustomerSupport/>}/>
        <Route path='/deliverydetails' element={<DeliveryDetails/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
