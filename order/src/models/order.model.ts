/* eslint-disable import/no-unresolved */
import mongooseServices from '@src/services/mongoose.service';

const { Schema } = mongooseServices.getMongoose();
const OrderSchema = new Schema({
  customerId: String,
  amount: String,
  productId: String,
  orderStatus: String,
});

const OrderModel = mongooseServices.getMongoose().model('Orders', OrderSchema);

export default OrderModel;
