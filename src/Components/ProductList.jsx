import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';
import './ProductList.css';
import { ShoppingCart, Leaf } from 'lucide-react';
import CartItem from './CartItem';
import { PLANTS } from '../plants';

function ProductList({ handleBackToHome }) {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div className="product-list-container">
            <nav className="navbar">
                <div className="navbar-logo" onClick={handleBackToHome} style={{ cursor: 'pointer' }}>
                    <Leaf color="white" size={32} />
                    <span>Paradise Nursery</span>
                </div>
                <div className="navbar-center">
                    <a href="#" onClick={handleContinueShopping} className="nav-link-main">Plants</a>
                </div>
                <div className="navbar-links">
                    <a href="#" onClick={handleCartClick} className="cart-link">
                        <ShoppingCart size={24} />
                        <span className="cart-badge">{totalItems}</span>
                    </a>
                </div>
            </nav>

            {!showCart ? (
                <div className="product-grid">
                    <header className="product-header">
                        <h1>Our Tropical Collection</h1>
                        <p>Discover the perfect green companion for your home</p>
                    </header>
                    {PLANTS.map((category, index) => (
                        <div key={index} className="category-section">
                            <h2 className="category-title">{category.category}</h2>
                            <div className="plants-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div key={plantIndex} className="plant-card">
                                        <div className="plant-image-container">
                                            <img 
                                                src={plant.image} 
                                                alt={plant.name} 
                                                className={`plant-image ${plant.name === 'Peace Lily' || plant.name === 'Fiddle Leaf Fig' || plant.name === 'Aloe Vera' ? 'scale-small' : ''}`} 
                                            />
                                        </div>
                                        <div className="plant-details">
                                            <h3 className="plant-name">{plant.name}</h3>
                                            <p className="plant-description">{plant.description}</p>
                                            <p className="plant-cost">{plant.cost}</p>
                                            <button 
                                                className="add-to-cart-btn"
                                                onClick={() => handleAddToCart(plant)}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
