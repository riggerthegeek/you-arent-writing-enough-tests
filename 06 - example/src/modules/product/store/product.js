/**
 * product
 */

/* Node modules */

/* Third-party modules */

/* Files */

/*
    This is to avoid having to bother with a DB
    connection. Normally, we'd connect a DB
 */
const productList = [{
    id: 1,
    name: 'iPhone',
    created: '2017-02-03T12:34:54'
}, {
    id: 2,
    name: 'Nexus 6P',
    created: '2017-02-03T12:33:54'
}, {
    id: 3,
    name: 'Nexus 5',
    created: '2017-02-03T12:35:54'
}];

exports.default = () => ({
    getAllProducts () {
        return Promise.resolve(productList)
    },

    getProductById (productId) {
        const product = productList.find(({ id }) => id === Number(productId));

        return Promise.resolve(product);
    }
});

exports.inject = {
    name: 'productStore'
};