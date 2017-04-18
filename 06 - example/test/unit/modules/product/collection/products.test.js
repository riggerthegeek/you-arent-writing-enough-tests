/**
 * products
 */

/* Node modules */

/* Third-party modules */

/* Files */
const { expect, sinon } = require('../../../../helpers/setup');
const collection = require('../../../../../src/modules/product/collection/products');

describe('Products collection tests', function () {

    it('should configure the injector', function () {

        expect(collection.inject).to.be.eql({
            name: 'ProductsCollection',
            deps: [
                'steeplejack-collection',
                'ProductModel'
            ]
        });

    });

    describe('methods', function () {

        beforeEach(function () {
            this.Collection = sinon.stub();
            this.Model = sinon.stub();

            this.obj = collection.default(this.Collection, this.Model);

            this.products = new this.obj();

            expect(this.products).to.be.instanceof(this.obj)
                .instanceof(this.Collection);
        });

        describe('#_method', function () {

            it('should return the model', function () {

                expect(this.products._model()).to.be.equal(this.Model);

            });

        });

    });

});