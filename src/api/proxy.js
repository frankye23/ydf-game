const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = 'http://43.163.235.218:3208'

  if (req.url.startsWith('/backend')) {
    target = 'http://43.163.235.218:3208'
  }
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/backend/': '/',
    },
  })(req, res)
}