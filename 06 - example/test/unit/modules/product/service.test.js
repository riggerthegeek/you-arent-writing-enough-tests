/**
 * service.test
 */

/* Node modules */

/* Third-party modules */

/* Files */
const { expect, sinon } = require('../../../helpers/setup');
const service = require('../../../../src/modules/product/service');

describe('Product service tests', function () {

    it('should define the injector', function () {

        expect(service.inject).to.be.eql({
            name: '$productService',
            deps: [
                'productStore',
                'ProductsCollection',
                'ProductModel'
            ]
        })

    });

    describe('methods', function () {

        beforeEach(function () {
            this.store = {
                getAllProducts: sinon.stub(),
                getProductById: sinon.stub()
            };
            this.collection = {
                toModels: sinon.stub()
            };
            this.model = {
                toModel: sinon.stub()
            };

            this.obj = service.default(this.store, this.collection, this.model);
        });

        describe('#findAllProducts', function () {

            it('should return all products and cast to a collection', function () {

                this.store.getAllProducts.resolves('some result');

                this.collection.toModels.resolves('collection result');

                return this.obj.findAllProducts()
                    .then(result => {

                        expect(result).to.be.equal('collection result');

                        expect(this.store.getAllProducts).to.be.calledOnce
                            .calledWithExactly();

                        expect(this.collection.toModels).to.be.calledOnce
                            .calledWithExactly('some result');

                    });

            });

        });

        describe('#findProductById', function () {

            it('should return model if data found', function () {

                this.store.getProductById.resolves('some result');

                this.model.toModel.resolves('model result');

                return this.obj.findProductById('productId')
                    .then(result => {

                        expect(result).to.be.equal('model result');

                        expect(this.store.getProductById).to.be.calledOnce
                            .calledWithExactly('productId');

                        expect(this.model.toModel).to.be.calledOnce
                            .calledWithExactly('some result');

                    });

            });

            it('should return undefined if no data found', function () {

                this.store.getProductById.resolves();

                return this.obj.findProductById('noId')
                    .then(result => {

                        expect(result).to.be.undefined;

                        expect(this.store.getProductById).to.be.calledOnce
                            .calledWithExactly('noId');

                        expect(this.model.toModel).to.not.be.called;

                    });

            });

        });

    });

});