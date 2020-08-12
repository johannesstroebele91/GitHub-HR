const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();

// Using proxy for rewriting the path for GitHub API
// e.g. localhost:8080/githubapi/users/octocat -> https://api.github.com/users/octocat
const proxyOptions = {
  target: 'https://api.github.com',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/githubapi': '',
  }
};

// Add middleware for http proxying
const apiProxy = createProxyMiddleware(proxyOptions);
app.use('/githubapi/*', apiProxy);

// Serving static files
app.use(express.static('./dist/githubuser-dashboard'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/githubuser-dashboard/index.html'));
});

// Using process.env.PORT, so Heroku can set the port
app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);

