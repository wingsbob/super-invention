import * as express from 'express';

export default () => {
  const app = express();

  app.get('/apps/:clientId', (req, res) => {
    const {clientId} = req.params;
  });

  return app.listen(3000);
};
