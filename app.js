// app.js
// Import the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const URLShortener = require('./shortener'); // Import the URLShortener class from shortener.js

// Create an Express app
const app = express();
app.use(bodyParser.json());

// Create a new instance of the URLShortener class
const shortener = new URLShortener();

// Define a route to handle URL shortening
app.post('/shorten', (req, res) => {
    const url = req.body.url; // Get the URL from the request body
    if (!url) {
      return res.status(400).json({ error: 'URL is required.' });
    }
  
    // Shorten the URL using the URLShortener instance
    const shortURL = shortener.shortenURL(url);
    res.json({ shortURL }); // Respond with the shortened URL
  });
  
  