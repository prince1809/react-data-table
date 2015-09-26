var path = require('path');
var webpack = require('webpack')
//var resolvers = require('../build_helpers/resolvers');
var isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.join(__dirname, 'renderPath.js'),
  output : {
    path: '__site_prerender__/',
    filename: 'renderPath.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',

  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: [
          'html?{"minimize":false}',
          path.join(__dirname,'../build_helpers/markdownLoader')
        ].join('!')
      }
    ]
  }
}
