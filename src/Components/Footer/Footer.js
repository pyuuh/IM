import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <div>
            <h4>About Blacksmith</h4>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h4>FAQ and Help Center</h4>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div>
            <h4>We accept</h4>
            <img src="https://facebook.com" alt="Payment method" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaLinkedin className="icon" />
        </div>
        <p>Copyright &copy;2024 Blacksmith.</p>
      </div>
    </footer>
  );
};

export default Footer;