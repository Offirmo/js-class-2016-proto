import mocha from 'mocha';
mocha.setup('bdd');

import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinon_chai from 'sinon-chai';
chai.use(sinon_chai);

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

  describe('sinon', function () {
    it('should work', function () {
      var sinonSpy = sinon.spy();
      expect( sinonSpy ).to.not.have.been.called;

      sinonSpy('hello');
      expect( sinonSpy ).to.have.been.calledOnce;
      expect( sinonSpy ).to.have.been.calledWith('hello');
    });
  });
});
