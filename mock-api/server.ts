import * as express from 'express';
import * as bodyParser from 'body-parser';
import configs from './configs';
import {IConfig} from './configs';
import clients from './clients';
import apps from './apps';
import {IApp} from './apps';
import events from './events';
import {IEvents} from './events';

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
  };

const deepCloneObject = <T>(obj:T) : T =>
  JSON.parse(JSON.stringify(obj));

export default () => {
  const instanceClients = deepCloneObject(clients);
  const instanceApps = deepCloneObject(apps);
  const instanceEvents = deepCloneObject(events);
  const instanceConfigs = deepCloneObject(configs);
  const app = express();

  app.use(bodyParser.json());
  app.get('/apps', (req, res) => res.json(instanceApps));
  app.get('/clients', (req, res) => res.json(instanceClients));

  app.get('/client/:clientId', createGetById('clientId', instanceClients))
  app.get('/app/:appId', createGetById('appId', instanceApps));
  app.get('/events/:appId', createGetById('appId', instanceEvents));
  app.get('/config/:clientId', (req, res) => {
    const {clientId} = req.params;

    if (instanceConfigs[clientId]) res.json(instanceConfigs[clientId]);
    else res.status(404).send();
  });

  app.put('/events/:appId', createUpdateById('appId', instanceEvents));
  app.put('/app/:appId', createUpdateById('appId', instanceApps));
  app.put('/deploy/:clientId', (req, res) => {
    const {clientId} = req.params;
    const client = instanceClients.find(({id}) => id === clientId);

    if (!client) res.status(404).send(`Client with id: ${clientId} does not exist`);
    else {
      const config: IConfig = {
        ...client,
        apps: client.apps.map(appId => {
          const app = <IApp>instanceApps.find(({id}) => id === appId);
          const events = <IEvents>instanceEvents.find(({id}) => id === appId);

          return {
            ...app,
            events
          }
        })
      };

      instanceConfigs[clientId] = config;
      res.status(204).send();
    }
  });

  return app.listen(3000);
};
