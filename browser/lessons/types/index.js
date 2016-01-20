import mocha from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
mocha.setup('bdd');

import _ from 'lodash';

describe('A good javascript developer', function () {

  context('mastering javascript types', function () {

////////////////////////////////////
    function convertToBoolean(value) {
      return _.isBoolean(value) ? value : (value === 'true');
    }
////////////////////////////////////

    it('should be able to do a correct type conversion', function () {
      var TEST_CASES = [
        {
          input: true,
          expected: true
        },
        {
          input: 'true',
          expected: true
        },
        {
          input: false,
          expected: false
        },
        {
          input: 'false',
          expected: false
        },
        {
          input: 'foo',
          expected: false
        },
        {
          input: undefined,
          expected: false
        },
        {
          input: null,
          expected: false
        },
        {
          input: '',
          expected: false
        }
      ];

      TEST_CASES.forEach(function(testCase) {
        var output = convertToBoolean(testCase.input);
        expect(output, 'output type for ' + JSON.stringify(testCase.input))
          .to.be.a.Boolean;
        expect(output, 'output for ' + JSON.stringify(testCase.input))
          .to.equal(testCase.expected);
      });
    });
  });
});
