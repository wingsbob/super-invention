import server from '../server';
import clients from '../clients';
import {IClient} from '../clients';
import apps from '../apps';
import {IApp} from '../apps';
import events from '../events';
import {IEvents} from '../events';
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
        .expect(<IClient>clients.find(({id}) => id === '2e9466b1-6fae-4639-80c8-101181688d06'))
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
        .expect(<IClient>clients.find(({id}) => id === '2e9466b1-6fae-4639-80c8-101181688d06'))
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
        .expect(<IApp>apps.find(({id}) => id === '316dc366-4a24-463f-b87c-2e8f2c11a903'))
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
        .expect(<IEvents>events.find(({id}) => id === '316dc366-4a24-463f-b87c-2e8f2c11a903'))
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
    it('returns returns the updated events ', (done) => {
      const app = server();

      request(app)
        .put('/events/316dc366-4a24-463f-b87c-2e8f2c11a903')
        .send({
          id: '316dc366-4a24-463f-b87c-2e8f2c11a903',
          event3: {
            enabled: true
          }
        })
        .end((err) =>
          request(app)
            .get('/events/316dc366-4a24-463f-b87c-2e8f2c11a903')
            .expect({
              ...events.find(({id}) => id === '316dc366-4a24-463f-b87c-2e8f2c11a903'),
              event3: {
                enabled: true
              }
            })
            .end(err => {
              app.close();
              done(err);
            })
        );
    });
  });
  describe('PUT /app/:appId', () => {
    it('returns a 404 when no client is specified', (done) => {
      const app = server();

      request(app)
        .put('/app/')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 404 when the client specified does not exist', (done) => {
      const app = server();

      request(app)
        .put('/app/2e9466b1-6fae-4639-80c8-101181688d06')
        .expect(404)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 400 when the update tries to change the Id', (done) => {
      const app = server();

      request(app)
        .put('/app/316dc366-4a24-463f-b87c-2e8f2c11a903')
        .send({id: 'not-the-same'})
        .expect(400)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns a 204 when the update has the same Id', (done) => {
      const app = server();

      request(app)
        .put('/app/316dc366-4a24-463f-b87c-2e8f2c11a903')
        .send({id: '316dc366-4a24-463f-b87c-2e8f2c11a903'})
        .expect(204)
        .end((err) => {
          app.close();
          done(err);
        });
    });
    it('returns returns the updated apps ', (done) => {
      const app = server();

      request(app)
        .put('/app/316dc366-4a24-463f-b87c-2e8f2c11a903')
        .send({
          id: '316dc366-4a24-463f-b87c-2e8f2c11a903',
          supportedDevices: 3
        })
        .end((err) =>
          request(app)
            .get('/app/316dc366-4a24-463f-b87c-2e8f2c11a903')
            .expect({
              ...apps.find(({id}) => id === '316dc366-4a24-463f-b87c-2e8f2c11a903'),
              supportedDevices: 3
            })
            .end(err => {
              app.close();
              done(err);
            })
        );
    });
  });
  describe('GET /config/:clientId', () => {
    it('404s initially', (done) => {
      const app = server();

      request(app)
        .get('/config/2e9466b1-6fae-4639-80c8-101181688d06')
        .expect(404)
        .end(err => {
          app.close();
          done(err);
        });
    });
    it('returns JSON after the client is deployed', (done) => {
      const app = server();
      const wrapUp = (err: Error|null) => {
        app.close();
        done(err);
      }
      request(app)
        .put('/deploy/2e9466b1-6fae-4639-80c8-101181688d06')
        .expect(204)
        .end((err) => {
          if (err) wrapUp(err)
          else {
            return request(app)
              .get('/config/2e9466b1-6fae-4639-80c8-101181688d06')
              .expect(200)
              .expect('Content-Type', /json/)
              .end(wrapUp)
          }
        });
    });
    it('bundles all the config together', (done) => {
      const app = server();
      const wrapUp = (err: Error|null) => {
        app.close();
        done(err);
      }
      request(app)
        .put('/deploy/2e9466b1-6fae-4639-80c8-101181688d06')
        .expect(204)
        .end((err) => {
          if (err) wrapUp(err)
          else {
            return request(app)
              .get('/config/2e9466b1-6fae-4639-80c8-101181688d06')
              .expect({
                id: '2e9466b1-6fae-4639-80c8-101181688d06',
                name: 'my first client',
                apps: [{
                  id: 'f614bef0-c229-4b25-8dd6-d5eb142fbb16',
                  enabled: true,
                  supportedDevices: 3,
                  events: {
                    id: 'f614bef0-c229-4b25-8dd6-d5eb142fbb16',
                    event1: {
                      level: 2,
                      enabled: true
                    },
                    event2: {
                      level: 1,
                      enabled: false
                    }
                  }
                }]
              })
              .expect('Content-Type', /json/)
              .end(wrapUp)
          }
        });
    });
  });
});