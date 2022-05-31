import mongooseServices from '@src/services/mongoose.service';

const { Schema } = mongooseServices.getMongoose();
const PaymentSchema = new Schema({
  customerId: String,
  orderId: String,
  amount: String,
  status: String,
});

const PaymentModel = mongooseServices.getMongoose().model('Payments', PaymentSchema);

export default PaymentModel;
