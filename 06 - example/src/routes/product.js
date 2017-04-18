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
                    .then(result => {
                        if (!result) {
                            return 404;
                        }

                        return result;
                    })
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