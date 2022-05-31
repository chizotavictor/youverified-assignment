/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-destructuring */
/* eslint-disable new-cap */
/* eslint-disable no-new */
/* eslint-disable class-methods-use-this */
import grpc from 'grpc';
import dotenv from 'dotenv-safe';
import QueueService from '@src/queue/queue';
import { IOrderPaymentServiceServer, OrderPaymentServiceService } from '../../script_grpc_pb';
import { OrderPaymentPayload, OrderPaymentRequest, OrderPaymentResponse } from '../../script_pb';

class OrderPaymentService implements IOrderPaymentServiceServer {
  public async createOrderPayment(
    call: grpc.ServerUnaryCall<OrderPaymentRequest>,
    callback: grpc.sendUnaryData<OrderPaymentResponse>
  ): Promise<void> {
    const request = call.request.toObject();
    await QueueService.push2Queue(request);
    const response = new OrderPaymentResponse();
    response.setStatus('1');
    response.setMessage('Order Payment created!');
    callback(null, response);
  }
}

dotenv.config({
  allowEmptyValues: true,
});

const server = new grpc.Server();
server.addService<IOrderPaymentServiceServer>(OrderPaymentServiceService, new OrderPaymentService());
server.bind(`0.0.0.0:${process.env.GRPC_SERVER_PORT}`, grpc.ServerCredentials.createInsecure());
server.start();
console.log('GRPC server started :)');
