// pages/MarketTrendsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarketTrendsPage = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    // Fetch market trends from the backend
    axios.get('/market-trends')
      .then(response => setTrends(response.data))
      .catch(error => console.error('Error fetching market trends:', error));
  }, []);

  return (
    <div>
      <h1>Market Trends</h1>
      <ul>
        {trends.map((trend, index) => (
          <li key={index}>{trend.name}: {trend.insight}</li>
        ))}
      </ul>
    </div>
  );
};

export default MarketTrendsPage;
