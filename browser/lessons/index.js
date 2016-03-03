'use strict';

import mocha from 'mocha';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiDatetime from 'chai-datetime';
//import chaiJquery from 'chai-jquery';
import chaiThings from 'chai-things';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

mocha.checkLeaks();
mocha.setup('bdd');

chai.use(chaiAsPromised);
chai.use(chaiDatetime);
//chai.use(chaiJquery);
chai.use(chaiThings);

chai.use(sinonChai);


import './functions-1/spec.js';

mocha.run();

/*
 './functions-1/index.js',
 './chrome-dev-tools/index.js',
 './types/index.js',
 './functions-2/index.js',

 './async-callback/index.js',
 './dates/index.js',
 './functional-programming/index.js',
 './promises/index.js',
 './this/index.js',
 './timeouts/index.js',
 */
