import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup.js';
import About from './pages/About/About.js';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
