/* eslint-disable class-methods-use-this */
import express from 'express';
import paymentService from '@src/services/payment.service';

class IndexController {
  /**
   * Get all paid transactions
   * @param req any
   * @param res any
   */
  async getAllPayments(req: express.Request, res: express.Response) {
    const payments = await paymentService.getAll();
    res.status(200).json({ results: payments });
  }

  /**
   * Get payment by Id
   * @param req id
   * @param res any
   */
  async getPaymentById(req: express.Request, res: express.Response) {
    const payment = await paymentService.getById(req.params.id);
    if (!payment) res.status(200).json({ result: {} });
    res.status(200).json({ result: payment });
  }

  /**
   * Process payment by Id
   * @param req id
   * @param res any
   */
  async processPayment(req: express.Request, res: express.Response) {
    await paymentService.update(req.params.id, { status: 'Completed' });
    const payment = await paymentService.getById(req.params.id);
    res.status(200).json({ result: payment });
  }
}
export default new IndexController();
