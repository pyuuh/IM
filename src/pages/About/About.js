import React from "react"; 
import "./About.css";
import fbIcon from "./Aboutassets/fb.png";
import instaIcon from "./Aboutassets/insta.png";
import linkedinIcon from "./Aboutassets/linkedin.png";

export default function AboutPage() {
  return (
    <div className="about-page">

      <main className="about-main">
        <h2 className="section-title">About Us</h2>
        <p className="description">
          Metalworks Online Market is built on a passion for quality craftsmanship. 
          We bring together skilled makers and customers who appreciate authentic, handcrafted metal goods – all in one trusted, easy-to-use platform.
        </p>
      </main>

      <section className="content-section">
        <div className="section">
          <h3 className="section-heading">Mission</h3>
          <p>
            To connect skilled blacksmiths with customers worldwide by offering a trusted online marketplace for high-quality, handcrafted metal goods. We aim to support traditional craftsmanship while delivering exceptional value and service to our customers.
          </p>
        </div>

        <div className="section">
          <h3 className="section-heading">Vision</h3>
          <p>
            To become the leading online destination for premium blacksmith products by fostering a community built on authenticity, craftsmanship, and customer satisfaction.
          </p>
        </div>

        <div className="section">
          <h3 className="section-heading">Contact details</h3>
          <ul className="contact-list">
            <li><strong>Business Name:</strong> Metalworks</li>
            <li><strong>Customer Support Email:</strong> metalsupport@metalworks.com</li>
            <li><strong>Phone Number:</strong> +63-9652-865-1640</li>
            <li><strong>Business Address:</strong> Lapasan, Cagayan De Oro City, Philippines (Postal 9000)</li>
            <li><strong>Working Hours:</strong> Monday – Friday: 9:00 AM – 5:00 PM (EST), Saturday – Sunday: Closed</li>
          </ul>
        </div>

        <div className="section">
          <h3 className="section-heading">Social Media:</h3>
          <div className="about-socials">
            <div className="social-item">
            <img src={fbIcon} alt="Facebook" className="social-icon" />
              <div className="social-text">
                <p>Facebook</p>
                <p>@metalworksfb</p>
              </div>
            </div>
            <div className="social-item">
            <img src={instaIcon} alt="Instagram" className="social-icon" />
              <div className="social-text">
                <p>Instagram</p>
                <p>@metalworksig</p>
              </div>
            </div>
            <div className="social-item">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              <div className="social-text">
                <p>LinkedIn</p>
                <p>@metalworks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
