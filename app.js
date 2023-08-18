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

