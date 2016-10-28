let webpack = require('webpack');
let path = require('path');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, "src"),
  entry: "./client/app/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', "react"]
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/client/public",
    filename: "build.js"
  }
};
