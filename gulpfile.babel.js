var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
var jasmine = require('gulp-jasmine');
var Server = require("karma").Server;
var console = require('better-console');

var assetsPath  = './src/**/*.js';
var specsPath = './spec/**/*_spec.js';
var webpackConfig = require('./config/webpack.config.js');

gulp.task('default', ['development']);

//-----------------------------------

gulp.task('test', ['karma']);

gulp.task('development',['webpack'], function () {
  gulp.watch([assetsPath], ['webpack'])
});

gulp.task('production', function () {
  console.error( 'gulp production is not yet implemented.' );
});

//-----------------------------------

gulp.task('karma', function () {
  console.clear();
  new Server({
    configFile: __dirname + '/config/karma.conf.js'
  }).start();
});

gulp.task("webpack", function(callback) {
  webpack(
    webpackConfig, function(err, info) {
      if(err) {throw new gutil.PluginError("webpack", err)}
      callback();
    }
  );
});