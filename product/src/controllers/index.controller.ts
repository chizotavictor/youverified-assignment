/* eslint-disable class-methods-use-this */
import express from 'express';
import productService from '@src/services/product.service';

class IndexController {
  /**
   * List all products
   * @param req any
   * @param res any
   */
  async listProducts(req: express.Request, res: express.Response) {
    const products = await productService.getAll();
    res.status(200).json({ items: products });
  }

  /**
   * Get product by id
   * @param req id
   * @param res any
   */
  async getProductById(req: express.Request, res: express.Response) {
    const product = await productService.getById(req.params.id);
    res.status(200).json({ item: product });
  }
}
export default new IndexController();
