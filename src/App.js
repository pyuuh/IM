import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup.js';
import CheckoutPage from './pages/checkout/co.js';
import OrderConfirmPage from './pages/orderconfirm/oc.js';
import OrderTrackingPage from './pages/ordertracking/ot.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orderconfirm" element={<OrderConfirmPage />} />
        <Route path="/ordertracking" element={<OrderTrackingPage />} />
      </Routes> 
    </Router>
  );
}

export default App;