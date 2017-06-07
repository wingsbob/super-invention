import * as express from 'express';
import clients from './clients';
import apps from './apps';

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

  return app.listen(3000);
};
