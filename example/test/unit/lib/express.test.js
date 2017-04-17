/**
 * express.test
 */

/* Node modules */

/* Third-party modules */
const SteeplejackExpress = require('steeplejack-express');

/* Files */
const { expect } = require('../../helpers/setup');
const express = require('../../../src/lib/express');

describe('Express tests', function () {

    it('should configure the injector', function () {

        expect(express.inject).to.be.eql({
            name: 'Express'
        });

    });

    it('should expose the relevant modules', function () {

        expect(express.default()).to.be.eql({
            Express: SteeplejackExpress.Express,
            expressLib: SteeplejackExpress.expressLib
        });

    });

});