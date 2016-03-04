define(function() {
  'use strict';

  context('[example] es5 test', function () {

    describe('A good javascript developer mastering javascript unit tests', function () {

      it('should be able to use mocha and chai in ES5', function () {
        expect(53).to.be.a('Number');
      });
    });
  });
});
