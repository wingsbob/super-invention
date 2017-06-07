import server from '../server';
import clients from '../clients';
import * as request from 'supertest';

describe('the mock api server', () => {
  describe('GET /clients', () => {
    it('returns JSON', (done) => {
      const app = server();

      request(app)
        .get('/clients')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a list of all clients', (done) => {
      const app = server();

      request(app)
        .get('/clients')
        .expect(clients)
        .end((err) => {
          app.close();
          done(err);
        });
    });
  });
  describe('GET /client/:clientId', () => {
    it('returns a 404 when no client is specified', (done) => {
      const app = server();

      request(app)
        .get('/client/')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 404 when the client specified does not exist', (done) => {
      const app = server();

      request(app)
        .get('/client/749890d3-d700-467e-b865-58473eb48f14')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns json when the client does exist', (done) => {
      const app = server();

      request(app)
        .get('/client/2e9466b1-6fae-4639-80c8-101181688d06')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns the client matching the given Id', (done) => {
      const app = server();

      request(app)
        .get('/client/2e9466b1-6fae-4639-80c8-101181688d06')
        .expect(200)
        .expect(clients.find(({id}) => id === '2e9466b1-6fae-4639-80c8-101181688d06'))
        .end((err) => {
          app.close();
          done(err);
        });
    });
  });
});