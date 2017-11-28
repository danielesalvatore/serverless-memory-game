process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
let HOST = "http://0.0.0.0:3000";

chai.use(chaiHttp);

describe('Scores', () => {

    describe('/POST scores', () => {
        it('it should POST a new scores', (done) => {

            let Item = {
                scoreId: "test",
                time: 200,
                name: "Dani"
            };

            chai.request(HOST)
                .post('/scores')
                .send(Item)
                .end((err, res) => {
                    expect(res.body.name).to.equal(Item.name);
                    done();
                });
        });
    });

    describe('/GET scores', () => {
        it('it should GET all the scores', (done) => {
            chai.request(HOST)
                .get('/scores')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.Items.length).not.to.equal(0);
                    done();
                });
        });
    });

});