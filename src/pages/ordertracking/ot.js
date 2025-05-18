import React from 'react';
import './ot.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.js';


const TrackOrder = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/orderconfirm');
  };

  return (
    <div className="track-order-container">
      <Header />
      <div className="track-order-content">
        <button className="back-button" onClick={handleBack}>⬅ Back</button>

        <h2 className="pixel-title">Track Your Order</h2>
        <div className="status-bar">
          <div className="step completed">Order Created</div>
          <div className="step completed">Picked Up</div>
          <div className="step">Sorting</div>
          <div className="step">Out for Delivery</div>
          <div className="step">Delivered</div>
        </div>

        <div className="order-section">
          <div className="order-info">
            <h3>Order Information</h3>
            <p><strong>Order Number:</strong> 2023300851</p>
            <p><strong>Recipient Name:</strong> Arthur Pendragon</p>
            <p><strong>Contact Number:</strong> +6396528651640</p>
          </div>

          <div className="delivery-status">
            <h3>Delivery Status</h3>
            <ul>
              <li><span className="time">18 Apr 2025 | 10:10 AM</span> – <strong>[Parañaque DC]</strong> Your order has been picked up from our forge and is ready for sorting.</li>
              <li><span className="time">18 Apr 2025 – 10:10 AM</span> – [Parañaque DC] Package has been picked up by our logistics team.</li>
              <li><span className="time">18 Apr 2025 – 08:45 AM</span> – [Blacksmiths Workshop] Item packaged and prepped for delivery.</li>
              <li><span className="time">17 Apr 2025 – 03:20 PM</span> – [Blacksmiths Workshop] Custom steel item has passed quality check.</li>
              <li><span className="time">17 Apr 2025 – 09:00 AM</span> – [Blacksmiths Workshop] Production completed.</li>
              <li><span className="time">16 Apr 2025 – 01:10 PM</span> – Order successfully placed and confirmed.</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TrackOrder;
