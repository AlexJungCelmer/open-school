const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  devServer: {
    proxy: {
      '^/api/school': {
        target: 'http://localhost:4002',
        pathRewrite: {'^/api/school' : '/school/'},
        ws: true,
        changeOrigin: true
      },
      '^/api/schools': {
        target: 'http://localhost:4002',
        pathRewrite: {'^/api/schools' : '/schools/'},
        ws: true,
        changeOrigin: true
      }
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
