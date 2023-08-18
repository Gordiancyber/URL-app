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

  shortenURL(url) {
    if (this.urls.has(url)) {
      return this.urls.get(url);
    }

    const shortURL = this.generateShortURL(url);
    this.urls.set(url, shortURL);
    this.recordDomainMetrics(url); // Record domain metrics
    return shortURL;
  }

  getOriginalURL(shortURL) {
    for (const [url, sURL] of this.urls) {
      if (sURL === shortURL) {
        return url;
      }
    }
    return null;
  }

  recordDomainMetrics(url) {
    const parsedURL = new URL(url);
    const domain = parsedURL.hostname;

    if (this.domainMetrics.has(domain)) {
      this.domainMetrics.set(domain, this.domainMetrics.get(domain) + 1);
    } else {
      this.domainMetrics.set(domain, 1);
    }
  }

  getTopDomains(limit = 3) {
    const sortedDomains = [...this.domainMetrics.entries()].sort((a, b) => b[1] - a[1]);
    return sortedDomains.slice(0, limit).map(([domain, count]) => `${domain}: ${count}`);
  }
}

module.exports = URLShortener;

