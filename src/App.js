import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup.js';
import ProductDetails from './pages/ProductDetail/ProductDetails.js';
import ProductPage from './pages/ProductPage/ProductPages.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productpage" element={<ProductPage />} />
        {/* Ensure this matches EXACTLY what you use in ProductPage links */}
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;