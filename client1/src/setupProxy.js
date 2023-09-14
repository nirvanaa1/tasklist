const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://test4-vpg0.onrender.com',
      changeOrigin: true,
    })
  );
};
