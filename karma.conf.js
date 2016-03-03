'use strict';

// Karma configuration
// Generated on Thu Mar 03 2016 12:17:12 GMT+0100 (CET)
// http://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      {
        pattern: 'jspm_packages/system.js',
        watched: false,
        included: true,
        served: true,
        nocache: true
      },
      {
        pattern: 'config.js',
        watched: true,
        included: true,
        served: true,
        nocache: true
      },
      {
        pattern: 'browser/lessons/karma_bootstrap.js',
        watched: true,
        included: true,
        served: true,
        nocache: true
      },
      {
        pattern: 'browser/**/*',
        watched: true,
        included: false,
        served: true,
        nocache: true
      },
      {
        pattern: 'jspm_packages/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: true
      }
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],
    //reporters: ['nyan'],
    reporters: ['spec'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [/*'Chrome'*/],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    /*proxies: {
      '/assertion-error.js': 'jspm_packages/npm/assertion-error@1.0.1/index.js',
    },*/

    plugins: [
      // Core
      'karma-mocha',
      // Launchers
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      // Reporters
      'karma-nyan-reporter',
      'karma-spec-reporter'
    ],

    // https://groups.google.com/forum/#!topic/karma-users/B-E7nLphNHQ
    browserNoActivityTimeout: 20000,
    browserDisconnectTimeout: 5000
  });
};
