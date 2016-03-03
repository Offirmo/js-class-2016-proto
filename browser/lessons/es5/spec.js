define([ 'mocha', 'chai', 'sinon'], function(mocha, chai, sinon) {
  'use strict';
  var expect = chai.expect;
  mocha.setup('bdd');

  describe('A good javascript developer', function () {

    context('mastering javascript unit tests', function () {

      it('should be able to use mocha and chai', function () {
        expect(53).to.be.a('Number');
      });
    });
  });
});
