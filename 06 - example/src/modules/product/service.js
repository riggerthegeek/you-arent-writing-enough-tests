/**
 * service
 */

/* Node modules */

/* Third-party modules */

/* Files */

exports.default = (productStore, ProductsCollection, ProductModel) => ({
    findAllProducts: () => productStore.getAllProducts()
        .then(result => ProductsCollection.toModels(result)),

    findProductById: id => productStore.getProductById(id)
        .then(result => {
            if (result) {
                return ProductModel.toModel(result);
            }
        })
});

exports.inject = {
    name: '$productService',
    deps: [
        'productStore',
        'ProductsCollection',
        'ProductModel'
    ]
};