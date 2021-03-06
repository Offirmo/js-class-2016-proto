'use strict';

/** Bootstrap mocha/chai unit tests
 *
 * Note : mocha is expected to be already loaded
 *        important since karma runner, with its karma-mocha plugin,
 *        injects mocha from elsewhere, and loading 2x mocha breaks stuff !
 */

import chai from 'chai';
//import chaiAsPromised from 'chai-as-promised';
//import chaiDatetime from 'chai-datetime';
//import chaiJquery from 'chai-jquery';
//import chaiThings from 'chai-things';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

window.mocha.checkLeaks();
window.mocha.setup('bdd');

//chai.use(chaiAsPromised);
//chai.use(chaiDatetime);
//chai.use(chaiJquery);
//chai.use(chaiThings);
chai.use(sinonChai);

// expose for convenience
window.sinon = sinon;
window.expect = chai.expect;

const specs = [
  'functions-1/lexical-analyzer.spec',
  'chrome-dev-tools/spec.js',

  'es5/spec.js',
  /*
   './types/index.js',
   './functions-2/index.js',
   './async-callback/index.js',
   './dates/index.js',
   './functional-programming/index.js',
   './promises/index.js',
   './this/index.js',
   './timeouts/index.js',
   */
];
export default specs;


if (window.__karma__) {
  // REM : we load from /
  Promise.all(specs.map(path => System.import('browser/lessons/' + path)))
  .then(() => {
    console.log('* All tests loaded, lets go !');
    window.__delayed_karma_start();
  });
}
else {
  Promise.all(specs.map(path => System.import('./' + path)))
  .then(() => mocha.run())
}
