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
    frameworks: ['es5-shim', 'jspm', 'mocha'],


    // list of files / patterns to load in the browser
    files: [
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
    reporters: ['progress'],


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
    browsers: ['Chrome'],


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
      'karma-es5-shim',
      'karma-jspm',
      'karma-mocha',
      // Launchers
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      // Reporters
      'karma-nyan-reporter',
      'karma-spec-reporter'
    ],

    jspm: {
      loadFiles: [
        'browser/lessons/index.js'
      ],
      serveFiles: [
        //'**/*'
        'browser',
        'jspm_packages'
      ],
      paths: {
        'bower:*': 'base/jspm_packages/bower/*',
        'github:*': 'base/jspm_packages/github/*',
        'npm:*': 'base/jspm_packages/npm/*',
        '*': 'base/*'
      }
    },

    // https://groups.google.com/forum/#!topic/karma-users/B-E7nLphNHQ
    browserNoActivityTimeout: 20000,
    browserDisconnectTimeout: 5000
  });
};
