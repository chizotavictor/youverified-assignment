import client, { Channel, Connection, ConsumeMessage } from 'amqplib';
import dotenv from 'dotenv-safe';
import PaymentService from '@src/services/payment.service';

dotenv.config({
  allowEmptyValues: true,
});

class QueueService {
  queueName = 'PaymentQueue';

  credentials = 'guest:guest';

  public async push2Queue(message: any) {
    const connection: Connection = await client.connect(
      `amqp://${this.credentials}@localhost:${process.env.AMQP_PORT}`
    );
    // Create a channel
    const channel: Channel = await connection.createChannel();
    // Makes the queue available to the client
    await channel.assertQueue(this.queueName);
    // Send a message to the queue
    channel.sendToQueue(this.queueName, Buffer.from(JSON.stringify(message)));
  }

  public async consumeQueue() {
    const consumer =
      (channel: Channel) =>
      async (msg: ConsumeMessage | null): Promise<void> => {
        if (msg) {
          // Display the received message
          const data = JSON.parse(msg.content.toString());
          // Persist data on payment collection
          await PaymentService.create({
            customerId: data.customerid,
            orderId: data.orderid,
            amount: data.amount,
          });
          // Acknowledge the message
          channel.ack(msg);
        }
      };
    const connection: Connection = await client.connect(
      `amqp://${this.credentials}@localhost:${process.env.AMQP_PORT}`
    );
    // Create a channel
    const channel: Channel = await connection.createChannel();
    // Makes the queue available to the client
    await channel.assertQueue(this.queueName);
    // Start the consumer
    await channel.consume(this.queueName, consumer(channel));
  }
}

export default new QueueService();
