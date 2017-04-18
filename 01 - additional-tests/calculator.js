/**
 * calculator
 */

/* Node modules */

/* Third-party modules */

/* Files */

module.exports = class Calculator {

    get sum () {
        return this._sum || 0;
    }

    set sum (sum) {
        this._sum = sum;
    }

    add (...args) {
        this.sum = args.reduce((result, number) => {
            result += number;
            return result;
        }, 0);
        return this;
    }

};