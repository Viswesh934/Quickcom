// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/market-trends">Market Trends</Link></li>
        <li><Link to="/price-tracker">Price Tracker</Link></li>
        <li><Link to="/product-recommendations">Product Recommendations</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
