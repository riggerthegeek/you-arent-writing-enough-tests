/**
 * userStore
 */

/* Node modules */

/* Third-party modules */

/* Files */

module.exports = function (mongodb) {
    return {
        findUserByUserPassword: (username, password) => {
            return mongodb()
                .then(db => {
                    return db.collection('users')
                        .findOne({
                            username,
                            password
                        });
                });
        }
    };
};
