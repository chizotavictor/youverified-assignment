/* eslint-disable class-methods-use-this */
import express from 'express';
import customerService from '@src/services/customer.service';

class IndexController {
  /**
   * List all customers
   * @param req any
   * @param res any
   */
  async listCustomers(req: express.Request, res: express.Response) {
    const customers = await customerService.getAll();
    res.status(200).json({ users: customers });
  }

  /**
   * Get customer by id
   * @param req id
   * @param res any
   */
  async getCustomerById(req: express.Request, res: express.Response) {
    const customer = await customerService.getById(req.params.id);
    res.status(200).json({ user: customer });
  }
}
export default new IndexController();
