import React from 'react';
import './Contact.css';

import locationIcon from './Contactassets/location.svg';
import callIcon from './Contactassets/call.svg';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We welcome and value your feedback about our product and services.</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Phone</label>
            <input type="tel" placeholder="Enter your phone number" />
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
            <label>Message</label>
            <textarea placeholder="Your message here"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Head Office</h3>
          <div className="info-item">
            <img src={locationIcon} alt="Location" className="icon" />
            <p>Lapasan, Cagayan De Oro City,<br />Philippines (Postal 9000)</p>
          </div>
          <div className="info-item">
            <img src={callIcon} alt="Phone" className="icon" />
            <p>+6396528651640</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
