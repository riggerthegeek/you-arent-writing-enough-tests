/**
 * express
 */

/* Node modules */

/* Third-party modules */
const { Express, expressLib } = require('steeplejack-express');

/* Files */

exports.default = function () {
    return {
        Express,
        expressLib
    };
};

exports.inject = {
    name: 'Express'
};