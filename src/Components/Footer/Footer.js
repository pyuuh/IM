import React from "react";
import "./Footer.css";
import fbIcon from "./footerassets/fb.png";
import instaIcon from "./footerassets/insta.png";
import linkedinIcon from "./footerassets/linkedin.png";
import payIcon from "./footerassets/pay.png";
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
            <img src={payIcon} alt="Pay" className="payment-icon" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={fbIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <p>Copyright ©2024 Blacksmith.</p>
      </div>
    </footer>
  );
};

export default Footer;
