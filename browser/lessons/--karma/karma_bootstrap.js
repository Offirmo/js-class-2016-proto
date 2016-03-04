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
  'use strict';

  console.log('* loading lessons tests in karma...');

  // intercept karma start in order to wait for our asynchronously loaded tests to be ready
  var original_karma_start = window.__karma__.start;
  window.__karma__.start = function() {
    console.log('* original __karma__.start intercepted !', arguments);
    var savedArgs = arguments;

    // restore XXX restoring breaks things ?!?
    //window.__karma__.start = original_karma_start;

    // expose a way to call it later with the same params
    window.__delayed_karma_start = function () {
      console.log('* calling original __karma__.start with :', savedArgs);
      return original_karma_start.apply(window.__karma__, savedArgs)
    };
  };

  function load_script(src) {
    console.log('* loading script "' + src + '"...');
    var se = document.createElement('script');
    se.src = src;

    /* google analytics style
    var m = document.getElementsByTagName('script')[0];
    m.parentNode.insertBefore(se, m);
     */

    // standard style
    document.getElementsByTagName('body').item(0).appendChild(se);
  }

  var POLLING_INTERVAL_MS = 100;
  function wait_for(testFn, cb) {
    var wait_count = 0;

    function check() {
      wait_count++;
      //console.log('  Waiting...', wait_count);
      var is_ready = testFn();
      if (is_ready) {
        console.log('* Wait succeeded !');
        cb();
      }
      else if (wait_count > 10) {
        console.log('* Wait timed out, attempting to go forward anyway...');
        cb();
      }
      else
        setTimeout(check, POLLING_INTERVAL_MS);
    }
    setTimeout(check, POLLING_INTERVAL_MS);
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

  // start loading additional scripts, enforcing order with waits
  load_script('base/jspm_packages/system-polyfills.js');
  load_script('base/config.js');
  wait_for(function() {
    return !!systemJSConfig;
  }, function () {
    console.log('* systemJS config intercepted !');

    // change the config
    systemJSConfig.baseURL = 'base';

    load_script('base/jspm_packages/system.js');

    wait_for(function() {
      return !!window.System;
    }, function () {
      console.log('* systemJS loaded !');
      window.System.config(systemJSConfig);

      // expose jspm AMD loading
      window.define = System.amdDefine;
      window.require = window.requirejs = System.amdRequire;

      // start common test bootstrapping
      System.import('browser/lessons/lesson_tests_bootstrap.js')
      .then(function() {
        console.log('* test bootstrap loaded ! nearly ready...');
      });
    });
  });
})();
