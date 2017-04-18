/**
 * e2e
 *
 * Helps us set up the end-to-end tests
 */

/* Node modules */

/* Third-party modules */
const { expect } = require('chai');
const supertest = require('supertest');

/* Files */
const server = require('../../src/app');

/* Create a request object with the application injected */
const request = supertest(server);

module.exports = {
    expect,
    request
};
