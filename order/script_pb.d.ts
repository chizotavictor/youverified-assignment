// package: script
// file: script.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OrderPaymentPayload extends jspb.Message { 
    getCustomerid(): string;
    setCustomerid(value: string): OrderPaymentPayload;
    getOrderid(): string;
    setOrderid(value: string): OrderPaymentPayload;
    getAmount(): string;
    setAmount(value: string): OrderPaymentPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderPaymentPayload.AsObject;
    static toObject(includeInstance: boolean, msg: OrderPaymentPayload): OrderPaymentPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderPaymentPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderPaymentPayload;
    static deserializeBinaryFromReader(message: OrderPaymentPayload, reader: jspb.BinaryReader): OrderPaymentPayload;
}

export namespace OrderPaymentPayload {
    export type AsObject = {
        customerid: string,
        orderid: string,
        amount: string,
    }
}

export class OrderPaymentRequest extends jspb.Message { 
    getCustomerid(): string;
    setCustomerid(value: string): OrderPaymentRequest;
    getOrderid(): string;
    setOrderid(value: string): OrderPaymentRequest;
    getAmount(): string;
    setAmount(value: string): OrderPaymentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderPaymentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderPaymentRequest): OrderPaymentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderPaymentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderPaymentRequest;
    static deserializeBinaryFromReader(message: OrderPaymentRequest, reader: jspb.BinaryReader): OrderPaymentRequest;
}

export namespace OrderPaymentRequest {
    export type AsObject = {
        customerid: string,
        orderid: string,
        amount: string,
    }
}

export class OrderPaymentResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): OrderPaymentResponse;
    getMessage(): string;
    setMessage(value: string): OrderPaymentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderPaymentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderPaymentResponse): OrderPaymentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderPaymentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderPaymentResponse;
    static deserializeBinaryFromReader(message: OrderPaymentResponse, reader: jspb.BinaryReader): OrderPaymentResponse;
}

export namespace OrderPaymentResponse {
    export type AsObject = {
        status: string,
        message: string,
    }
}
