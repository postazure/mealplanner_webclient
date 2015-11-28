module.exports = function (config) {
  config.set({
    files: ['../spec/**/*.js'],
    browsers: ['Chrome'],
    preprocessors: {
      '../src/scripts/**/*.js': ['webpack', 'sourcemap'],
      '../spec/**/*.js': ['webpack', 'sourcemap']
    },
    frameworks: ['jasmine'],
    plugins: ['karma-*'],
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },
    reporters: ['spec'],
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: true,
      suppressSkipped: false
    },
    webpackMiddleware: {
      noInfo: true
    },
    webpack: require('./webpack.test.config.js'),
    singleRun: false
  });
};