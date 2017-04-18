/**
 * server
 */

/* Node modules */

/* Third-party modules */

/* Files */
const { expect, sinon } = require('../../helpers/setup');
const server = require('../../../src/server/server');

describe('Server tests', function () {

    it('should configure the injector', function () {

        expect(server.inject).to.be.eql({
            name: 'server',
            deps: [
                '$config',
                'steeplejack-server',
                'Express'
            ]
        });

    });

    it('should return a server strategy in the default factory', function () {

        const serverObj = {};
        const expressObj = {};

        const Server = sinon.stub()
            .returns(serverObj);

        const express = {
            Express: sinon.stub()
                .returns(expressObj)
        };

        const config = {
            server: 'serverConfig'
        };

        expect(server.default(config, Server, express)).to.be.equal(serverObj);

        expect(Server).to.be.calledOnce
            .calledWithNew
            .calledWithExactly('serverConfig', expressObj);

        expect(express.Express).to.be.calledOnce
            .calledWithNew
            .calledWithExactly();

    });

});