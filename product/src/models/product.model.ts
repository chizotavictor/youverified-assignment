/* eslint-disable import/no-unresolved */
import mongooseServices from '@src/services/mongoose.service';

const { Schema } = mongooseServices.getMongoose();
const ProductSchema = new Schema({
  name: String,
});

const ProductModel = mongooseServices.getMongoose().model('Products', ProductSchema);

export default ProductModel;
