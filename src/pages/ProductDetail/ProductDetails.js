import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { productsData } from '../../data/productsData';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [rushOrder, setRushOrder] = useState(false);
  const [activeTab, setActiveTab] = useState('Description');
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProduct = productsData.find(p => p.id === parseInt(id));
      setProduct(foundProduct);

      if (foundProduct) {
        let related = productsData.filter(p => 
          p.material === foundProduct.material && 
          p.id !== foundProduct.id
        );

        const uniqueTypes = [];
        const typedRelated = [];
        
        related.forEach(product => {
          if (!uniqueTypes.includes(product.type)) {
            uniqueTypes.push(product.type);
            typedRelated.push(product);
          }
        });

        if (typedRelated.length >= 4) {
          related = typedRelated.slice(0, 4);
        } else {
          related = related.slice(0, 4);
        }

        setRelatedProducts(related);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleRushOrder = () => {
    setRushOrder(!rushOrder);
  };

  const addToCart = () => {
    console.log('Added to cart:', {
      productId: product.id,
      quantity,
      rushOrder,
      price: product.price * quantity + (rushOrder ? product.price * quantity * 0.2 : 0)
    });
    alert(`${quantity} ${product.name}(s) added to cart${rushOrder ? ' (Rush Order)' : ''}!`);
  };

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<span key={i} className="star half-filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">★</span>);
      }
    }

    return stars;
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout with this item!');
  };

  if (!product) {
    return <div className="loading">Loading product details...</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="thumbnail-gallery">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((related) => (
                <div key={related.id} className="thumbnail">
                  <img src={related.image} alt={related.name} />
                </div>
              ))
            ) : (
              <div className="no-thumbnails-message">
                <p>No related products available</p>
              </div>
            )}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <div className="product-price">
            ₱ {product.price.toLocaleString()}
            {rushOrder && (
              <span style={{ fontSize: '16px', marginLeft: '10px' }}>
                (Total: ₱ {(product.price * quantity * 1.2).toLocaleString()})
              </span>
            )}
          </div>

          <div className="product-rating">
            {renderStarRating(product.rating)}
            <span className="review-count">({Math.round(product.rating * 10)} reviews)</span>
          </div>

          <p className="product-number">Item #{product.id}</p>
          <p className="crafted-by">Crafted by: {product.craftedBy}</p>

          <div className="stock-info">
            <span className="in-stock">● In Stock</span>
            <span className="stock-quantity">({product.stock} available)</span>
          </div>

          <div className="product-material">
            <h3>Material:</h3>
            <div className="material-selector">
              <select defaultValue={product.material}>
                <option value="steel">Steel</option>
                <option value="iron">Iron</option>
                <option value="bronze">Bronze</option>
                <option value="titanium">Titanium</option>
              </select>
            </div>
          </div>

          <div className="product-quantity">
            <h3>Quantity:</h3>
            <div className="quantity-selector">
              <button className="quantity-button" onClick={decrementQuantity}>-</button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value) && value > 0 && value <= product.stock) {
                    setQuantity(value);
                  }
                }}
                min="1"
                max={product.stock}
              />
              <button className="quantity-button" onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <div className="rush-order">
            <input 
              type="checkbox" 
              id="rush-order-checkbox" 
              checked={rushOrder} 
              onChange={toggleRushOrder} 
            />
            <label htmlFor="rush-order-checkbox">Rush Order (+20% fee)</label>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-button" onClick={addToCart}>ADD TO CART</button>
            <button className="checkout-button" onClick={handleCheckout}>CHECKOUT</button>
          </div>
        </div>
      </div>

      <div className="product-tabs">
        <div className="tab-header">
          <div 
            className={`tab ${activeTab === 'Description' ? 'active' : ''}`} 
            onClick={() => setActiveTab('Description')}
          >
            Description
          </div>
          <div 
            className={`tab ${activeTab === 'Specification' ? 'active' : ''}`} 
            onClick={() => setActiveTab('Specification')}
          >
            Specification
          </div>
          <div 
            className={`tab ${activeTab === 'Reviews' ? 'active' : ''}`} 
            onClick={() => setActiveTab('Reviews')}
          >
            Reviews
          </div>
        </div>

        <div className="tab-content">
          {activeTab === 'Description' && <p>{product.description}</p>}
          {activeTab === 'Specification' && (
            <div>
              <p><strong>Type:</strong> {product.type}</p>
              <p><strong>Material:</strong> {product.material}</p>
              <p><strong>Weight:</strong> {product.type === 'sword' ? '2.5 kg' : 
                                         product.type === 'shield' ? '5.8 kg' :
                                         product.type === 'armor' ? '15.2 kg' :
                                         product.type === 'dagger' ? '1.2 kg' : '3.5 kg'}</p>
            </div>
          )}
          {activeTab === 'Reviews' && (
            <div>
              <p>No reviews yet. Be the first to review this product!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
