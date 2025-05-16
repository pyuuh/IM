import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import bankIcon from "./footerassets/bank.svg";
import cardIcon from "./footerassets/card.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left column - Links */}
        <div className="footer-links">
          <div className="link-column">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="link-column">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>

        {/* Center column - Socials and Copyright */}
        <div className="footer-center">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <p className="copyright">Copyright @2024 Blacksmith.</p>
        </div>

        {/* Right column - Payments */}
        <div className="footer-right">
          <div className="payment-section">
            <span>We accept</span>
            <img src={cardIcon} alt="Credit Card" className="payment-icon" />
            <img src={bankIcon} alt="Bank Transfer" className="payment-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;