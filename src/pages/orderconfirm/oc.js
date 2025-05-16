import React, { useState } from 'react';
import './oc.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import bronzeShield from './ocassets/bronze_shield.png';
import bronzeSword from './ocassets/bronze_sword.png';
import receiptImage from './ocassets/RCPT.png';

const OrderConfirmation = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const subtotal = 2500;
  const shipping = 100;
  const discount = 100;
  const total = subtotal + shipping - discount;

  const handlePrintOrder = () => {
    const link = document.createElement('a');
    link.href = receiptImage;
    link.download = 'Metalworks_Receipt.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCancelOrder = () => {
    setIsCanceled(true);
    setTimeout(() => setIsCanceled(false), 3000);
  };

  const handleTrackOrder = () => {
    window.location.href = '/track-order';
  };

  return (
    <div className="order-confirmation-container">
      <Header />
      
      <div className="confirmation-content">
        <h1 className="confirmation-title">Your order has been forged!</h1>
        
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="order-number">
            <h3>Order No. 2023300851</h3>
            <p>We've sent a confirmation email with your order details to: you@mie.com.</p>
            <p>For in-store pickups, bring your confirmation email and a valid ID.</p>
            <p>Questions? Reach us anytime — we're always forging something awesome.</p>
          </div>
        </div>
        
        <div className="order-details" id="order-receipt">
          <h2>Order Details</h2>
          
          <div className="shipping-info">
            <h3>Home Shipping</h3>
            <p><strong>Shipping To:</strong> CM Recto Ave. Lapasan, CDOC PH</p>
            <p><strong>Estimated Arrival:</strong> 5-7 Business Days</p>
          </div>
          
          <div className="items-list">
            <div className="item">
              <div className="item-name">Browse Shield</div>
              <img src={bronzeShield} alt="Bronze Shield" className="item-image" />
              <div className="item-qty">Qty: 1</div>
              <div className="item-price">Price: P 1,200.00</div>
            </div>
            
            <div className="item">
              <div className="item-name">Browse Sword</div>
              <img src={bronzeSword} alt="Bronze Sword" className="item-image" />
              <div className="item-qty">Qty: 1</div>
              <div className="item-price">Price: P 1,300.00</div>
            </div>
          </div>
          
          <div className="order-total">
            <h3>Order Total (2 items):</h3>
            <div className="total-line">
              <span>Merchandise Subtotal</span>
              <span>P {subtotal.toFixed(2)}</span>
            </div>
            <div className="total-line">
              <span>Shipping Subtotal</span>
              <span>P {shipping.toFixed(2)}</span>
            </div>
            <div className="total-line discount-line">
              <span>Promo Code Discount</span>
              <span>- P {discount.toFixed(2)}</span>
            </div>
            <div className="total-line final-total">
              <span>Total Payment:</span>
              <span>P {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="order-actions">
          <button className="action-btn print-btn" onClick={handlePrintOrder}>Print Order Details</button>
          <button className="action-btn track-btn" onClick={handleTrackOrder}>Track My Order</button>
          <button className="action-btn cancel-btn" onClick={handleCancelOrder}>Cancel Order</button>
        </div>
      </div>
      
      <Footer />
      
      {isCanceled && (
        <div className="cancel-notification">
          Your Order Has Been Canceled
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;