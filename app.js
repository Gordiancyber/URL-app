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
  
  // Define a route to handle redirection from short URLs
  app.get('/:shortURL', (req, res) => {
    const originalURL = shortener.getOriginalURL(req.params.shortURL); // Get the original URL from the short code
    if (originalURL) {
      res.redirect(originalURL); // Redirect the user to the original URL
    } else {
      res.status(404).json({ error: 'URL not found.' }); // Return an error if the short URL is not found
    }
  });
  
  // Define a route to get top domains metrics
  app.get('/metrics/top-domains', (req, res) => {
    const topDomains = shortener.getTopDomains(); // Get the top domains with the highest usage
    res.json({ topDomains }); // Respond with the top domains metrics
  });
  
  // Start the Express app and listen on port 8080
  app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });