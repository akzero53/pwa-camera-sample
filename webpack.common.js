const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PrettierPlugin = require('./plugins/prettier-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'index.js',
  },
  plugins: [
    new PrettierPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
    }),
    new CopyWebpackPlugin([{ from: __dirname + '/src/service-worker.js', to: __dirname + '/dist/service-worker.js' }]),
  ],
  module: {
    rules: [
      { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    ],
  },
  resolve: {
    modules: [__dirname + '/src', __dirname + '/node_modules'],
  },
};
