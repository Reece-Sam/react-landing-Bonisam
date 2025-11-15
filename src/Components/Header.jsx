import React from 'react'
import '../Styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        src="src/assets/images/Screenshot 2025-10-23 at 14-28-56 Shopify The All-in-One Commerce Platform for Businesses - Shopify.png "
        alt="Logo"
      />

      <ul className="list">
        <li>Why Shopify</li>
        <li>Products</li>
        <li>Pricing</li>
        <li>Enterprise</li>{" "}
        

        <div className="btn">
          <button className="login">Log in</button>
          <button className="start">Start free trial</button>
        </div>
      </ul>
    </div>
  );
}

export default Header
