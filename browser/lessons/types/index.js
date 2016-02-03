import mocha from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
mocha.setup('bdd');

import _ from 'lodash';

// http://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript
// http://heyjavascript.com/javascript-string-to-boolean/
// https://gist.github.com/CMCDragonkai/7389368
// http://www.bennadel.com/blog/1784-using-double-not-operator-for-boolean-type-casting.htm
// return _.isBoolean(value) ? value : (value === 'true');

describe('A good javascript developer', function () {

  context('mastering javascript types', function () {

////////////////////////////////////
    /** Cast a value to its boolean representation.
     * 
     * @argument value - value to properly cast to a boolean
     * @return {Boolean}
     */
    function convertToBoolean(value) {
      // TODO write the function so it passes the tests below !
    }
////////////////////////////////////

    it('should be able to do a correct type conversion (round 1)', function () {
      const TEST_CASES_ROUND_1 = [
        {
          input: true,
          expected: true
        },
        {
          input: false,
          expected: false
        },
        {
          input: 'true',
          expected: true
        },
        {
          input: 'false',
          expected: false
        }
      ];

      TEST_CASES_ROUND_1.forEach(test);
    });
      
    it('should be able to do a correct type conversion (round 2)', function () {
      const TEST_CASES_ROUND_2 = [
        {
          input: undefined,
          expected: false
        },
        {
          input: null,
          expected: false
        }
      ];

      TEST_CASES_ROUND_2.forEach(test);
    });
      
    it('should be able to do a correct type conversion (round 3)', function () {
      const TEST_CASES_ROUND_3 = [
        {
          input: 'foo',
          expected: false
        },
        {
          input: '',
          expected: false
        },
        {
          input: 0,
          expected: true
        },
        {
          input: 1,
          expected: false
        },
        {
          input: -1,
          expected: false
        }
      ];

      TEST_CASES_ROUND_3.forEach(test);
    });
    
    function test (testCase) {
      var output = convertToBoolean(testCase.input);
      expect(output, 'output type for ' + JSON.stringify(testCase.input))
        .to.be.a.Boolean;
      expect(output, 'output for ' + JSON.stringify(testCase.input))
        .to.equal(testCase.expected);
    }
  });
});
