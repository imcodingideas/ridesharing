const 
    assert = require('assert'),
    request = require('supertest'),
    app = require('../app');

describe('The express app', () => {
    it('handles a get request to /api', (done) => {
        request(app)
            .get('/api')
            .end((err, response) => {
                assert(response.body.hi === 'there');
                done();
            });
    });
});