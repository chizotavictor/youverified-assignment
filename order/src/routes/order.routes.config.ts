import express from 'express';
import { CommonRoutesConfig } from '@src/routes/common.routes.config';
import IndexController from '@src/controllers/index.controller';

export class OrderRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'OrderRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('/orders').get(IndexController.listOrders);
    this.app.route('/orders').post(IndexController.createOrder);
    this.app.route('/orders/:id').get(IndexController.getOrderById);
    return this.app;
  }
}
