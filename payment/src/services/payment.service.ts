/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
import { CreateOrderPayment } from '@src/schema/payment.schema';
import PaymentModel from '@src/models/payment.model';

class PaymentService {
  async create(userFields: CreateOrderPayment) {
    await PaymentModel.create(userFields);
  }

  async getById(id: any) {
    return await PaymentModel.findById(id).catch(() => null);
  }

  async getAll() {
    return await PaymentModel.find({});
  }
}

export default new PaymentService();
