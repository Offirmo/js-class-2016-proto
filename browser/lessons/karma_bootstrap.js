'use strict';

/** Bootstrap lessons unit tests for karma
 *
 * NOTE : by karma conf, this file is executed as if being on repo root !
 *
 * NOTE : by karma-mocha plugin, mocha is already loaded, and from node_modules !
 *        Do NOT load another mocha !
 */

// expose jspm AMD loading
window.define = System.amdDefine;
window.require = window.requirejs = System.amdRequire;

// intercept karma start in order to wait for our asynchronously loaded tests to be ready
var original_karma_start = window.__karma__.start.bind(window.__karma__);
window.__karma__.start = function() {
  console.log('original __karma__.start intercepted !');
};

// start common test bootstrapping
System.import('browser/lessons/lesson_tests_bootstrap.js')
.then(function(mod) {
  const specs = mod.default;
  // load tests. REM : we're from root !
  Promise.all(specs.map(path => System.import('browser/lessons/' + path)))
  .then(() => {
    console.log('lets go !');
    original_karma_start();
  });
});
