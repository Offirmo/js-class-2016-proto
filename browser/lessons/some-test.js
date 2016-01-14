import mocha from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
mocha.setup('bdd');

describe('A good javascript developper', function () {

  context('mastering javascript types', function () {

    it('should be able to play with numbers', function () {
      expect(53).to.be.a('Number');
      expect(-1.9).to.be.a('Number');
      expect(53).to.be.a('String');
      expect(53).to.be.a('Boolean');
      expect(53).to.be.a('Function');
      expect(53).to.be.an('Object');
      expect(53).to.be.a('null');
      expect(53).to.be.an('undefined');
    });
  });
});
