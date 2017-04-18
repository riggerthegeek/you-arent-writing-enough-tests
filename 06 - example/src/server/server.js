/**
 * server
 */

/* Node modules */

/* Third-party modules */

/* Files */

exports.default = function (config, Server, { Express }) {
    const express = new Express();

    return new Server(config.server, express);
};

exports.inject = {
    name: 'server',
    deps: [
        '$config',
        'steeplejack-server',
        'Express'
    ]
};