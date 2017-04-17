/**
 * user
 */

/* Node modules */

/* Third-party modules */

/* Files */
const { expect, request } = require('../../helpers/e2e');

describe('/user', function () {

    describe('GET', function () {

        it('should get a known user', function () {

            return request.get('/user/test/q1w2e3r4')
                .expect(200)
                .then(({ body }) => {
                    expect(body).to.have.keys([
                        '_id',
                        'username',
                        'emailAddress',
                        'password',
                        'created'
                    ]);

                    expect(body.username).to.be.equal('test');
                    expect(body.emailAddress).to.be.equal('test@test.com');
                    expect(body.password).to.be.equal('q1w2e3r4');

                    expect(body._id).to.be.a('string')
                        .to.have.length(24);

                    expect(new Date(body.created).getTime()).to.be.below(Date.now());
                });

        });

        it('should return 404 when unknown user', function () {

            return request.get('/user/test/q1w2e3r4t5')
                .expect(404);

        });

    });

    describe('POST', function () {

        it('should error if no username/email/password', function () {

            return request.post('/user')
                .expect(400, 'Missing params: username, emailAddress, password');

        });

        it('should create a new user', function () {

            // Ensures that the user actually created
            const startTime = Date.now();

            // This data should never be relied upon as could never skip test
            return request.post('/user')
                .send({
                    username: 'example',
                    password: 'q1w2e3r4',
                    emailAddress: 'example@example.com'
                })
                .expect(200)
                .then(({ body }) => {

                    expect(body).to.have.keys([
                        '_id',
                        'username',
                        'emailAddress',
                        'password',
                        'created'
                    ]);

                    expect(body.username).to.be.equal('example');
                    expect(body.emailAddress).to.be.equal('example@example.com');
                    expect(body.password).to.be.equal('q1w2e3r4');

                    expect(body._id).to.be.a('string')
                        .to.have.length(24);

                    expect(new Date(body.created).getTime()).to.be.below(Date.now())
                        .to.be.above(startTime);
                });

        });

    });

});