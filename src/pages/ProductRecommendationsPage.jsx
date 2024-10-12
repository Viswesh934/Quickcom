// pages/ProductRecommendationsPage.js
import React, { useState } from 'react';
import axios from 'axios';

const ProductRecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [preferences, setPreferences] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/product-recommendations', { preferences })
      .then(response => setRecommendations(response.data))
      .catch(error => console.error('Error fetching recommendations:', error));
  };

  return (
    <div>
      <h1>Product Recommendations</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your preferences:
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          />
        </label>
        <button type="submit">Get Recommendations</button>
      </form>
      <ul>
        {recommendations.map((product, index) => (
          <li key={index}>{product.name} - {product.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRecommendationsPage;
