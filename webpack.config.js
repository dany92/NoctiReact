// let APP_DIR = path.resolve(__dirname, 'src/client/app');
// let BUILD_DIR = path.resolve(__dirname, 'src/client/public');

let webpack = require('webpack');
let path = require('path');

module.exports = {
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
