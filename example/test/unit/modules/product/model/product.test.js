/**
 * product
 */

/* Node modules */

/* Third-party modules */

/* Files */
const { expect, sinon } = require('../../../../helpers/setup');
const model = require('../../../../../src/modules/product/model/product');

describe('Product model tests', function () {

    it('should configure the injector', function () {

        expect(model.inject).to.be.eql({
            name: 'ProductModel',
            deps: [
                'steeplejack-model'
            ]
        });

    });

    describe('methods', function () {

        beforeEach(function () {
            this.Model = sinon.stub();

            this.obj = model.default(this.Model);

            this.product = new this.obj();

            expect(this.product).to.be.instanceof(this.obj)
                .instanceof(this.Model);
        });

        describe('#_schema', function () {

            it('should return the model schema', function () {

                expect(this.product._schema()).to.be.eql({
                    id: {
                        type: 'integer'
                    },

                    name: {
                        type: 'string'
                    },

                    created: {
                        type: 'date'
                    },

                    updated: {
                        type: 'date'
                    }
                });

            });

        });

    });

});