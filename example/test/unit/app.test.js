/**
 * app.test
 */

/* Node modules */

/* Third-party modules */

/* Files */
const { expect, proxyquire, sinon } = require('../helpers/setup');

describe('app tests', function () {

    it('should configure the app bootstrapping', function () {
        const config = {
            server: 'serverObj',
        };

        const steeplejackInst = {
            run: sinon.stub(),
        };

        const steeplejack = {
            app: sinon.stub()
                .returns(steeplejackInst),
        };

        const app = proxyquire('src/app', {
            steeplejack,
            './config.json': config,
        });

        expect(app).to.be.equal(steeplejackInst);

        expect(steeplejack.app).to.be.calledOnce
            .calledWithExactly({
                config,
                modules: [
                    `${process.cwd()}/src/!(node_modules|routes)/**/*.js`,
                ],
                routesDir: `${process.cwd()}/src/routes`,
            });

        expect(steeplejackInst.run).to.be.calledOnce
            .calledWith([
                'server',
            ]);

        const run = steeplejackInst.run.args[0][1];

        expect(run).to.be.a('function');

        const server = {};

        expect(run(server)).to.be.equal(server);
    });

});
