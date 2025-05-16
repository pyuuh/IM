import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const printRef = useRef();

  // Sample order data - replace with actual data from your state/API
  const order = {
    number: '2023300851',
    email: 'you@mie.com',
    items: [
      {
        name: 'Bronze Sword',
        quantity: 1,
        price: 4500.00
      }
    ],
    shipping: {
      method: 'Home Shipping',
      address: 'CM Recio Ave, Lapasan, CDCC PH',
      estimatedArrival: '5-7 Business Days',
      cost: 250.00
    },
    subtotal: 4500.00,
    discount: 0.00,
    total: 4750.00
  };

  const handlePrint = () => {
    const element = printRef.current;
    html2canvas(element).then(canvas => {
      const dataUrl = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.download = `order-${order.number}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };

  const handleCancelOrder = () => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      // In a real app, you would call an API to cancel the order
      alert('Order has been cancelled');
      navigate('/'); // Redirect to home page
    }
  };

  return (
    <div className="confirmation-page">
      <Header />
      
      <main className="confirmation-container">
        <div className="confirmation-card" ref={printRef}>
          <h1>Your order has been forged!</h1>
          
          <div className="confirmation-header">
            <h2>Order No. {order.number}</h2>
            <p>
              We've sent a confirmation email with your order details to {order.email}.
            </p>
            <p>
              For in-store pickups, bring your confirmation email and a valid ID.
            </p>
            <p className="support-text">
              Question? Reach us anytime — we're always hoping something awesome.
            </p>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <table>
              <tbody>
                <tr>
                  <td>Order Total ({order.items.length} items):</td>
                  <td>P {order.subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>P {order.shipping.cost.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td>P {order.discount.toFixed(2)}</td>
                </tr>
                <tr className="total-row">
                  <td><strong>Order Total</strong></td>
                  <td><strong>P {order.total.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="order-details">
            <h3>Order Details</h3>
            <p className="shipping-method">{order.shipping.method}</p>
            <p className="shipping-address">Shipping To: {order.shipping.address}</p>
            <p className="arrival-estimate">Estimated Arrival: {order.shipping.estimatedArrival}</p>
            
            {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <p className="item-name">{item.name}</p>
                <div className="item-details">
                  <span>Qty: {item.quantity}</span>
                  <span>Price: P {item.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={handlePrint} className="print-button">
            Print Order Details
          </button>
          <button onClick={handleCancelOrder} className="cancel-button">
            Cancel Order
          </button>
        </div>

        <div className="additional-info">
          <h3>Order Support</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
            <li>We serve</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;