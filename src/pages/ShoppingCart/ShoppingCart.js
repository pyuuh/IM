import { useState } from 'react';
import './ShoppingCart.css';

// Import all images
import ironSwordImg from './scassets/iron_sword.png';
import titaniumShieldImg from './scassets/titanium_shield.png';
import bronzeHelmetImg from './scassets/bronze_helmet.png';
import steelSwordImg from './scassets/steel_sword.png';
import bronzeDaggerImg from './scassets/bronze_dagger.png';
import ironArmorImg from './scassets/iron_armor.png';
import steelHelmetImg from './scassets/steel_helmet.png';
import titaniumDaggerImg from './scassets/titanium_dagger.png';

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Iron Sword", description: "Crafted for strength and durability, this iron sword is a reliable blade for beginners and seasoned warriors alike.", price: 1000, quantity: 1, image: ironSwordImg },
    { id: 2, name: "Titanium Shield", description: "Built for unmatched defense, this titanium shield combines lightweight strength with a sleek, modern design", price: 1900, quantity: 1, image: titaniumShieldImg },
    { id: 3, name: "Bronze Helmet", description: "A timeless piece of armor, this bronze helmet blends classic design with rugged durability.", price: 1100, quantity: 1, image: bronzeHelmetImg },
    { id: 4, name: "Steel Sword", description: "Forged for power and precision, this steel sword offers sharp performance and a polished, battle-ready look.", price: 800, quantity: 1, image: steelSwordImg }
  ]);

  const [recommendedItems, ] = useState([
    { id: 5, name: "Bronze Dagger", price: 1000, image: bronzeDaggerImg },
    { id: 6, name: "Iron Armor", price: 1200, image: ironArmorImg },
    { id: 7, name: "Steel Helmet", price: 600, image: steelHelmetImg },
    { id: 8, name: "Titanium Dagger", price: 1700, image: titaniumDaggerImg }
  ]);

  const handleQuantityChange = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleAddToCart = (newItem) => {
    const existingItem = cartItems.find(item => item.id === newItem.id);
    
    if (existingItem) {
      handleQuantityChange(newItem.id, 1);
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

  return (
    <div className="shopping-cart-container">
      <header className="cart-header">
        <h1>Your Shopping Cart</h1>
      </header>
      
      <div className="main-container">
        <div className="cart-layout">
          {/* Cart Items Section */}
          <div className="cart-items-section">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <div className="image-placeholder">
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                </div>
                
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  
                  <div className="quantity-control">
                    <button 
                      className="quantity-btn decrease"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      <span className="icon-minus">−</span>
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn increase"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      <span className="icon-plus">+</span>
                    </button>
                    
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="item-price">
                  ₱{item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary Section */}
          <div className="summary-section">
            <div className="summary-container">
              <h2 className="summary-title">Order Summary</h2>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₱{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Estimated Shipping</span>
                  <span>₱{shipping.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <span>₱{tax.toFixed(2)}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>₱{total.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
              
              <button className="continue-btn">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
        
        {/* Recommended Items Section */}
        <div className="recommended-section">
          <h2 className="recommended-title">You Might Also Like</h2>
          
          <div className="recommended-grid">
            {recommendedItems.map(item => (
              <div key={item.id} className="recommended-item">
                <div className="recommended-image">
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                
                <div className="recommended-details">
                  <h3>{item.name}</h3>
                  <p className="recommended-price">₱{item.price.toFixed(2)}</p>
                  
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    <span className="icon-bag">🛍️</span>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}