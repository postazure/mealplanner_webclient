var path = require('path');
var buildPath = path.resolve(__dirname, "./dist");
var entryPath = path.resolve(__dirname, "./src/scripts");

module.exports = {
  entry: {
    path: entryPath,
    filename: 'app.jsx'
  },
  devtool: 'source-map',
  output: {
    path: buildPath,
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  extensions: [
    '.jsx'
  ]
};



