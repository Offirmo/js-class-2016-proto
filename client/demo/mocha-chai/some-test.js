import mocha from 'mocha';
import {expect} from 'chai';
mocha.setup('bdd');

//import 'sinon';
//import sinon_chai from 'sinon-chai';
//chai.use(sinon_chai);

describe('ES6', function () {

  describe('template literals', function () {
    it('should work', function () {
      const foo = 'bar';
      expect(`hello ${foo} !`).to.equal('hello bar !');
    });

    it('should support multiline', function () {
      expect(
`
a multiline
template literal
`
      ).to.equal('\na multiline\ntemplate literal\n');
    });

    it('should support a custom function');
  });
});
