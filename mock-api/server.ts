import * as express from 'express';
import clients from './clients';

export default () => {
  const app = express();

  app.get('/clients', (req, res) => {
    res.json(clients);
  });

  return app.listen(3000);
};
