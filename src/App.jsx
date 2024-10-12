import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // import the store
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MarketTrendsPage from './pages/MarketTrendsPage';
import PriceTrackerPage from './pages/PriceTrackerPage';
import ProductRecommendationsPage from './pages/ProductRecommendationsPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Provider store={store}>  {/* Wrap the app with Provider */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/market-trends" element={<ProtectedRoute><MarketTrendsPage /></ProtectedRoute>} />
          <Route path="/price-tracker" element={<ProtectedRoute><PriceTrackerPage /></ProtectedRoute>} />
          <Route path="/product-recommendations" element={<ProtectedRoute><ProductRecommendationsPage /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
