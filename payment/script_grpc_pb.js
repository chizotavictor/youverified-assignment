// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var script_pb = require('./script_pb.js');

function serialize_script_OrderPaymentRequest(arg) {
  if (!(arg instanceof script_pb.OrderPaymentRequest)) {
    throw new Error('Expected argument of type script.OrderPaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_script_OrderPaymentRequest(buffer_arg) {
  return script_pb.OrderPaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_script_OrderPaymentResponse(arg) {
  if (!(arg instanceof script_pb.OrderPaymentResponse)) {
    throw new Error('Expected argument of type script.OrderPaymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_script_OrderPaymentResponse(buffer_arg) {
  return script_pb.OrderPaymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderPaymentServiceService = exports.OrderPaymentServiceService = {
  createOrderPayment: {
    path: '/script.OrderPaymentService/CreateOrderPayment',
    requestStream: false,
    responseStream: false,
    requestType: script_pb.OrderPaymentRequest,
    responseType: script_pb.OrderPaymentResponse,
    requestSerialize: serialize_script_OrderPaymentRequest,
    requestDeserialize: deserialize_script_OrderPaymentRequest,
    responseSerialize: serialize_script_OrderPaymentResponse,
    responseDeserialize: deserialize_script_OrderPaymentResponse,
  },
};

exports.OrderPaymentServiceClient = grpc.makeGenericClientConstructor(OrderPaymentServiceService);
