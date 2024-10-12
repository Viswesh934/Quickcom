// pages/PriceTrackerPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PriceTrackerPage = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Fetch price tracking data from the backend
    axios.get('/price-tracker')
      .then(response => setPrices(response.data))
      .catch(error => console.error('Error fetching price data:', error));
  }, []);

  return (
    <div>
      <h1>Price Tracker</h1>
      <ul>
        {prices.map((product, index) => (
          <li key={index}>{product.name}: ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceTrackerPage;
