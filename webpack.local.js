const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('local'),
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 7070,
  },
});
