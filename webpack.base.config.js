var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  output: {
    path: path.join(__dirname, 'build'), // This is used to specify folder for producion bundle
    filename: 'bundle.js', // Filename for production bundle
    publicPath: '/'
  },
  resolve: {
    alias: {
      Utils$: path.resolve(__dirname, 'src/scripts/utilities/Utilities.js'),
      WPReact$: path.resolve(__dirname, 'src/scripts/utilities/WordPressReact.js'),
      Constants$: path.resolve(__dirname, 'src/scripts/constants/Constants.js'),
      ActionTypes$: path.resolve(__dirname, 'src/scripts/constants/ActionTypes.js')
    },
    modules: [
      'node_modules', 
      'src',
      path.resolve(__dirname, 'src/scripts'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['.jsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        loader: ['react-hot-loader']
      },
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), // Webpack will let you know if there are any errors

    // Declare global variables
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      PropTypes: 'prop-types',
      DocumentTitle: 'react-document-title',
      Utils: path.resolve(__dirname, 'src/scripts/utilities/Utilities.js'),
      WPReact: path.resolve(__dirname, 'src/scripts/utilities/WordPressReact.js'),
    }),

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        hash: false
    })
  ]
}