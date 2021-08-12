const proxyObj = {}
proxyObj['/'] = {
  target: 'https://autumnfish.cn/',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
}



module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
  }
}
