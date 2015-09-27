var path = require('path');
var webpack = require('webpack');
var resolvers = require('../build_helpers/resolvers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  devTool: 'source-map',

  entry: path.join(__dirname, 'client.js'),

  output: {
    path: '__site__/',
    filename: isDev ? '[name].js': '[name]-[hash].js',
    publicPath: ''
  },

  target: 'web'
}
