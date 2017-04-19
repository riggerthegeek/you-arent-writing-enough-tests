/**
 * service
 */

/* Node modules */

/* Third-party modules */
const _ = require('lodash');

/* Files */

exports.default = (productStore, ProductsCollection, ProductModel) => ({
    findAllProducts () {
        return productStore.getAllProducts()
            .then(result => ProductsCollection.toModels(result))
            .then(collection => {
                /*
                    This is a noddy function to so how we're only
                    testing the interfaces and not the implementation
                 */
                const ids = [
                    1,
                    2,
                    5
                ];

                return _.reduce(ids, (thenable, id) => {
                    return thenable
                        .then(() => productStore.someNoddyFunction(id));
                }, Promise.resolve())
                    .then(() => collection);
            })
    },

    findProductById (id) {
        return productStore.getProductById(id)
            .then(result => {
                if (result) {
                    return ProductModel.toModel(result);
                }
            })
    }
});

exports.inject = {
    name: '$productService',
    deps: [
        'productStore',
        'ProductsCollection',
        'ProductModel'
    ]
};