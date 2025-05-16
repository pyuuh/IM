import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup.js';

import CheckoutPage from './pages/checkout/co.js';
import OrderConfirmPage from './pages/orderconfirm/oc.js';
import OrderTrackingPage from './pages/ordertracking/ot.js';

import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Search from './Components/Header/Search/Search';
import ProductPage from './pages/ProductPage/ProductPages.js';
import ProductDetails from './pages/ProductDetail/ProductDetails.js';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Dashboard from './pages/Dashboard/Dashboard.js';
import FAQ from './pages/FAQ/Faq.js';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions.js';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.js';


function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orderconfirm" element={<OrderConfirmPage />} />
        <Route path="/ordertracking" element={<OrderTrackingPage />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;