/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
import { CreateCustomer } from '@src/schema/customer.schema';
import CustomerModel from '@src/models/customer.model';

class CustomerService {
  async create(userFields: CreateCustomer) {
    await CustomerModel.create(userFields);
  }

  async getById(id: any) {
    return await CustomerModel.findById(id);
  }

  async getAll() {
    return await CustomerModel.find({});
  }
}

export default new CustomerService();
