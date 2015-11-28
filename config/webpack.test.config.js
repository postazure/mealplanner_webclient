var path = require('path');
var buildPath = path.resolve(__dirname, "../src/dist");

module.exports = {
  devtool: 'inline-source-map',
  output: {
    path: buildPath,
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  extensions: [
    '.js'
  ]
};



