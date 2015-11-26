var path = require('path');
var buildPath = path.resolve(__dirname, "./src/dist");
var entryPath = path.resolve(__dirname, "./src/scripts");

module.exports = {
  entry: {
    path: entryPath,
    filename: 'app.js'
  },
  devtool: 'source-map',
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



