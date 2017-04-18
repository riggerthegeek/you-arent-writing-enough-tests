/**
 * app
 */

/* Node modules */

/* Third-party modules */
const Steeplejack = require('steeplejack');

/* Files */
const config = require('./config.json');

/* Bootstrap the Steeplejack app */
const app = Steeplejack.app({
    config,
    modules: [
        `${__dirname}/!(node_modules|routes)/**/*.js`,
    ],
    routesDir: `${__dirname}/routes`,
});

/* Load up the server module */
app.run(['server'], server => server);

module.exports = app;
