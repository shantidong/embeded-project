
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    filename: 'view/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: 'less-loader',
      },
    ],
  },
}
