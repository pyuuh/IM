import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import bankIcon from "./footerassets/bank.svg";
import cardIcon from "./footerassets/card.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
           <div className="footer-bottom">
             <div className="footer-bottom">
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
              <a href="https://paythroughbank.com" target="_blank" rel="noreferrer">
                <img src={bankIcon} alt="Bank Transfer" className="payment-icon" />
              </a>
              <a href="https://paythroughcard.com" target="_blank" rel="noreferrer">
                <img src={cardIcon} alt="Credit Card" className="payment-icon" />
              </a>
            </div>
            </div>
        </div>
      </div>
        <div className="social-icons">
          <a href="https://metalworksfacebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={28} />
          </a>
          <a href="https://metalworksinstagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={28} />
          </a>
          <a href="https://metalworkslinkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size={28} />
          </a>
        </div>
        <p>Copyright ©2024 Metalworks.</p>
      </div>
    </footer>
  );
};

export default Footer;
