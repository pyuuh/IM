import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Header/Search/Search';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

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
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;