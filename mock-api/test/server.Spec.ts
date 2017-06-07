import server from '../server';
import clients from '../clients';
import apps from '../apps';
import events from '../events';
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
  describe('GET /apps', () => {
    it('returns JSON', (done) => {
      const app = server();

      request(app)
        .get('/apps')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a list of all apps', (done) => {
      const app = server();

      request(app)
        .get('/apps')
        .expect(apps)
        .end((err) => {
          app.close();
          done(err);
        });
    });
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
  describe('GET /app/:appId', () => {
    it('returns a 404 when no client is specified', (done) => {
      const app = server();

      request(app)
        .get('/app/')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 404 when the client specified does not exist', (done) => {
      const app = server();

      request(app)
        .get('/app/2e9466b1-6fae-4639-80c8-101181688d06')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns json when the client does exist', (done) => {
      const app = server();

      request(app)
        .get('/app/316dc366-4a24-463f-b87c-2e8f2c11a903')
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
        .get('/app/316dc366-4a24-463f-b87c-2e8f2c11a903')
        .expect(200)
        .expect(apps.find(({id}) => id === '316dc366-4a24-463f-b87c-2e8f2c11a903'))
        .end((err) => {
          app.close();
          done(err);
        });
    });
  });
  describe('GET /events/:appId', () => {
    it('returns a 404 when no client is specified', (done) => {
      const app = server();

      request(app)
        .get('/events/')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 404 when the client specified does not exist', (done) => {
      const app = server();

      request(app)
        .get('/events/2e9466b1-6fae-4639-80c8-101181688d06')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns json when the client does exist', (done) => {
      const app = server();

      request(app)
        .get('/events/316dc366-4a24-463f-b87c-2e8f2c11a903')
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
        .get('/events/316dc366-4a24-463f-b87c-2e8f2c11a903')
        .expect(200)
        .expect(events.find(({id}) => id === '316dc366-4a24-463f-b87c-2e8f2c11a903'))
        .end((err) => {
          app.close();
          done(err);
        });
    });
  });
  describe('PUT /events/:appId', () => {
    it('returns a 404 when no client is specified', (done) => {
      const app = server();

      request(app)
        .put('/events/')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 404 when the client specified does not exist', (done) => {
      const app = server();

      request(app)
        .put('/events/2e9466b1-6fae-4639-80c8-101181688d06')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 400 when the update tries to change the Id', (done) => {
      const app = server();

      request(app)
        .put('/events/316dc366-4a24-463f-b87c-2e8f2c11a903')
        .send({id: 'not-the-same'})
        .expect(400)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 400 when the update is not an object', (done) => {
      const app = server();

      request(app)
        .put('/events/316dc366-4a24-463f-b87c-2e8f2c11a903')
        .send(null)
        .expect(400)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 204 when the update has the same Id', (done) => {
      const app = server();

      request(app)
        .put('/events/316dc366-4a24-463f-b87c-2e8f2c11a903')
        .send({id: '316dc366-4a24-463f-b87c-2e8f2c11a903'})
        .expect(204)
        .end((err) => {
          app.close();
          done(err);
        });
    });
  });
});