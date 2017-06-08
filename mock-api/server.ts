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

const createUpdateById = (idName: string, collection: {id: string}[]) =>
  (req: express.Request, res: express.Response) => {
    const idToUpdate = req.params[idName]
    const eventsIndex = collection.findIndex(({id}) => id === idToUpdate);

    if (eventsIndex === -1) res.status(404).send(`event with id: ${idToUpdate} does not exist`);
    else {
      const update = req.body;
      if (idToUpdate !== update.id) res.status(400).send(`cannot modify the id`);
      else {
        const events = collection.splice(eventsIndex, 1)[0];
        collection.push({
          ...events,
          ...update
        });
        res.status(204).send();
      }
    }
  }

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

  app.put('/events/:appId', createUpdateById('appId', instanceEvents));
  app.put('/app/:appId', createUpdateById('appId', instanceApps));

  return app.listen(3000);
};
