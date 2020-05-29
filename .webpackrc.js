export default {
  publicPath:'/',
  
  extraBabelPlugins: [
    ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }]
  ],

  alias: {
    '@': `${__dirname}/src`,
  },

  disableCSSModules: true,

  proxy: {
    '/aps': {
      target: 'https://api.baxiaobu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/aps': '',
    }
  },
  '/api': {
      target: 'https://blogs.zdldove.top',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      }
    },
  }
}
