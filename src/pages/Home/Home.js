import { useState } from 'react';
import './Home.css';

import ironShieldImage from '../../assets/iron_shield.png';
import steelArmorImage from '../../assets/steel_armor.png';
import steelSwordImage from '../../assets/steel_sword.png';
import kristineImage from '../../assets/kristine.png';
import deborahImage from '../../assets/deborah.png';
import jereveImage from '../../assets/jereve.png';
import character from '../../assets/guide.png';
import icon from '../../assets/icon.jpg';
import { useNavigate } from 'react-router-dom'; // Make sure to import this

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Services');
  const navigate = useNavigate(); // Initialize navigate

  const images = {
    icons: {
      services: icon,
      events: icon,
      promos: icon,
    },
    deals: {
      ironShield: ironShieldImage,
      steelArmor: steelArmorImage,
      steelSword: steelSwordImage,
    },
    blacksmiths: {
      kristine: kristineImage,
      deborah: deborahImage,
      jereve: jereveImage,
    },
    character: character,
    heroBanner: "/api/placeholder/1200/300"
  };

  const dealItems = [
    { id: 1, title: 'IRON SHIELD', price: '$45.99', description: 'Forged with precision for warriors', onSale: true, image: images.deals.ironShield },
    { id: 2, title: 'STEEL ARMOR', price: '$62.50', description: 'Protective gear for brave fighters', onSale: true, image: images.deals.steelArmor },
    { id: 3, title: 'STEEL SWORD', price: '$89.99', description: 'Legendary weapon for champions', onSale: true, image: images.deals.steelSword },
  ];

  const blacksmiths = [
    { id: 1, name: 'Kristine', image: images.blacksmiths.kristine },
    { id: 2, name: 'Elven Forger', image: images.blacksmiths.deborah },
    { id: 3, name: 'Dwarven Artisan', image: images.blacksmiths.jereve },
  ];

  const tabs = [
    { name: 'Services', icon: images.icons.services },
    { name: 'Events', icon: images.icons.events },
    { name: 'Promos', icon: images.icons.promos },
  ];

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${images.heroBanner})` }}>
        <div className="hero-main">
          <h2 className="hero-title">Forge Ahead with the Best Gear</h2>
        </div>
        <div className="hero-sidebar">
          <div className="character-container">
            <div className="pixel-character">
              <img src={images.character} alt="Pixel Character" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`tab ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            <div className="tab-icon">
              <img src={tab.icon} alt={`${tab.name} icon`} />
            </div>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Best Deals */}
      <div className="section">
        <h3 className="section-title">Best Deals</h3>
        <div className="deals-grid">
          {dealItems.map((item) => (
            <div key={item.id} className="deal-card">
              <div className="deal-image">
                <img src={item.image} alt={item.title} />
                {item.onSale && <span className="sale-badge">SALE</span>}
              </div>
              <div className="deal-info">
                <h4 className="deal-title">{item.title}</h4>
                <p className="deal-description">{item.description}</p>
                <div className="deal-price-row">
                  <span className="deal-price">{item.price}</span>
                  <button className="buy-button" onClick={() => navigate('/productdetail')}>
                    VIEW DEAL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Blacksmiths */}
      <div className="blacksmiths-section">
        <h3 className="section-title">Top Blacksmiths</h3>
        <div className="blacksmiths-grid">
          {blacksmiths.map((smith) => (
            <div key={smith.id} className="blacksmith-card">
              <div className="blacksmith-image">
                <img src={smith.image} alt={smith.name} />
              </div>
              <p className="blacksmith-name">{smith.name}</p>
            </div>
          ))}
        </div>
        <div className="view-all-row">
          <span className="view-all-text">VIEW INTERACTIVE LIST</span>
        </div>
      </div>

      {/* Features */}
      <div className="features-section">
        <div className="feature">
          <h4 className="feature-title">Your trusted forge for heavy and crafting with skill.</h4>
          <p className="feature-text">Join our artisans.</p>
        </div>
        <div className="limited-deals">
          <h4 className="limited-deals-title">Limited-Time Deals</h4>
          <p className="limited-deals-text">Expires in 12h 24m 45s!</p>
        </div>
      </div>
     
    </div>
  );
}
