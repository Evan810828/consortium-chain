const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://162.14.98.222:8787',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    }
  }))
}