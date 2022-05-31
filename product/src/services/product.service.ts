/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
import { CreateProduct } from '@src/schema/product.schema';
import ProductModel from '@src/models/product.model';

class ProductService {
  async create(userFields: CreateProduct) {
    await ProductModel.create(userFields);
  }

  async getById(id: any) {
    return await ProductModel.findById(id);
  }

  async getAll() {
    return await ProductModel.find({});
  }

  async update(id, payload: any) {
    return await ProductModel.updateOne({ _id: id }, payload);
  }

  async isExists(id: any) {
    const item = await this.getById(id);
    // eslint-disable-next-line no-unneeded-ternary
    return item ? true : false;
  }
}

export default new ProductService();
