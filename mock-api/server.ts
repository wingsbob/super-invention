import * as express from 'express';
import * as bodyParser from 'body-parser';
import clients from './clients';
import apps from './apps';
import events from './events';

const createGetById = (idName: string, collection: {id: string}[]) =>
  (req: express.Request, res: express.Response) => {
    const requestedId = req.params[idName];
    const target = collection.find(({id}) => id === requestedId);

    if (target) res.json(target);
    else res.status(404).end();
  };

export default () => {
  const instanceClients: typeof clients = JSON.parse(JSON.stringify(clients))
  const instanceApps: typeof apps = JSON.parse(JSON.stringify(apps))
  const instanceEvents: typeof events = JSON.parse(JSON.stringify(events))
  const app = express();

  app.use(bodyParser.json());
  app.get('/apps', (req, res) => res.json(instanceApps));
  app.get('/clients', (req, res) => res.json(instanceClients));

  app.get('/client/:clientId', createGetById('clientId', instanceClients))
  app.get('/app/:appId', createGetById('appId', instanceApps));
  app.get('/events/:appId', createGetById('appId', instanceEvents));

  app.put('/events/:appId', (req, res) => {
    const {appId} = req.params
    const eventsIndex = instanceEvents.findIndex(({id}) => id === appId);

    if (eventsIndex === -1) res.status(404).send(`event with id: ${appId} does not exist`);
    else {
      const update = req.body;
      if (appId !== update.id) res.status(400).send(`cannot modify appId for an event`);
      else {
        const events = instanceEvents.splice(eventsIndex, 1)[0];
        instanceEvents.push({
          ...events,
          ...update
        });
        res.status(204).send();
      }
    }
  });

  return app.listen(3000);
};
