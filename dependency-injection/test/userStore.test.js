/**
 * userStore.test
 */

/* Node modules */

/* Third-party modules */
const chai = require('chai');
const sinon = require('sinon');

/* Files */
const userStore = require('../src/userStore');

chai.use(require('sinon-chai'));
const expect = chai.expect;

describe('User Store tests', function () {

    beforeEach(function () {
        /* Common successful DB connection */
        this.db = {
            collection: sinon.stub(),
            findOne: sinon.stub()
        };

        this.db.collection.returns(this.db);

        this.mongodb = sinon.stub();

        this.store = userStore(this.mongodb);
    });

    it('should simulate a valid user', function () {

        this.mongodb.resolves(this.db);

        this.db.findOne.resolves('some user');

        return this.store.findUserByUserPassword('test', 'q1w2e3r4')
            .then(user => {
                expect(user).to.be.equal('some user');

                expect(this.db.collection).to.be.calledOnce
                    .calledWithExactly('users');

                expect(this.db.findOne).to.be.calledOnce
                    .calledWithExactly({
                        username: 'test',
                        password: 'q1w2e3r4'
                    });

                expect(this.mongodb).to.be.calledOnce
                    .calledWithExactly();
            });

    });

    it('should simulate no valid user', function () {

        this.mongodb.resolves(this.db);

        this.db.findOne.resolves(null);

        return this.store.findUserByUserPassword('test2', 'q1w2e3r5')
            .then(user => {
                expect(user).to.be.null;

                expect(this.db.collection).to.be.calledOnce
                    .calledWithExactly('users');

                expect(this.db.findOne).to.be.calledOnce
                    .calledWithExactly({
                        username: 'test2',
                        password: 'q1w2e3r5'
                    });

                expect(this.mongodb).to.be.calledOnce
                    .calledWithExactly();
            });

    });

    it('should simulate a connection error', function () {

        this.mongodb.rejects(new Error('some connection error'));

        return this.store.findUserByUserPassword('test2', 'q1w2e3r5')
            .then(() => {
                throw new Error('invalid');
            })
            .catch(err => {
                expect(err).to.be.instanceof(Error);
                expect(err.message).to.be.equal('some connection error');

                expect(this.db.collection).to.not.be.called;
                expect(this.db.findOne).to.not.be.called;

                expect(this.mongodb).to.be.calledOnce
                    .calledWithExactly();
            });

    });

});