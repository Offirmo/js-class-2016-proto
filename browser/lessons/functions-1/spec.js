import mocha from 'mocha';
import {expect} from 'chai';
mocha.setup('bdd');

// inspiration : https://www.new-bamboo.co.uk/blog/2013/02/26/full-text-search-in-your-browser/

describe('[Lesson 1] A good javascript developer', function () {

  context('mastering javascript functions', function () {

    describe('writes a tokenizer : it...', function () {

      it('should tokenize properly a trivial string', function () {
        expect( tokenize('Qui me parle ?') )
          .to.deep.equal([ 'Qui', 'me', 'parle', '?' ]);
      });

      it('should tokenize properly a trivial string with extra spaces', function () {
        expect( tokenize(' Qui me  parle ? ') )
          .to.deep.equal([ 'Qui', 'me', 'parle', '?' ]);
      });
    });

    describe('writes a stemmer : it...', function () {

      it('should stem by harmonizing case', function () {
        expect( stem('Qui') ).to.equal('qui');
      });

      it('should tokenize properly a trivial string with extra spaces', function () {
        expect( tokenize(' Qui me  parle ? ') )
          .to.deep.equal([ 'Qui', 'me', 'parle', '?' ]);
      });
    });

    describe('writes a lexical parser : it...', function () {

      it('should combine the tokenizer and stemmer', function () {
        expect( parse(' Qui me  parle ?  Qui me cherche ?') )
          .to.deep.equal([ 'qui', 'me', 'parle', '?', 'qui', 'me', 'cherche', '?' ]);
      });
    });

    describe('writes a lexical analyzer : it...', function () {

      it('should compute term frequency', function () {
        expect( index(' Qui me  parle ?  Qui me cherche ?') )
          .to.deep.equal({
            qui: 2,
            me: 2,
            parle: 1,
            cherche: 1,
            '?': 2
          });
      });
    });
  });
});
