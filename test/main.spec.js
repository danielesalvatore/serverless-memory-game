process.env.NODE_ENV = 'test';

let axios = require('axios');
let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
let HOST = "http://localhost:3000";

chai.use(chaiHttp);

describe('Scores', () => {

    describe('/POST scores', () => {
        it('it should POST a new scores', (done) => {

            let Item = {
                scoreId: "test",
                time: 200,
                name: "Dani"
            };

            axios.post(HOST + '/scores', Item)
                .then(res => {
                    console.log("DANI")

                    expect(res.data.name).to.equal(Item.name);
                    done();
                }).catch(error => {
                console.log("DANI ERROR")

                console.log(error);
                done();
            });
        });
    });

    describe('/GET scores', () => {
        it('it should GET all the scores', (done) => {
            axios.get(HOST + '/scores')
                .then(res => {
                    console.log("DANI")
                    expect(res.status).to.equal(200);
                    expect(res.data.Items.length).not.to.equal(0);
                    done();
                }).catch(error => {
                console.log("DANI ERROR")

                console.log(error);
                done();
            });
        });
    });

});