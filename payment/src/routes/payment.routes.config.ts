import express from 'express';
import { CommonRoutesConfig } from '@src/routes/common.routes.config';
import IndexController from '@src/controllers/index.controller';

export class PaymentRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'PaymentRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('/payments/').get(IndexController.getAllPayments);
    this.app.route('/payments/:id').get(IndexController.getPaymentById);
    this.app.route('/payments/:id/process').post(IndexController.processPayment);
    return this.app;
  }
}
