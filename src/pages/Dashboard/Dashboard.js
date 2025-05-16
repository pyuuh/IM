import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const user = {
    name: 'Arthur Pendragon',
    email: 'arthur@camelot.com',
    phone: '123-456-7890'
  };

  const addresses = [
    {
      id: 1,
      type: 'Shipping',
      street: '123 Castle Road',
      city: 'Camelot',
      state: 'England',
      zip: '12345'
    },
    {
      id: 2,
      type: 'Billing',
      street: '456 Round Table Ave',
      city: 'Camelot',
      state: 'England',
      zip: '12345'
    }
  ];

  const wishlistItems = [
    { id: 1, name: 'Damascus Steel Hammer', price: 'P3,200' },
    { id: 2, name: 'Blacksmith Tongs', price: 'P1,500' },
    { id: 3, name: 'Forge Bellows', price: 'P4,500' }
  ];

  const orders = [
    {
      id: 'RS-20240328-7429',
      date: 'March 28, 2024',
      total: 'P9,000',
      status: 'Completed',
      items: [
        { id: 1, name: 'Master Blacksmith Hammer' },
        { id: 2, name: 'Carbon Steel Ingots' }
      ]
    },
    {
      id: 'RS-20240215-3842',
      date: 'February 15, 2024',
      total: 'P3,700',
      status: 'Shipped',
      items: [
        { id: 1, name: 'Leather Apron' }
      ]
    },
    {
      id: 'RS-20240103-1267',
      date: 'January 3, 2024',
      total: 'P7,500',
      status: 'Processing',
      items: [
        { id: 1, name: 'Anvil' },
        { id: 2, name: 'Tongs Set' }
      ]
    }
  ];

  const renderDashboard = () => (
    <div className="dashboard-overview">
      <h2>Dashboard</h2>
      <div className="dashboard-summary">
        <div className="summary-box">
          <h3>Recent Orders</h3>
          <p>{orders.length} orders</p>
        </div>
        <div className="summary-box">
          <h3>Wishlist</h3>
          <p>{wishlistItems.length} items</p>
        </div>
        <div className="summary-box">
          <h3>Addresses</h3>
          <p>{addresses.length} saved</p>
        </div>
      </div>
      <div className="welcome-message">
        <h3>Welcome to Metalworks</h3>
        <p>Your trusted forge for tools and upgrades, crafted with skill, built for adventurers.</p>
        <div className="action-buttons">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">View Deals</button>
        </div>
      </div>
    </div>
  );

  const renderOrderHistory = () => (
    <div className="order-history">
      <h2>Order History</h2>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <div className="order-header">
              <div className="order-details">
                <h3>Order #{order.id}</h3>
                <p>Ordered on: {order.date}</p>
                <p>Total: {order.total}</p>
              </div>
              <div className="order-status">
                <span className={`status-badge ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
            </div>
            <div className="order-items">
              {order.items.map(item => (
                <div key={item.id} className="item-box">
                  <div className="item-placeholder"></div>
                  <p className="item-name">Item {item.id}</p>
                </div>
              ))}
            </div>
            <div className="order-actions">
              <button className="secondary-btn">Track your Order</button>
              <button className="primary-btn">Buy Again</button>
              {order.status === 'Processing' && (
                <button className="cancel-btn">Cancel Order</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfileDetails = () => (
    <div className="profile-details">
      <h2>Profile Details</h2>
      <div className="profile-form">
        <div className="form-section">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue={user.name} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" defaultValue={user.email} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" defaultValue={user.phone} />
          </div>
        </div>
        <div className="form-section">
          <h3>Change Password</h3>
          <div className="form-group">
            <label>Current Password</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input type="password" />
          </div>
        </div>
        <div className="form-actions">
          <button className="primary-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );

  const renderAddresses = () => (
    <div className="addresses">
      <h2>Addresses</h2>
      <div className="address-list">
        {addresses.map(address => (
          <div key={address.id} className="address-item">
            <div className="address-type">{address.type}</div>
            <div className="address-details">
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zip}</p>
            </div>
            <div className="address-actions">
              <button className="secondary-btn">Edit</button>
              <button className="cancel-btn">Delete</button>
            </div>
          </div>
        ))}
        <div className="add-new-address">
          <button className="primary-btn">Add New Address</button>
        </div>
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <div className="wishlist-items">
        {wishlistItems.map(item => (
          <div key={item.id} className="wishlist-item">
            <div className="item-placeholder"></div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
            <div className="item-actions">
              <button className="primary-btn">Add to Cart</button>
              <button className="cancel-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'order-history':
        return renderOrderHistory();
      case 'profile-details':
        return renderProfileDetails();
      case 'addresses':
        return renderAddresses();
      case 'wishlist':
        return renderWishlist();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Your Account</h1>
          <p>Welcome back, {user.name}</p>
        </div>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <ul>
              <li className={activeSection === 'dashboard' ? 'active' : ''}>
                <button onClick={() => setActiveSection('dashboard')}>Dashboard</button>
              </li>
              <li className={activeSection === 'order-history' ? 'active' : ''}>
                <button onClick={() => setActiveSection('order-history')}>Order History</button>
              </li>
              <li className={activeSection === 'profile-details' ? 'active' : ''}>
                <button onClick={() => setActiveSection('profile-details')}>Profile Details</button>
              </li>
              <li className={activeSection === 'addresses' ? 'active' : ''}>
                <button onClick={() => setActiveSection('addresses')}>Addresses</button>
              </li>
              <li className={activeSection === 'wishlist' ? 'active' : ''}>
                <button onClick={() => setActiveSection('wishlist')}>Wishlist</button>
              </li>
              <li>
                <button className="logout-btn">Logout</button>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;