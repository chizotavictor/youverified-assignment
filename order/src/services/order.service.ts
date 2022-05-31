/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
import { CreateOrder } from '@src/schema/order.schema';
import OrderModel from '@src/models/order.model';

class OrderService {
  async create(userFields: CreateOrder) {
    const order = await OrderModel.create(userFields);
    return order;
  }

  async getById(id: any) {
    return await OrderModel.findById(id).catch(() => null);
  }

  async getAll() {
    return await OrderModel.find({});
  }

  async update(id, payload: any) {
    return await OrderModel.updateOne({ _id: id }, payload);
  }

  async isExists(id: any) {
    const item = await this.getById(id);
    // eslint-disable-next-line no-unneeded-ternary
    return item ? true : false;
  }
}

export default new OrderService();
