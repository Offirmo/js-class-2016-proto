import mocha from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
mocha.setup('bdd');

import _ from 'lodash';

// TODO array call on arguments

describe('Lesson 4 - A good javascript developer', function () {

  context('mastering javascript functions', function () {
    let clock;

    beforeEach(function () {
      clock = sinon.useFakeTimers(0, 'Date'); // needed to have a reproducible timestamp
    });
    afterEach(function () {
      clock.restore();
    });

    beforeEach(function () {
      sinon.spy(console, 'log');
      sinon.spy(console, 'info');
      sinon.spy(console, 'warn');
      sinon.spy(console, 'error');
    });
    afterEach(function () {
      console.error.restore;
      console.warn.restore;
      console.info.restore;
      console.log.restore;
    });

	  /** Convert a Javascript date to yyy/mm/dd hh:mm:ss.ms
     *
     * @param {Date} d
     */
    function getTimestamp(d) {
      d = d || (new Date());

      let yyyy = d.getFullYear();
      let mm = d.getMonth() + 1; // O-based
      let dd = d.getDate();
      // These lines ensure we have two-digits
      if (mm < 10) mm = '0' + mm;
      if (dd < 10) dd = '0' + dd;

      let hh = d.getUTCHours();
      let mn = d.getUTCMinutes();
      let ss = d.getSeconds();
      let mss = d.getMilliseconds();
      // These lines ensure we have two-digits
      if (hh < 10) hh = '0' + hh;
      if (mn < 10) mn = '0' + mn;
      if (ss < 10) ss = '0' + ss;
      if (mss < 10) mss = '00' + mss;
      else if (mss < 100) mss = '0' + mss;

      return `${yyyy}/${mm}/${dd} ${hh}:${mm}:${ss}.${mss}`;
    }

////////////////////////////////////
    function createBetterLogger() {
      function logBetter(level) {
        let originalArgs = Array.prototype.slice.call(arguments, 1); // because arguments is not an array
        //console.log('originalArgs', originalArgs);

        let prefix = getTimestamp() + ' - ';
        switch(level) {
          case 'log':
            prefix += '😊';
              break;
          case 'info':
            prefix += '😔';
            break;
          case 'warn':
            prefix += '😫';
            break;
          default:
            prefix += '😱';
            break;
        }

        var newArgs = originalArgs.slice();

        if(_.isString(originalArgs[0])) {
          newArgs[0] = prefix + ' ' + newArgs[0];
        }
        else {
          // insert our prefix as 1st arg
          newArgs.unshift(prefix);
        }
        //console.log('newArgs', newArgs);

        console[level].apply(console, newArgs);
      }


      return {
        log: logBetter.bind(undefined, 'log'),
        info: logBetter.bind(undefined, 'info'),
        warn: logBetter.bind(undefined, 'warn'),
        error: logBetter.bind(undefined, 'error'),
      };

      /*
      return {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
      };
      */

      /*
      return {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error,
      };
      */
    }
////////////////////////////////////

    describe('writes an advanced logger : it...', function () {

      it('should forward to proper functions', function () {
        let logger = createBetterLogger();

        logger.log('hello');
        expect(console.log).to.have.been.calledOnce;

        logger.info('hello');
        expect(console.info).to.have.been.calledOnce;

        logger.warn('hello');
        expect(console.warn).to.have.been.calledOnce;

        logger.error('hello');
        expect(console.error).to.have.been.calledOnce;
      });

      it('should add the date', function () {
        let logger = createBetterLogger();

        logger.log('log');
        expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - 😊 - log');

        logger.info('info');
        expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - 😔 - info');

        logger.warn('warn');
        expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - 😫 - warn');

        logger.error('error !');
        expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - 😱 - error !');
      });

      it('should handle both log invocation form', function () {
        let logger = createBetterLogger();
        let user = {
          name: 'John',
          points: 12345
        };

        logger.log('User %s has %d points', user.name, user.points);
        expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - 😊 - hello');

        logger.log(user);
        expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - 😊 - hello');
      });

    });

  });
});
