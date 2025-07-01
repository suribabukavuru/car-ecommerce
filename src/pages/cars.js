import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cars.css';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    year: ''
  });

  // Initial load and when filters change
  useEffect(() => {
    fetchCars();
  }, []); // Remove filters from dependency array to prevent auto-search

  const fetchCars = async () => {
    setLoading(true);
    try {
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value.trim() !== '')
      );
      
      const response = await axios.get('/api/cars', {
        params: cleanFilters
      });
      setCars(response.data || []);
    } catch (error) {
      console.error('Failed to fetch cars:', error);
      alert('Failed to load cars. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    fetchCars();
  };

  return (
    <div className="cars-container">
      <h1>Our Luxury Collection</h1>
      
      {/* Filter Form - Added form tag */}
      <form onSubmit={handleSubmit} className="filters">
        <input
          type="text"
          name="make"
          placeholder="Make (e.g., BMW)"
          value={filters.make}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model (e.g., X5)"
          value={filters.model}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year (e.g., 2023)"
          value={filters.year}
          onChange={handleFilterChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Apply Filters'}
        </button>
      </form>

      {/* Results */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : cars.length === 0 ? (
        <p className="no-results">No cars found matching your filters</p>
      ) : (
        <div className="cars-grid">
          {cars.map((car, index) => (
            <div key={`${car.make}-${car.model}-${index}`} className="car-card">
              <div className="car-image">
                <img 
                  src={car.image || "https://placehold.co/300x200"} 
                  alt={`${car.make} ${car.model}`} 
                />
              </div>
              <div className="car-details">
                <h2>{car.make} {car.model}</h2>
                <p className="year">Year: {car.year}</p>
                <div className="specs">
                  <p><strong>Class:</strong> {car.class}</p>
                  <p><strong>MPG:</strong> {city_mpg || 'N/A'} city / {highway_mpg || 'N/A'} hwy</p>
                  <p><strong>Transmission:</strong> {car.transmission}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cars;
