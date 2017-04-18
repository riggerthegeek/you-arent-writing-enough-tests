/**
 * calculator.test
 */

/* Node modules */

/* Third-party modules */
const { expect } = require('chai');

/* Files */
const Calculator = require('./calculator');

describe('Calculator test', function () {

    it('should add together 0 numbers', function () {

        const obj = new Calculator();

        expect(obj.add()).to.be.equal(obj);

        expect(obj.sum).to.be.equal(0);

    });

    it('should add together 1 numbers', function () {

        const obj = new Calculator();

        expect(obj.add(2)).to.be.equal(obj);

        expect(obj.sum).to.be.equal(2);

    });

    it('should add together 2 numbers', function () {

        const obj = new Calculator();

        expect(obj.add(2, 6)).to.be.equal(obj);

        expect(obj.sum).to.be.equal(8);

    });

    it('should add together n numbers', function () {

        const numbers = [[
            2,4,6,8
        ], [
            5435,6575,2357,86534
        ], [
            45687654,3467876543,23435676543,3456543,0
        ]];

        numbers.forEach(nums => {
            const sum = nums.reduce((result, num) => {
                result += num;
                return result;
            }, 0);

            const obj = new Calculator();

            expect(obj.add(...nums)).to.be.equal(obj);

            expect(obj.sum).to.be.equal(sum);
        });

    });

});