import React, { useState } from 'react';
import './oc.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import bronzeShield from './ocassets/bronze_shield.png';
import bronzeSword from './ocassets/bronze_sword.png';
import Header from '../../Components/Header/Header'; 
import Footer from '../../Components/Footer/Footer';
import ereceipt from './ocassets/ereceipt.png';

const OrderConfirm = () => {
  const [isCanceled, setIsCanceled] = useState(false);

  const handlePrint = () => {
    const orderDetails = document.querySelector('.order-container');
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Order Details</title>');
    printWindow.document.write('<style>body { font-family: Arial; padding: 20px; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(orderDetails.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  const handleCancel = () => {
    setIsCanceled(true);
    setTimeout(() => {
      setIsCanceled(false);
    }, 3000);
  };

  return (
    <div className="order-confirmation-page">
      <h1 className="order-title">Order Summary</h1>
      
      <div className="order-container">
        <div className="order-section">
          <h2>Order No. 2023300851</h2>
          <p>We've sent a confirmation email with your order details to: you@mie.com</p>
          <p>For in-store pickups, bring your confirmation email and a valid ID.</p>
          <p>Questions? Reach us anytime — we're always forging something awesome.</p>
        </div>

        <div className="divider"></div>

        <div className="order-section">
          <h3>Order Details</h3>
          
          <div className="shipping-info">
            <h4>Home Shipping</h4>
            <p>Shipping To: CM Resto Ave. Lapsaan, CDOC PH</p>
            <p>Estimated Arrival: 5–7 Business Days</p>
          </div>

          <div className="order-items">
            <div className="order-item">
              <img src={bronzeShield} alt="Bronze Shield" className="item-image" />
              <div className="item-details">
                <p className="item-name"><strong>Bronze Shield</strong></p>
                <p>Qty 1</p>
                <p>Price: P 1,500.00</p>
              </div>
            </div>
            
            <div className="order-item">
              <img src={bronzeSword} alt="Bronze Sword" className="item-image" />
              <div className="item-details">
                <p className="item-name"><strong>Bronze Sword</strong></p>
                <p>Qty 1</p>
                <p>Price: P 2,200.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="order-section">
          <h3>Order Summary</h3>
          
          <table className="order-summary">
            <tbody>
              <tr>
                <td>Order Total (2 items):</td>
                <td>P 3,700.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>+ P 100.00</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>- P 100.00</td>
              </tr>
              <tr className="total-row">
                <td>Order Total</td>
                <td>P 3,700.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="divider"></div>

        <div className="action-buttons">
          <button className="action-btn print-btn" onClick={handlePrint}>Print Order Details</button>
          <button className="action-btn track-btn">Track My Order</button>
          <button className="action-btn cancel-btn" onClick={handleCancel}>Cancel Order</button>
        </div>
      </div>

      {isCanceled && (
        <div className="cancel-notification">
          Your Order Has Been Canceled
        </div>
      )}
    </div>
  );
};

export default OrderConfirm;