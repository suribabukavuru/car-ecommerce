// Load environment variables from .env file
require('dotenv').config();  

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');

// Initialize Express app
const app = express();

// Configuration
const API_KEY = process.env.API_KEY; // Use environment variable for API key
const PORT = process.env.PORT || 5000; // Set port from environment or default to 5000

// Middleware
app.use(helmet()); // Add security headers
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000' // Restrict CORS
}));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(morgan('dev')); // Request logging

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests, please try again later'
});

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// API Routes
app.get('/api/cars', apiLimiter, async (req, res) => {
  const { make, model, year, limit = 10 } = req.query;

  // Validate query parameters
  if (!make && !model && !year) {
    return res.status(400).json({
      error: 'Invalid request',
      message: 'At least one filter (make, model, or year) is required'
    });
  }

  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/cars', {
      headers: { 'X-Api-Key': API_KEY }, // Use environment variable for API key
      params: { 
        make: make?.trim(),
        model: model?.trim(),
        year: year?.trim(),
        limit: parseInt(limit) // Ensure limit is an integer
      },
      timeout: 5000 // 5 second timeout
    });

    res.json({
      success: true,
      count: response.data.length,
      data: response.data
    });

  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({
      error: 'Failed to fetch car data',
      message: error.message
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received. Closing server...');
  server.close(() => {
    console.log('Server closed');
  });
});

module.exports = app; // For testing
