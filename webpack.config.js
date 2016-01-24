// var webpack = require('webpack');
// var path = require('path');
// module.exports = {
//   devtool: 'eval',
//   entry: [
//     './app/components/App.jsx',
//   ],
//   module: {
//     loaders: [
//         {
//           test: /\.jsx?$/,
//           exclude: /(node_modules|bower_components)/,
//           loader: 'babel-loader'
//           inlude: path.join(__dirname, 'app/component/App.jsx')
//         }
//     ]
//   },
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//   }
// };
//
var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:5000',
    'webpack/hot/only-dev-server',
    './public/components/App.jsx',
  ],
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'react-hot!babel',
          inlude: path.join(__dirname, 'public/components/App.jsx')
        }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
