import express from 'express';
import { CommonRoutesConfig } from '@src/routes/common.routes.config';
import IndexController from '@src/controllers/index.controller';

export class ProductRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'ProductRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('/products').get(IndexController.listProducts);
    this.app.route('/products/:id').get(IndexController.getProductById);
    return this.app;
  }
}
