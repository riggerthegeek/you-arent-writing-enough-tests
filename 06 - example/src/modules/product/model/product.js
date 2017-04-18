/**
 * product
 */

/* Node modules */

/* Third-party modules */

/* Files */

exports.default = Model => class ProductModel extends Model {
    _schema () {
        return {
            id: {
                type: 'integer'
            },

            name: {
                type: 'string'
            },

            created: {
                type: 'date'
            },

            updated: {
                type: 'date'
            }
        };
    }
};

exports.inject = {
    name: 'ProductModel',
    deps: [
        'steeplejack-model'
    ]
};
