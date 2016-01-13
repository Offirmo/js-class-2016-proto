import mocha from 'mocha';

mocha.checkLeaks();
//mocha.globals(['jQuery']);

import './some-test.js';

mocha.run();



