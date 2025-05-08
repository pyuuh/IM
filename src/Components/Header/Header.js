import React from 'react';
import './Header.css';
import logo from './logo.png';  // Replace with your actual logo path 
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-title">Metalworks | About Us</span>
      </div>
      <div className="header-right">
        <button className="search-btn">
          <FaSearch />
        </button>
        <button className="profile-btn">
          <FaUserCircle />
        </button>
      </div>
    </header>
  );
};

export default Header;
