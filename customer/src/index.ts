import dotenv from 'dotenv-safe';
import express from 'express';
import { CommonRoutesConfig } from '@src/routes/common.routes.config';
import { CustomerRoutes } from '@src/routes/customer.routes.config';

dotenv.config({
  allowEmptyValues: true,
});

const app = express();
const port = process.env.APP_PORT || 5000;
const routes: Array<CommonRoutesConfig> = [];

routes.push(new CustomerRoutes(app));

app.get('/', (req, res) => {
  res.json({ health: 'good!' });
});

app.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    console.log(`Routes configured for ${route.getName()}`);
  });

  console.log(`Server running at http://localhost:${port}`);
});
