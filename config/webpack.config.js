var path = require('path');
var buildPath = path.resolve(__dirname, "../public/dist");
var entryPath = path.resolve(__dirname, "../src");

module.exports = {
  entry: entryPath + '/main.js',
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



