var path = require('path');
var buildPath = path.resolve(__dirname, "../spec/support/spec_server/app/assets/javascripts");
var entryPath = path.resolve(__dirname, "../spec/support");

module.exports = {
  entry: entryPath + '/specs_feature_loader.js',
  devtool: 'inline-source-map',
  output: {
    path: buildPath,
    filename: "app.js"
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



