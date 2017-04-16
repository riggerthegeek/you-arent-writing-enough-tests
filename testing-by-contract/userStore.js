/**
 * userStore
 */

/* Node modules */

/* Third-party modules */
const MongoClient = require('mongodb').MongoClient;

/* Files */

const url = 'mongodb://localhost:27017/test-by-contract';

module.exports = {
    findUserByUserPassword: (username, password) => {
        return MongoClient.connect(url)
            .then(db => {
                return db.collection('users')
                    .findOne({
                        username,
                        password
                    });
            });
    }
};
