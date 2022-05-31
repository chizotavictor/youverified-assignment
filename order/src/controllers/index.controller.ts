/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-named-as-default */
/* eslint-disable class-methods-use-this */
import express from 'express';
import OrderService from '@src/services/order.service';
import { CreateOrder } from '@src/schema/order.schema';
import GrpcCreateOrderPayment from '../../client';

class IndexController {
  /**
   * List all orders
   * @param req any
   * @param res express.Request
   */
  async listOrders(req: express.Request, res: express.Response) {
    const orders = await OrderService.getAll();
    res.status(200).json({ items: orders });
  }

  /**
   * Create orders & forward GRPC CreateOrderPayment
   * to Payment Service.
   * @param req express.Request
   * @param res express.Response
   */
  async createOrder(req: express.Request, res: express.Response) {
    const payload: CreateOrder = req.body;
    payload.orderStatus = 'Pending';
    const order = await OrderService.create(payload);
    if (order !== undefined) {
      GrpcCreateOrderPayment(order.customerId, order.id, order.amount);
    }
    res.status(200).json({ item: order, message: 'Order created successfully' });
  }

  /**
   * Get Order by Id
   * @param req id
   * @param res express.Response
   */
  async getOrderById(req: express.Request, res: express.Response) {
    const order = await OrderService.getById(req.params.id);
    if (!order) res.status(200).json({ item: {} });
    res.status(200).json({ item: order });
  }
}
export default new IndexController();
