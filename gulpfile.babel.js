var gulp = require('gulp');
var gutil = require("gulp-util");
var clean = require("gulp-clean");
var shell = require("gulp-shell");
var webpack = require('webpack');
var jasmine = require('gulp-jasmine');
var Server = require("karma").Server;
var console = require('better-console');

var assetsPath  = './src/**/*.js';
var specsPath = './spec/**/*_spec.*';
var webpackConfig = require('./config/webpack.config.js');
var webpackFeatureSpecConfig = require('./config/webpack.feature_spec.config.js');

gulp.task('default', ['development']);

//-----------------------------------

gulp.task('test', ['karma']);
gulp.task('test:features', ['webpack:feature_specs', 'server:feature_specs'], function (cb) {

  gulp.watch([assetsPath, specsPath], ['webpack:feature_specs', 'server:feature_specs'])
});

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

gulp.task("webpack:feature_specs", function(callback) {
  webpack(
    webpackFeatureSpecConfig, function(err, info) {
      if(err) {throw new gutil.PluginError("webpack", err)}
      callback();
    }
  );
});

gulp.task('server:feature_specs', ['transfer:feature_specs'],
  shell.task(
    [
      'clear',
      'echo About to start test runner.',
      'cd ./spec/support/spec_server && rspec --format documentation'
    ],
    {ignoreErrors: true}
  )
);

var featureSpecs = './spec/features/**/*.rb';
var runnerFeatureSpecs = './spec/support/spec_server/spec/features/';

gulp.task('transfer:feature_specs', ['clean:feature_specs'], function (callback) {
  gulp.src(featureSpecs)
    .pipe(gulp.dest(runnerFeatureSpecs));
  callback()
});

gulp.task('clean:feature_specs', function (callback) {
  gulp.src(runnerFeatureSpecs +'**/*.rb', {read: false})
    .pipe(clean({force: true}));
  callback()
});