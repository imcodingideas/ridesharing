const 
    assert = require('assert'),
    request = require('supertest'),
    mongoose = require('mongoose'),
    app = require('../../app');

const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
    it('POST to /api/drivers creates a new driver', (done)=>{
        Driver.count().then(count => {
            request(app)
                .post('/api/drivers')
                .send({ email: 'test@test.com' })
                .end(()=>{
                    Driver.count().then(newCount => {
                        assert(count + 1 === newCount);
                        done();
                    });
                });
        });
    });
})