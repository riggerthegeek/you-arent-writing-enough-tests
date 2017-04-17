/**
 * product.test
 */

/* Node modules */

/* Third-party modules */

/* Files */
const { expect, request } = require('../../helpers/e2e');

describe('/product tests', function () {

    describe('/:id', function () {

        describe('GET', function () {

            it('should return 204 if no product found', function () {

                return request.get('/product/22')
                    .expect(204);

            });

            it('should return the product', function () {

                return request.get('/product/2')
                    .expect(200, {
                        id: 2,
                        name: 'Nexus 6P',
                        created: new Date(2017, 1, 3, 12, 33, 54).toISOString(),
                        updated: null
                    });

            });

        });

    });

    describe('/', function () {

        describe('GET', function () {

            it('should return all the products', function () {

                return request.get('/product')
                    .expect(200, [{
                        id: 1,
                        name: 'iPhone',
                        created: new Date(2017, 1, 3, 12, 34, 54).toISOString(),
                        updated: null
                    }, {
                        id: 2,
                        name: 'Nexus 6P',
                        created: new Date(2017, 1, 3, 12, 33, 54).toISOString(),
                        updated: null
                    }, {
                        id: 3,
                        name: 'Nexus 5',
                        created: new Date(2017, 1, 3, 12, 35, 54).toISOString(),
                        updated: null
                    }])

            });

        });

    });

});