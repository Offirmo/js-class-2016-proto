'use strict';

/** lessons unit tests bootstrap for karma
 *
 * NOTE : karma serves everything from a base/ path
 *
 * NOTE : by karma-mocha plugin, mocha is already loaded, and from node_modules !
 *        Do NOT load another mocha !
 *
 * NOTE : since we use an async loader, we must make karma wait before starting tests execution
 *
 * NOTE : phantomJS has a SERIOUS bug in which it doesn't load <script> in correct order !
 *
 * Wrapping all that :
 */


(function() {
  var allReady = false;

  // intercept karma start in order to wait for our asynchronously loaded tests to be ready
  var original_karma_start = window.__karma__.start;
  window.__karma__.start = function() {
    console.log('original __karma__.start intercepted !', arguments);
    var savedArgs = arguments;

    // restore
    //window.__karma__.start = original_karma_start;

    // expose correct
    window.__delayed_karma_start = function () {
      console.log('calling original __karma__.start with :', savedArgs);
      return original_karma_start.apply(window.__karma__, savedArgs)
    };
  };

  function load_script(src) {
    var se = document.createElement('script');
    se.src = src;
    document.getElementsByTagName('body').item(0).appendChild(se);
  }

  var POLLING_INTERVAL_MS = 25;
  function wait_for(testFn) {
    var cb;

    function check() {
      var is_ready = testFn();
      if (! is_ready)
        setTimeout(check, POLLING_INTERVAL_MS);
      else
        cb();
    }
    setTimeout(check, POLLING_INTERVAL_MS);

    return { // very simple pseudo-promise
      then(fn) { cb = fn; }
    }
  }

  // trick systemJS in order to be able to dynamically change the config
  var systemJSConfig;
  window.System = {
    config: function(config) {
      systemJSConfig = config;
      // We intercepted the config, remove our hack
      delete window.System;
    }
  };

  load_script('base/config.js');
  wait_for(function() {
    return !!systemJSConfig;
  })
  .then(function () {
    console.log('intercepted config !');

    // change the config
    systemJSConfig.baseURL = 'base';

    load_script('base/jspm_packages/system.js');

    wait_for(function() {
      return !!window.System;
    })
    .then(function () {
      console.log('systemJS loaded !');
      window.System.config(systemJSConfig);

      // expose jspm AMD loading
      window.define = System.amdDefine;
      window.require = window.requirejs = System.amdRequire;

      // start common test bootstrapping
      System.import('browser/lessons/lesson_tests_bootstrap.js')
      .then(function() {
        allReady = true;
        console.log('all ready !');
      });
    })
  })

})();
