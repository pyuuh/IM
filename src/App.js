import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Search from './Components/Header/Search/Search';
import ProductPage from './pages/ProductPage/ProductPages.js';
import ProductDetails from './pages/ProductDetail/ProductDetails.js';


function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;