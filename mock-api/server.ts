import * as express from 'express';
import * as bodyParser from 'body-parser';
import clients from './clients';
import apps from './apps';
import events from './events';

const createGetById = (idName: string, collection: {id: string}[]) =>
  (req, res) => {
    const requestedId = req.params[idName];
    const target = collection.find(({id}) => id === requestedId);

    if (target) res.json(target);
    else res.status(404).end();
  };

export default () => {
  const app = express();

  app.use(bodyParser.json());
  app.get('/apps', (req, res) => res.json(apps));
  app.get('/clients', (req, res) => res.json(clients));

  app.get('/client/:clientId', createGetById('clientId', clients))
  app.get('/app/:appId', createGetById('appId', apps));
  app.get('/events/:appId', createGetById('appId', events));

  app.put('/events/:appId', (req, res) => {
    const {appId} = req.params
    const appEvents = events.find(({id}) => id === appId);

    if (!appEvents) res.status(404).send(`event with id: ${appId} does not exist`);
    else {
      const update = req.body;
      if (appId !== update.id) res.status(400).send(`cannot modify appId for an event`);
      else res.status(204).send();
    }
  });

  return app.listen(3000);
};
