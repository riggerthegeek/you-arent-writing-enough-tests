/**
 * logger
 */

/* Node modules */

/* Third-party modules */
const chai = require('chai');
const sinon = require('sinon');

/* Files */
const Logger = require('../src/logger');

chai.use(require('sinon-chai'));
const { expect } = chai;

describe('Logger test', function () {

    beforeEach(function () {
        this.strategy = {
            fatal: sinon.spy(),
            error: sinon.spy(),
            warn: sinon.spy(),
            info: sinon.spy(),
            debug: sinon.spy(),
            trace: sinon.spy(),
            trace2: sinon.spy()
        };
        this.obj = new Logger(this.strategy);
    });

    it('should call the fatal', function () {
        expect(this.obj.fatal('msg', 'arg1', 'arg2', 'arg3')).to.be.undefined;

        expect(this.strategy.fatal).to.be.calledOnce
            .calledWithExactly('msg', 'arg1', 'arg2', 'arg3');
    });

    it('should call the error', function () {
        expect(this.obj.error('msg', 'arg1', 'arg2', 'arg3')).to.be.undefined;

        expect(this.strategy.error).to.be.calledOnce
            .calledWithExactly('msg', 'arg1', 'arg2', 'arg3');
    });

    it('should call the warn', function () {
        expect(this.obj.warn('msg', 'arg1', 'arg2', 'arg3')).to.be.undefined;

        expect(this.strategy.warn).to.be.calledOnce
            .calledWithExactly('msg', 'arg1', 'arg2', 'arg3');
    });

    it('should call the info', function () {
        expect(this.obj.info('msg', 'arg1', 'arg2', 'arg3')).to.be.undefined;

        expect(this.strategy.info).to.be.calledOnce
            .calledWithExactly('msg', 'arg1', 'arg2', 'arg3');
    });

    it('should call the debug', function () {
        expect(this.obj.debug('msg', 'arg1', 'arg2', 'arg3')).to.be.undefined;

        expect(this.strategy.debug).to.be.calledOnce
            .calledWithExactly('msg', 'arg1', 'arg2', 'arg3');
    });

    it('should call the trace', function () {
        expect(this.obj.trace('msg', 'arg1', 'arg2', 'arg3')).to.be.undefined;

        expect(this.strategy.trace).to.be.calledOnce
            .calledWithExactly('msg', 'arg1', 'arg2', 'arg3');
    });

    it('should call the trace2', function () {
        expect(this.obj.trace2('msg', 'arg1', 'arg2', 'arg3')).to.be.undefined;

        expect(this.strategy.trace2).to.be.calledOnce
            .calledWithExactly('msg', 'arg1', 'arg2', 'arg3');
    });

});