import dotenv from 'dotenv-safe';
import express from 'express';
import bodyParser from 'body-parser';
import { CommonRoutesConfig } from '@src/routes/common.routes.config';
import { OrderRoutes } from '@src/routes/order.routes.config';

dotenv.config({
  allowEmptyValues: true,
});

const app = express();
const port = process.env.APP_PORT || 5000;
const routes: Array<CommonRoutesConfig> = [];

app.use(bodyParser.json());

routes.push(new OrderRoutes(app));

app.get('/', (req, res) => {
  res.json({ health: 'good!' });
});

app.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    console.log(`Routes configured for ${route.getName()}`);
  });

  console.log(`Server running at http://localhost:${port}`);
});
