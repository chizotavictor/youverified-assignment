import dotenv from 'dotenv-safe';
import express from 'express';
import { CommonRoutesConfig } from '@src/routes/common.routes.config';
import { ProductRoutes } from '@src/routes/product.routes.config';

dotenv.config({
  allowEmptyValues: true,
});

const app = express();
const port = process.env.APP_PORT || 5000;
const routes: Array<CommonRoutesConfig> = [];

routes.push(new ProductRoutes(app));

app.get('/', (req, res) => {
  res.json({ health: 'good!' });
});

app.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    console.log(`Routes configured for ${route.getName()}`);
  });

  console.log(`Server running at http://localhost:${port}`);
});
