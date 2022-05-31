import mongooseServices from '@src/services/mongoose.service';

const { Schema } = mongooseServices.getMongoose();
const CustomerSchema = new Schema({
  email: String,
  name: String,
});

const CustomerModel = mongooseServices.getMongoose().model('Customers', CustomerSchema);

export default CustomerModel;
