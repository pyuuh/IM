import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import bankIcon from "./footerassets/bank.svg";
import cardIcon from "./footerassets/card.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Blacksmith</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-column">
            <h4>FAQ & Help Center</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
          <div className="footer-column">
            <h4>We accept</h4>
            <div className="payment-icons">
              <a href="https://yourbanklink.com" target="_blank" rel="noreferrer">
                <img src={bankIcon} alt="Bank Transfer" className="payment-icon" />
              </a>
              <a href="https://yourcardlink.com" target="_blank" rel="noreferrer">
                <img src={cardIcon} alt="Credit Card" className="payment-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size={28} />
          </a>
        </div>
        <p>Copyright ©2024 Metalworks.</p>
      </div>
    </footer>
  );
};

export default Footer;
