const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://162.14.74.62:8787/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    }
  }))
}