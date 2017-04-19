/**
 * product.test
 */

/* Node modules */

/* Third-party modules */

/* Files */
const { expect, sinon } = require('../../../../helpers/setup');
const store = require('../../../../../src/modules/product/store/product');

describe('Product store tests', function () {

    it('should configure the injector', function () {

        expect(store.inject).to.be.eql({
            name: 'productStore'
        });

    });

    describe('methods', function () {

        beforeEach(function () {
            this.obj = store.default();
        });

        describe('#getAllProducts', function () {

            it('should return all the products', function () {

                return this.obj.getAllProducts()
                    .then(result => {
                        expect(result).to.be.eql([{
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
                        }]);
                    });

            });

        });

        describe('#getProductById', function () {

            it('should return a single product casting the Number', function () {

                return this.obj.getProductById('3')
                    .then(result => {
                        expect(result).to.be.eql({
                            id: 3,
                            name: 'Nexus 5',
                            created: '2017-02-03T12:35:54'
                        });
                    });

            });

        });

        describe('#someNoddyFunction', function () {

            it('should return an empty Promise', function () {

                return this.obj.someNoddyFunction(222)
                    .then(id => {

                        expect(id).to.be.equal(222);

                    });

            });

        });

    });

});