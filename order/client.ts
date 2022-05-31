/* eslint-disable @typescript-eslint/no-explicit-any */
import * as grpc from 'grpc';
import dotenv from 'dotenv-safe';
import { OrderPaymentRequest, OrderPaymentResponse } from './script_pb';
import { OrderPaymentServiceClient } from './script_grpc_pb';
import OrderService from './src/services/order.service';

dotenv.config({
  allowEmptyValues: true,
});

const grpcClient = new OrderPaymentServiceClient(
  `localhost:${process.env.GRPC_PORT}`,
  grpc.credentials.createInsecure()
);

export default function GrpcCreateOrderPayment(customerId: string, orderId: string, amount: string) {
  const payload = new OrderPaymentRequest();
  payload.setCustomerid(customerId);
  payload.setOrderid(orderId);
  payload.setAmount(amount);
  grpcClient.createOrderPayment(payload, (err: any, response: any) => {
    if (err) {
      console.error(err);
      return;
    }
    OrderService.update(orderId, { orderStatus: 'Completed' });
    console.log(response.array);
  });
}
