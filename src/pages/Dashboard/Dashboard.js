import React, { useState } from 'react';
import './Dashboard.css';

// Import product images
import bronzeArmorImg from './dashassets/bronze_armor.png';
import steelHelmetImg from './dashassets/steel_helmet.png';
import ironSwordImg from './dashassets/iron_sword.png';
import titaniumHelmetImg from './dashassets/titanium_helmet.png';
import ironShieldImg from './dashassets/iron_shield.png';
import titaniumArmorImg from './dashassets/titanium_armor.png';
import ironHelmetImg from './dashassets/iron_helmet.png';
import steelDaggerImg from './dashassets/steel_dagger.png';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [orders, setOrders] = useState([
    {
      id: 'BS-20240328-7429',
      date: 'March 28, 2024',
      total: '₱3,400',
      status: 'Completed',
      items: [
        { id: 1, name: 'Bronze Armor', price: '₱1,500', image: bronzeArmorImg },
        { id: 2, name: 'Steel Helmet', price: '₱600', image: steelHelmetImg },
        { id: 3, name: 'Iron Sword', price: '₱1,000', image: ironSwordImg },
        { id: 4, name: 'Titanium Helmet', price: '₱1,800', image: titaniumHelmetImg }
      ]
    },
    {
      id: 'BS-20240215-3842',
      date: 'February 15, 2024',
      total: '₱900',
      status: 'Shipped',
      items: [
        { id: 1, name: 'Iron Shield', price: '₱900', image: ironShieldImg }
      ]
    },
    {
      id: 'BS-20240103-1267',
      date: 'January 3, 2024',
      total: '₱2,500',
      status: 'Processing',
      items: [
        { id: 1, name: 'Bronze Armor', price: '₱1,500', image: bronzeArmorImg },
        { id: 2, name: 'Iron Sword', price: '₱1,000', image: ironSwordImg }
      ]
    }
  ]);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      nickname: 'Castle',
      default: true,
      line1: 'Royal Tower, Castle Keep',
      line2: 'Kingdom of Camelot',
      city: 'Avalon',
      region: 'Mythical Lands',
      postal: '12345',
      country: 'Britannia'
    },
    {
      id: 2,
      nickname: 'Barracks',
      default: false,
      line1: 'Northern Battalion HQ',
      line2: 'Military Quarter',
      city: 'Camelot',
      region: 'Central Kingdom',
      postal: '67890',
      country: 'Britannia'
    }
  ]);

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: 'Titanium Armor',
      price: '₱2,500',
      stock: 'In Stock',
      image: titaniumArmorImg
    },
    {
      id: 2,
      name: 'Iron Helmet',
      price: '₱800',
      stock: 'Low Stock',
      image: ironHelmetImg
    },
    {
      id: 3,
      name: 'Steel Dagger',
      price: '₱500',
      stock: 'Coming Soon',
      image: steelDaggerImg
    }
  ]);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'shipped':
        return 'status-shipped';
      case 'processing':
        return 'status-processing';
      default:
        return '';
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (

      <div className="dashboard-content">
        <div className="sidebar">
          <div className="nav-container">
            <ul className="nav-menu">
              <li 
                className={activeSection === 'dashboard' ? 'active' : ''}
                onClick={() => setActiveSection('dashboard')}>
                <span className="nav-icon">⚔️</span> Dashboard
              </li>
              <li 
                className={activeSection === 'order-history' ? 'active' : ''}
                onClick={() => setActiveSection('order-history')}>
                <span className="nav-icon">📜</span> Order History
              </li>
              <li 
                className={activeSection === 'profile-details' ? 'active' : ''}
                onClick={() => setActiveSection('profile-details')}>
                <span className="nav-icon">👤</span> Profile Details
              </li>
              <li 
                className={activeSection === 'addresses' ? 'active' : ''}
                onClick={() => setActiveSection('addresses')}>
                <span className="nav-icon">🏰</span> Addresses
              </li>
              <li 
                className={activeSection === 'wishlist' ? 'active' : ''}
                onClick={() => setActiveSection('wishlist')}>
                <span className="nav-icon">❤️</span> Wishlist
              </li>
              <li className="logout-btn">
                <span className="nav-icon">🚪</span> Logout
              </li>
            </ul>
          </div>

          <div className="forge-branding">
            <h3>MetalWorks</h3>
            <p>Your trusted forge for tools and upgrades, crafted with skill, built for adventurers.</p>
          </div>
        </div>

        <div className="main-content">
          {activeSection === 'dashboard' && (
            <div className="dashboard-overview">
              <h2>Your Dashboard</h2>
              <div className="stats-container">
                <div className="stat-card">
                  <h3>Orders Placed</h3>
                  <p className="stat-number">6</p>
                </div>
                <div className="stat-card">
                  <h3>Wishlist Items</h3>
                  <p className="stat-number">{wishlist.length}</p>
                </div>
                <div className="stat-card">
                  <h3>Loyalty Points</h3>
                  <p className="stat-number">450</p>
                </div>
              </div>

              <div className="recent-activity">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon order-icon"></div>
                    <div className="activity-details">
                      <p>Order #{orders[0].id} has been completed</p>
                      <p className="activity-date">{orders[0].date}</p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon wishlist-icon"></div>
                    <div className="activity-details">
                      <p>Item added to wishlist: Elven Bow</p>
                      <p className="activity-date">March 20, 2024</p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon profile-icon"></div>
                    <div className="activity-details">
                      <p>Profile information updated</p>
                      <p className="activity-date">March 15, 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="special-offers">
                <h3>Exclusive Offers</h3>
                <div className="offers-grid">
                  <div className="offer-card">
                    <div className="offer-badge">15% OFF</div>
                    <h4>Seasonal Sale</h4>
                    <p>Premium steel products for knights and warriors</p>
                    <button className="primary-button">Shop Now</button>
                  </div>
                  <div className="offer-card">
                    <div className="offer-badge">NEW</div>
                    <h4>Dragon Scale Armor</h4>
                    <p>Limited edition, fire-resistant protection</p>
                    <button className="primary-button">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'order-history' && (
            <div className="order-history-section">
              <h2>Your Crafted Orders</h2>
              <div className="orders-container">
                {orders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <div>
                        <h3>Order #{order.id}</h3>
                        <p>Ordered on: {order.date}</p>
                        <p>Total: {order.total}</p>
                      </div>
                      <div className={`order-status ${getStatusClass(order.status)}`}>
                        {order.status}
                      </div>
                    </div>
                    <div className="order-items">
                      {order.items.map((item) => (
                        <div key={item.id} className="order-item">
                          <div className="item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                          <div className="item-details">
                            <p className="item-name">{item.name}</p>
                            <p className="item-price">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="order-actions">
                      <button className="secondary-button">Track your Order</button>
                      {order.status === 'Completed' || order.status === 'Shipped' ? (
                        <button className="primary-button">Buy Again</button>
                      ) : (
                        <button className="secondary-button">Cancel Order</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'profile-details' && (
            <div className="profile-section">
              <h2>Blacksmith's Profile</h2>
              <div className="profile-card">
                <div className="profile-avatar">
                  <div className="avatar-placeholder"></div>
                  <button className="secondary-button">Change Avatar</button>
                </div>
                <div className="profile-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" defaultValue="Arthur Pendragon" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" defaultValue="kingarthur@camelot.realm" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" defaultValue="123-456-7890" />
                  </div>
                  <h3>Change Password</h3>
                  <div className="form-group">
                    <label>Current Password</label>
                    <input type="password" placeholder="Enter current password" />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" placeholder="Enter new password" />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm new password" />
                  </div>
                  <div className="form-actions">
                    <button className="secondary-button">Cancel</button>
                    <button className="primary-button">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'addresses' && (
            <div className="addresses-section">
              <h2>Delivery Strongholds</h2>
              <button className="primary-button add-address">Add New Address</button>
              <div className="addresses-container">
                {addresses.map((address) => (
                  <div key={address.id} className={`address-card ${address.default ? 'default-address' : ''}`}>
                    {address.default && <div className="default-badge">Default</div>}
                    <h3>{address.nickname}</h3>
                    <div className="address-details">
                      <p>{address.line1}</p>
                      <p>{address.line2}</p>
                      <p>{address.city}, {address.region} {address.postal}</p>
                      <p>{address.country}</p>
                    </div>
                    <div className="address-actions">
                      <button className="secondary-button">Edit</button>
                      <button className="secondary-button delete-btn">Delete</button>
                      {!address.default && (
                        <button className="secondary-button">Set as Default</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'wishlist' && (
            <div className="wishlist-section">
              <h2>Saved for the Forge</h2>
              <div className="wishlist-container">
                {wishlist.length > 0 ? (
                  wishlist.map((item) => (
                    <div key={item.id} className="wishlist-item">
                      <div className="wishlist-item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                      <div className="wishlist-item-details">
                        <h3>{item.name}</h3>
                        <p className="item-price">{item.price}</p>
                        <p className={`stock-status ${item.stock.toLowerCase().replace(' ', '-')}`}>{item.stock}</p>
                      </div>
                      <div className="wishlist-item-actions">
                        <button className="primary-button">Add to Cart</button>
                        <button 
                          className="secondary-button remove-btn"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-wishlist">
                    <h3>Your wishlist is empty</h3>
                    <p>Start browsing our forge to find items you'd like to save for later</p>
                    <button className="primary-button">Explore Forge</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
    
    </div>
  );
};

export default Dashboard;