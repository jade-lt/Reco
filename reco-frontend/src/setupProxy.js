const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );

  app.use(
    '/external-api',
    createProxyMiddleware({
      target: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      changeOrigin: true,
    })
  );

};