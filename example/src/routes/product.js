/**
 * product
 */

/* Node modules */

/* Third-party modules */

/* Files */

exports.default = function (productService) {
    return {
        '/': {
            '/:id': {
                get: ({ params }) => productService.findProductById(params.id)
            },

            get: () => productService.findAllProducts()
        }
    };
};

exports.inject = {
    route: {
        deps: [
            '$productService'
        ],
        export: 'default'
    }
};