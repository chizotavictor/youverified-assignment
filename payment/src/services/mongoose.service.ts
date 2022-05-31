/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';

class MongooseService {
  private count = 0;

  private dbName = 'youverfied';

  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  };

  constructor() {
    this.connectWithRetry();
  }

  getMongoose() {
    return mongoose;
  }

  connectWithRetry = () => {
    console.log('Attempting MongoDB connection (will retry if needed)');
    mongoose
      .connect(`mongodb://localhost:27017/${this.dbName}`, this.mongooseOptions)
      .then(() => {
        console.log('MongoDB is connected');
      })
      .catch(err => {
        const retrySeconds = 5;
        console.log(
          // eslint-disable-next-line no-plusplus
          `MongoDB connection unsuccessful (will retry #${++this.count} after ${retrySeconds} seconds):`,
          err
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
      });
  };
}

export default new MongooseService();
