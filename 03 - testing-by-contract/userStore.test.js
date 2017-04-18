/**
 * userStore.test
 */

/* Node modules */

/* Third-party modules */
const chai = require('chai');

/* Files */
const userStore = require('./userStore');

describe('User Store tests', function () {

    it('should connect to the database and get the user', function () {

        return userStore.findUserByUserPassword('test', 'q1w2e3r4')
            .then(result => {

                expect(result).to.be.eql({
                    username: 'test',
                    password: 'q1w2e3r4',
                    created: new Date(2017, 1, 2, 23, 42, 12, 22)
                });

            });

    });

});