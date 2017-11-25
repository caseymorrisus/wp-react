var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    './src/scripts' // This is where Webpack will be looking for the entry index.js file
  ]
})