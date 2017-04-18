/**
 * Logger
 */

/* Node modules */

/* Third-party modules */

/* Files */

module.exports = class Logger{

    constructor (strategy) {
        this.strategy = strategy;
    }

    fatal (message, ...args) {
        this.strategy.fatal(message, ...args);
    }

    error (message, ...args) {
        this.strategy.error(message, ...args);
    }

    warn (message, ...args) {
        this.strategy.warn(message, ...args);
    }

    info (message, ...args) {
        this.strategy.info(message, ...args);
    }

    debug (message, ...args) {
        this.strategy.debug(message, ...args);
    }

    trace (message, ...args) {
        this.strategy.trace(message, ...args);
    }

    trace2 (message, ...args) {
        this.strategy.trace2(message, ...args);
    }

    trace3 (message, ...args) {
        // This will kill an application with an infinite loop
        return this.trace3(message, ...args);
    }

};