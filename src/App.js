import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup.js';
<<<<<<< HEAD
import CheckoutPage from './pages/checkout/co.js';
import OrderConfirmPage from './pages/orderconfirm/oc.js';
import OrderTrackingPage from './pages/ordertracking/ot.js';
=======
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Header/Search/Search';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
>>>>>>> ca851b2dcfb95d4deef1f328572b0686b036c374

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
<<<<<<< HEAD
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orderconfirm" element={<OrderConfirmPage />} />
        <Route path="/ordertracking" element={<OrderTrackingPage />} />
      </Routes> 
=======
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>

      <Footer />
>>>>>>> ca851b2dcfb95d4deef1f328572b0686b036c374
    </Router>
  );
}

export default App;