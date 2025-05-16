import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';

const OrderTracking = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/orderconfirm');
  };

  return (
    <div className="order-tracking-page">
      <Header />
      
      <div className="order-tracking-container">
        <button className="back-button pixel-button" onClick={handleBackClick}>
          ← Back to Orders
        </button>
        
        <div className="order-header pixel-border">
          <h1 className="pixel-text">YOUR ORDER HAS BEEN FORGED!</h1>
        </div>
        
        <div className="order-summary pixel-border">
          <h2 className="pixel-text">Order Summary</h2>
          <h3 className="pixel-text">Order No. 2023300851</h3>
          <p className="pixel-text">
            We've sent a confirmation email with your order details to: you@mie.com.
          </p>
          <p className="pixel-text">
            For in-store pickups, bring your confirmation email and a valid ID.
          </p>
          <p className="pixel-text">
            Questions? Reach us anytime — we're always forging something awesome.
          </p>
        </div>
        
        <div className="order-details pixel-border">
          <h2 className="pixel-text">Order Details</h2>
          
          <div className="shipping-info pixel-border-inner">
            <h3 className="pixel-text">Home Shipping</h3>
            <p className="pixel-text"><strong>Shipping To:</strong> CM Recto Ave. Lapasan, CDOC PH</p>
            <p className="pixel-text"><strong>Estimated Arrival:</strong> 5-7 Business Days</p>
          </div>
          
          <div className="product-info pixel-border-inner">
            <h3 className="pixel-text">Browse Shield</h3>
            <table className="pixel-table">
              <tbody>
                <tr>
                  <td className="pixel-text"><strong>Qty:</strong> 1</td>
                  <td className="pixel-text"><strong>Price:</strong> P 1,200.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="order-information pixel-border">
          <h2 className="pixel-text">Order Information</h2>
          <p className="pixel-text"><strong>Order Number:</strong> 2023300851</p>
          <p className="pixel-text"><strong>Recipient Name:</strong> Arthur Pendragon</p>
          <p className="pixel-text"><strong>Contact Number:</strong> +8396538651640</p>
        </div>
        
        <div className="delivery-status pixel-border">
          <h2 className="pixel-text">Delivery Status</h2>
          <div className="timeline pixel-timeline">
            <div className="timeline-item">
              <div className="timeline-date pixel-text">18 Apr 2025 | 10:10 AM</div>
              <div className="timeline-desc pixel-text">[Parafiaque DC] Your order has been picked up from our forge and is ready for sorting.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date pixel-text">18 Apr 2025 – 10:10 AM</div>
              <div className="timeline-desc pixel-text">[Parafiaque DC] Package has been picked up by our logistics team.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date pixel-text">18 Apr 2025 – 08:45 AM</div>
              <div className="timeline-desc pixel-text">[Blacksmiths Workshop] Item packaged and prepped for delivery.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date pixel-text">17 Apr 2025 – 03:20 PM</div>
              <div className="timeline-desc pixel-text">[Blacksmiths Workshop] Custom steel item has passed quality check.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date pixel-text">17 Apr 2025 – 09:00 AM</div>
              <div className="timeline-desc pixel-text">[Blacksmiths Workshop] Production completed.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date pixel-text">16 Apr 2025 – 01:10 PM</div>
              <div className="timeline-desc pixel-text">Order successfully placed and confirmed.</div>
            </div>
          </div>
        </div>
        
        <div className="about-section pixel-border">
          <h3 className="pixel-text">About Blacksmith (About Us):</h3>
          <ul className="pixel-list">
            <li className="pixel-text">FAQ & Help Center</li>
            <li className="pixel-text">Phone Editor</li>
            <li className="pixel-text">Terms of Use</li>
            <li className="pixel-text">We accept</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderTracking;