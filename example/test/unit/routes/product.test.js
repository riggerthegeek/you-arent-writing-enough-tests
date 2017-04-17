/**
 * product.test
 */

/* Node modules */

/* Third-party modules */

/* Files */
const { expect, sinon } = require('../../helpers/setup');
const route = require('../../../src/routes/product');

describe('Product route tests', function () {

    it('should configure the injector', function () {

        expect(route.inject).to.be.eql({
            route: {
                deps: [
                    '$productService'
                ],
                export: 'default'
            }
        });

    });

    describe('routes', function () {

        beforeEach(function () {
            this.productService = {
                findProductById: sinon.stub(),
                findAllProducts: sinon.stub()
            };

            this.obj = route.default(this.productService);
        });

        describe('/', function () {

            describe('GET', function () {

                it('should dispatch to the findAllProducts method', function () {

                    this.productService.findAllProducts.resolves('allProducts');

                    return this.obj['/'].get()
                        .then(result => {
                            expect(result).to.be.equal('allProducts');

                            expect(this.productService.findAllProducts).to.be.calledOnce
                                .calledWithExactly();
                        });

                });

            });

        });

        describe('/:id', function () {

            describe('GET', function () {

                it('should dispatch to the findProductById service - some result', function () {

                    this.productService.findProductById.resolves('someProduct');

                    const req = {
                        params: {
                            id: 'someId'
                        }
                    };

                    return this.obj['/']['/:id'].get(req)
                        .then(result => {
                            expect(result).to.be.equal('someProduct');

                            expect(this.productService.findProductById).to.be.calledOnce
                                .calledWithExactly('someId');
                        });

                });

                it('should dispatch to the findProductById service - no result', function () {

                    this.productService.findProductById.resolves();

                    const req = {
                        params: {
                            id: 'invalidId'
                        }
                    };

                    return this.obj['/']['/:id'].get(req)
                        .then(result => {
                            expect(result).to.be.equal(404);

                            expect(this.productService.findProductById).to.be.calledOnce
                                .calledWithExactly('invalidId');
                        });

                });

            });

        });

    });

});