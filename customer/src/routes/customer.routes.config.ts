import express from 'express';
import { CommonRoutesConfig } from '@src/routes/common.routes.config';
import IndexController from '@src/controllers/index.controller';

export class CustomerRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'CustomerRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('/customers').get(IndexController.listCustomers);
    this.app.route('/customers/:id').get(IndexController.getCustomerById);
    return this.app;
  }
}
