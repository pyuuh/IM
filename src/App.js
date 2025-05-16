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
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

import List from './pages/List/List.js';


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

        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/List" element={<List />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;