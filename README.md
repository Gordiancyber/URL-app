# URL-Shortener

URL-Shortener is a simple URL shortening service built using Node.js and Express. It provides a REST API to shorten URLs and redirect users to the original URLs. The project also includes a basic metrics API to track the usage of different domains.

## Features

- Shorten long URLs to concise short links.
- Redirect users from short links to the original URLs.
- Record and display metrics for the top domains with the highest usage.
- Consistent short links generated using a hashing algorithm.
- Basic error handling for missing URLs and invalid short links.

## Getting Started

1. Clone the repository:**

   git clone https://github.com/gordiancyber/URL-Shortener.git
   cd URL-Shortener

2.  Install dependencies:
   
     npm install

3. Access the API:

To shorten a URL, make a POST request to http://localhost:8080/shorten with a JSON body containing the URL parameter.
To access the original URL, use the shortened URL like http://localhost:8080/SHORTCODE.

4. Get domain metrics:

To get the top domains with the highest usage, make a GET request to http://localhost:8080/metrics/top-domains.
Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests if you find any bugs, improvements, or additional features you'd like to add.

License
This project is licensed under the MIT License - see the LICENSE file for details.
