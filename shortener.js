// shortener.js
const crypto = require('crypto');

class URLShortener {
  constructor() {
    this.urls = new Map();
    this.domainMetrics = new Map();
  }

  generateShortURL(url) {
    const hash = crypto.createHash('sha1').update(url).digest('hex').substr(0, 6);
    return hash;
  }

  
