// package: script
// file: script.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as script_pb from "./script_pb";

interface IOrderPaymentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOrderPayment: IOrderPaymentServiceService_ICreateOrderPayment;
}

interface IOrderPaymentServiceService_ICreateOrderPayment extends grpc.MethodDefinition<script_pb.OrderPaymentRequest, script_pb.OrderPaymentResponse> {
    path: "/script.OrderPaymentService/CreateOrderPayment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<script_pb.OrderPaymentRequest>;
    requestDeserialize: grpc.deserialize<script_pb.OrderPaymentRequest>;
    responseSerialize: grpc.serialize<script_pb.OrderPaymentResponse>;
    responseDeserialize: grpc.deserialize<script_pb.OrderPaymentResponse>;
}

export const OrderPaymentServiceService: IOrderPaymentServiceService;

export interface IOrderPaymentServiceServer {
    createOrderPayment: grpc.handleUnaryCall<script_pb.OrderPaymentRequest, script_pb.OrderPaymentResponse>;
}

export interface IOrderPaymentServiceClient {
    createOrderPayment(request: script_pb.OrderPaymentRequest, callback: (error: grpc.ServiceError | null, response: script_pb.OrderPaymentResponse) => void): grpc.ClientUnaryCall;
    createOrderPayment(request: script_pb.OrderPaymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: script_pb.OrderPaymentResponse) => void): grpc.ClientUnaryCall;
    createOrderPayment(request: script_pb.OrderPaymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: script_pb.OrderPaymentResponse) => void): grpc.ClientUnaryCall;
}

export class OrderPaymentServiceClient extends grpc.Client implements IOrderPaymentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createOrderPayment(request: script_pb.OrderPaymentRequest, callback: (error: grpc.ServiceError | null, response: script_pb.OrderPaymentResponse) => void): grpc.ClientUnaryCall;
    public createOrderPayment(request: script_pb.OrderPaymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: script_pb.OrderPaymentResponse) => void): grpc.ClientUnaryCall;
    public createOrderPayment(request: script_pb.OrderPaymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: script_pb.OrderPaymentResponse) => void): grpc.ClientUnaryCall;
}
