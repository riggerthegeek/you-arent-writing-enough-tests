/**
 * products
 */

/* Node modules */

/* Third-party modules */

/* Files */

exports.default = (Collection, ProductModel) => class Products extends Collection {
    _model () {
        return ProductModel;
    }
};

exports.inject = {
    name: 'ProductsCollection',
    deps: [
        'steeplejack-collection',
        'ProductModel'
    ]
};