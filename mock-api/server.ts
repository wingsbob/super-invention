import * as express from 'express';
import clients from './clients';
import apps from './apps';
import events from './events';

export default () => {
  const app = express();

  app.get('/clients', (req, res) => {
    res.json(clients);
  });
  app.get('/client/:clientId', (req, res) => {
    const {clientId} = req.params
    const client = clients.find(({id}) => id === clientId);

    if (client) res.json(client);
    else res.status(404).end();
  });
  app.get('/apps', (req, res) => {
    res.json(apps);
  });
  app.get('/app/:appId', (req, res) => {
    const {appId} = req.params
    const app = apps.find(({id}) => id === appId);

    if (app) res.json(app);
    else res.status(404).end();
  });
  app.get('/events/:appId', (req, res) => {
    const {appId} = req.params
    const appEvents = events.find(({id}) => id === appId);

    if (appEvents) res.json(appEvents);
    else res.status(404).end();
  });

  return app.listen(3000);
};
