import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  // Updated product data to match ProductDetails requirements
  const initialProducts = [
    { 
      id: 1, 
      name: 'Master Sword', 
      type: 'sword', 
      material: 'steel', 
      price: 8500, 
      rating: 4.5,
      craftedBy: 'Kristine, Master Blacksmith',
      description: 'A legendary sword with exceptional craftsmanship.',
      stock: 9
    },
    { 
      id: 2, 
      name: 'Royal Shield', 
      type: 'shield', 
      material: 'iron', 
      price: 7800, 
      rating: 4.0,
      craftedBy: 'Marcus, Elite Armorer',
      description: 'A sturdy shield designed for royal guards.',
      stock: 5
    },
    { 
      id: 3, 
      name: 'Knight Armor', 
      type: 'armor', 
      material: 'steel', 
      price: 12000, 
      rating: 4.8,
      craftedBy: 'Elaine, Armor Specialist',
      description: 'Full plate armor for maximum protection.',
      stock: 3
    },
    { 
      id: 4, 
      name: 'Hidden Dagger', 
      type: 'dagger', 
      material: 'bronze', 
      price: 5500, 
      rating: 3.5,
      craftedBy: 'Silas, Weaponsmith',
      description: 'Concealable dagger for stealth operations.',
      stock: 12
    },
    { 
      id: 5, 
      name: 'War Helmet', 
      type: 'helmet', 
      material: 'titanium', 
      price: 9200, 
      rating: 4.2,
      craftedBy: 'Garrick, Armorer',
      description: 'Lightweight yet durable battle helmet.',
      stock: 7
    },
    { 
      id: 6, 
      name: 'Dragon Slayer', 
      type: 'sword', 
      material: 'titanium', 
      price: 15000, 
      rating: 5.0,
      craftedBy: 'Kristine, Master Blacksmith',
      description: 'The ultimate weapon against draconic foes.',
      stock: 2
    },
    { 
      id: 7, 
      name: 'Bronze Buckler', 
      type: 'shield', 
      material: 'bronze', 
      price: 6500, 
      rating: 3.8,
      craftedBy: 'Marcus, Elite Armorer',
      description: 'Small but sturdy round shield.',
      stock: 8
    },
    { 
      id: 8, 
      name: 'Assassin Blade', 
      type: 'dagger', 
      material: 'steel', 
      price: 7000, 
      rating: 4.6,
      craftedBy: 'Silas, Weaponsmith',
      description: 'Razor-sharp blade for precision strikes.',
      stock: 6
    },
    { 
      id: 9, 
      name: 'Iron Helmet', 
      type: 'helmet', 
      material: 'iron', 
      price: 6800, 
      rating: 3.9,
      craftedBy: 'Garrick, Armorer',
      description: 'Classic iron helmet with nose guard.',
      stock: 10
    },
    { 
      id: 10, 
      name: 'Ceremonial Sword', 
      type: 'sword', 
      material: 'bronze', 
      price: 9800, 
      rating: 4.3,
      craftedBy: 'Kristine, Master Blacksmith',
      description: 'Ornate sword for formal occasions.',
      stock: 4
    },
    { 
      id: 11, 
      name: 'Full Plate', 
      type: 'armor', 
      material: 'iron', 
      price: 13500, 
      rating: 4.7,
      craftedBy: 'Elaine, Armor Specialist',
      description: 'Complete set of plate armor.',
      stock: 3
    },
    { 
      id: 12, 
      name: 'Elite Guard Shield', 
      type: 'shield', 
      material: 'titanium', 
      price: 11000, 
      rating: 4.9,
      craftedBy: 'Marcus, Elite Armorer',
      description: 'Premium shield for elite guards.',
      stock: 7
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    types: {
      sword: false,
      shield: false,
      armor: false,
      dagger: false,
      helmet: false
    },
    materials: {
      steel: false,
      iron: false,
      bronze: false,
      titanium: false
    }
  });

  // Apply filters when they change
  useEffect(() => {
    filterProducts();
  }, [filters]);

  const filterProducts = () => {
    const activeTypeFilters = Object.entries(filters.types).filter(([_, value]) => value).map(([key, _]) => key);
    const activeMaterialFilters = Object.entries(filters.materials).filter(([_, value]) => value).map(([key, _]) => key);
    
    if (activeTypeFilters.length === 0 && activeMaterialFilters.length === 0) {
      setProducts(initialProducts);
      return;
    }
    
    const filteredProducts = initialProducts.filter(product => {
      const typeMatch = activeTypeFilters.length === 0 || activeTypeFilters.includes(product.type);
      const materialMatch = activeMaterialFilters.length === 0 || activeMaterialFilters.includes(product.material);
      return typeMatch && materialMatch;
    });
    
    setProducts(filteredProducts);
  };

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [value]: !prevFilters[category][value]
      }
    }));
  };

  const renderStarRating = (rating) => {
    const roundedRating = Math.round(rating);
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= roundedRating ? "star filled" : "star"}>★</span>
      );
    }
    
    return stars;
  };

  return (
    <div className="products-page">
      <div className="header">
        <div className="logo">
          <img src="/logo.png" alt="Metalworks Logo" />
          <span>Metalworks | Products</span>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-button">🔍</button>
          </div>
          <button className="favorites-button">Favorites</button>
          <div className="user-profile">
            <img src="/user-profile.png" alt="User Profile" />
          </div>
          <div className="settings">
            <img src="/settings.png" alt="Settings" />
          </div>
        </div>
      </div>

      <div className="products-container">
        <h1>Our Products</h1>
        
        <div className="products-content">
          <div className="filters-sidebar">
            <h3>Filters</h3>
            <div className="filter-section">
              <h4>ITEM TYPE</h4>
              <div className="filter-options">
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.types.sword}
                    onChange={() => handleFilterChange('types', 'sword')}
                  />
                  Swords
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.types.shield}
                    onChange={() => handleFilterChange('types', 'shield')}
                  />
                  Shields
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.types.armor}
                    onChange={() => handleFilterChange('types', 'armor')}
                  />
                  Armors
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.types.dagger}
                    onChange={() => handleFilterChange('types', 'dagger')}
                  />
                  Daggers
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.types.helmet}
                    onChange={() => handleFilterChange('types', 'helmet')}
                  />
                  Helmets
                </label>
              </div>
            </div>

            <div className="filter-section">
              <h4>MATERIAL</h4>
              <div className="filter-options">
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.materials.steel}
                    onChange={() => handleFilterChange('materials', 'steel')}
                  />
                  Steel
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.materials.iron}
                    onChange={() => handleFilterChange('materials', 'iron')}
                  />
                  Iron
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.materials.bronze}
                    onChange={() => handleFilterChange('materials', 'bronze')}
                  />
                  Bronze
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.materials.titanium}
                    onChange={() => handleFilterChange('materials', 'titanium')}
                  />
                  Titanium
                </label>
              </div>
            </div>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  {/* Placeholder for product image */}
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p className="product-type">{product.type}</p>
                  <div className="product-rating">
                    {renderStarRating(product.rating)}
                    <span>({Math.round(product.rating * 10)} reviews)</span>
                  </div>
                  <p className="product-price">₱ {product.price.toLocaleString()}</p>
                </div>
                <Link to={`/productdetails/${product.id}`} className="view-details-button">
                  VIEW DETAILS
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;