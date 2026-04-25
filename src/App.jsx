import React, { useState } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import AboutUs from './Components/AboutUs';
import heroImage from './assets/images/hero.png';
import leafLeft from './assets/images/leaf-left.png';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="animated-leaves">
          <img src={leafLeft} className="leaf leaf-left" alt="" />
          <img src={leafLeft} className="leaf leaf-right" alt="" />
        </div>
        <div className="content">
          <div className="landing_content">
            <div className="top_badge">
              <span>🌱 Sri Lanka's Favourite Plant Shop</span>
            </div>
            <h1>
              Welcome to <br />
              <span className="nursery_name">Paradise Nursery</span>
            </h1>
            <div className="divider"></div>
            <p className="main_description">
              Lush, hand-selected tropical houseplants delivered straight to <br />
              your doorstep — turning any space into your own little paradise.
            </p>
            <p className="secondary_description">
              Founded in 2019 in Colombo, Paradise Nursery was born from a <br />
              simple belief: every home deserves a touch of green. From rare <br />
              tropicals to everyday succulents, our plants are sustainably grown <br />
              and lovingly curated by our expert team.
            </p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className={`product-list-view ${showProductList ? 'visible' : ''}`}>
        <ProductList handleBackToHome={() => setShowProductList(false)} />
      </div>
    </div>
  );
}

export default App;
