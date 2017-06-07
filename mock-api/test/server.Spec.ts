import server from '../server';
import * as request from 'supertest';

describe('the mock api server', () => {
  describe('GET /clients', () => {
    it('returns JSON', (done) => {
      const app = server();

      request(app)
        .get('/clients')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(() => {
          app.close();
          done();
        });
    });
  });
});