var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  entry: [
    './src/scripts' // This is where Webpack will be looking for the entry index.js file
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: true
    }),
  ]
})