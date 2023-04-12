/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "transaction";

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  personId: string;
  date: string;
  bank: string;
}

export interface CreateTransactionRequest {
  transaction: Transaction | undefined;
}

export interface CreateTransactionResponse {
  transaction: Transaction | undefined;
}

export interface ReadTransactionRequest {
  transactionId: string;
}

export interface ReadTransactionResponse {
  transaction: Transaction | undefined;
}

export interface UpdateTransactionRequest {
  transaction: Transaction | undefined;
}

export interface UpdateTransactionResponse {
  transaction: Transaction | undefined;
}

export interface DeleteTransactionRequest {
  transactionId: string;
}

export interface DeleteTransactionResponse {
  transactionId: string;
}

export interface ListTransactionRequest {
}

export interface ListTransactionResponse {
  transaction: Transaction | undefined;
}

function createBaseTransaction(): Transaction {
  return { id: "", name: "", amount: 0, personId: "", date: "", bank: "" };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.amount !== 0) {
      writer.uint32(25).double(message.amount);
    }
    if (message.personId !== "") {
      writer.uint32(34).string(message.personId);
    }
    if (message.date !== "") {
      writer.uint32(42).string(message.date);
    }
    if (message.bank !== "") {
      writer.uint32(50).string(message.bank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.amount = reader.double();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.personId = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.date = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.bank = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      personId: isSet(object.personId) ? String(object.personId) : "",
      date: isSet(object.date) ? String(object.date) : "",
      bank: isSet(object.bank) ? String(object.bank) : "",
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.amount !== undefined && (obj.amount = message.amount);
    message.personId !== undefined && (obj.personId = message.personId);
    message.date !== undefined && (obj.date = message.date);
    message.bank !== undefined && (obj.bank = message.bank);
    return obj;
  },

  create(base?: DeepPartial<Transaction>): Transaction {
    return Transaction.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Transaction>): Transaction {
    const message = createBaseTransaction();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.amount = object.amount ?? 0;
    message.personId = object.personId ?? "";
    message.date = object.date ?? "";
    message.bank = object.bank ?? "";
    return message;
  },
};

function createBaseCreateTransactionRequest(): CreateTransactionRequest {
  return { transaction: undefined };
}

export const CreateTransactionRequest = {
  encode(message: CreateTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      Transaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transaction = Transaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTransactionRequest {
    return { transaction: isSet(object.transaction) ? Transaction.fromJSON(object.transaction) : undefined };
  },

  toJSON(message: CreateTransactionRequest): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction ? Transaction.toJSON(message.transaction) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreateTransactionRequest>): CreateTransactionRequest {
    return CreateTransactionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateTransactionRequest>): CreateTransactionRequest {
    const message = createBaseCreateTransactionRequest();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? Transaction.fromPartial(object.transaction)
      : undefined;
    return message;
  },
};

function createBaseCreateTransactionResponse(): CreateTransactionResponse {
  return { transaction: undefined };
}

export const CreateTransactionResponse = {
  encode(message: CreateTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      Transaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transaction = Transaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTransactionResponse {
    return { transaction: isSet(object.transaction) ? Transaction.fromJSON(object.transaction) : undefined };
  },

  toJSON(message: CreateTransactionResponse): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction ? Transaction.toJSON(message.transaction) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreateTransactionResponse>): CreateTransactionResponse {
    return CreateTransactionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateTransactionResponse>): CreateTransactionResponse {
    const message = createBaseCreateTransactionResponse();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? Transaction.fromPartial(object.transaction)
      : undefined;
    return message;
  },
};

function createBaseReadTransactionRequest(): ReadTransactionRequest {
  return { transactionId: "" };
}

export const ReadTransactionRequest = {
  encode(message: ReadTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== "") {
      writer.uint32(10).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transactionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadTransactionRequest {
    return { transactionId: isSet(object.transactionId) ? String(object.transactionId) : "" };
  },

  toJSON(message: ReadTransactionRequest): unknown {
    const obj: any = {};
    message.transactionId !== undefined && (obj.transactionId = message.transactionId);
    return obj;
  },

  create(base?: DeepPartial<ReadTransactionRequest>): ReadTransactionRequest {
    return ReadTransactionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ReadTransactionRequest>): ReadTransactionRequest {
    const message = createBaseReadTransactionRequest();
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

function createBaseReadTransactionResponse(): ReadTransactionResponse {
  return { transaction: undefined };
}

export const ReadTransactionResponse = {
  encode(message: ReadTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      Transaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transaction = Transaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadTransactionResponse {
    return { transaction: isSet(object.transaction) ? Transaction.fromJSON(object.transaction) : undefined };
  },

  toJSON(message: ReadTransactionResponse): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction ? Transaction.toJSON(message.transaction) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ReadTransactionResponse>): ReadTransactionResponse {
    return ReadTransactionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ReadTransactionResponse>): ReadTransactionResponse {
    const message = createBaseReadTransactionResponse();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? Transaction.fromPartial(object.transaction)
      : undefined;
    return message;
  },
};

function createBaseUpdateTransactionRequest(): UpdateTransactionRequest {
  return { transaction: undefined };
}

export const UpdateTransactionRequest = {
  encode(message: UpdateTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      Transaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transaction = Transaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTransactionRequest {
    return { transaction: isSet(object.transaction) ? Transaction.fromJSON(object.transaction) : undefined };
  },

  toJSON(message: UpdateTransactionRequest): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction ? Transaction.toJSON(message.transaction) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdateTransactionRequest>): UpdateTransactionRequest {
    return UpdateTransactionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateTransactionRequest>): UpdateTransactionRequest {
    const message = createBaseUpdateTransactionRequest();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? Transaction.fromPartial(object.transaction)
      : undefined;
    return message;
  },
};

function createBaseUpdateTransactionResponse(): UpdateTransactionResponse {
  return { transaction: undefined };
}

export const UpdateTransactionResponse = {
  encode(message: UpdateTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      Transaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transaction = Transaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTransactionResponse {
    return { transaction: isSet(object.transaction) ? Transaction.fromJSON(object.transaction) : undefined };
  },

  toJSON(message: UpdateTransactionResponse): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction ? Transaction.toJSON(message.transaction) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdateTransactionResponse>): UpdateTransactionResponse {
    return UpdateTransactionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateTransactionResponse>): UpdateTransactionResponse {
    const message = createBaseUpdateTransactionResponse();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? Transaction.fromPartial(object.transaction)
      : undefined;
    return message;
  },
};

function createBaseDeleteTransactionRequest(): DeleteTransactionRequest {
  return { transactionId: "" };
}

export const DeleteTransactionRequest = {
  encode(message: DeleteTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== "") {
      writer.uint32(10).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transactionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTransactionRequest {
    return { transactionId: isSet(object.transactionId) ? String(object.transactionId) : "" };
  },

  toJSON(message: DeleteTransactionRequest): unknown {
    const obj: any = {};
    message.transactionId !== undefined && (obj.transactionId = message.transactionId);
    return obj;
  },

  create(base?: DeepPartial<DeleteTransactionRequest>): DeleteTransactionRequest {
    return DeleteTransactionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteTransactionRequest>): DeleteTransactionRequest {
    const message = createBaseDeleteTransactionRequest();
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

function createBaseDeleteTransactionResponse(): DeleteTransactionResponse {
  return { transactionId: "" };
}

export const DeleteTransactionResponse = {
  encode(message: DeleteTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== "") {
      writer.uint32(10).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transactionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTransactionResponse {
    return { transactionId: isSet(object.transactionId) ? String(object.transactionId) : "" };
  },

  toJSON(message: DeleteTransactionResponse): unknown {
    const obj: any = {};
    message.transactionId !== undefined && (obj.transactionId = message.transactionId);
    return obj;
  },

  create(base?: DeepPartial<DeleteTransactionResponse>): DeleteTransactionResponse {
    return DeleteTransactionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteTransactionResponse>): DeleteTransactionResponse {
    const message = createBaseDeleteTransactionResponse();
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

function createBaseListTransactionRequest(): ListTransactionRequest {
  return {};
}

export const ListTransactionRequest = {
  encode(_: ListTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListTransactionRequest {
    return {};
  },

  toJSON(_: ListTransactionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ListTransactionRequest>): ListTransactionRequest {
    return ListTransactionRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<ListTransactionRequest>): ListTransactionRequest {
    const message = createBaseListTransactionRequest();
    return message;
  },
};

function createBaseListTransactionResponse(): ListTransactionResponse {
  return { transaction: undefined };
}

export const ListTransactionResponse = {
  encode(message: ListTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      Transaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transaction = Transaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTransactionResponse {
    return { transaction: isSet(object.transaction) ? Transaction.fromJSON(object.transaction) : undefined };
  },

  toJSON(message: ListTransactionResponse): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction ? Transaction.toJSON(message.transaction) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ListTransactionResponse>): ListTransactionResponse {
    return ListTransactionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListTransactionResponse>): ListTransactionResponse {
    const message = createBaseListTransactionResponse();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? Transaction.fromPartial(object.transaction)
      : undefined;
    return message;
  },
};

export type TransactorDefinition = typeof TransactorDefinition;
export const TransactorDefinition = {
  name: "Transactor",
  fullName: "transaction.Transactor",
  methods: {
    createTransaction: {
      name: "CreateTransaction",
      requestType: CreateTransactionRequest,
      requestStream: false,
      responseType: CreateTransactionResponse,
      responseStream: false,
      options: {},
    },
    readTransaction: {
      name: "ReadTransaction",
      requestType: ReadTransactionRequest,
      requestStream: false,
      responseType: ReadTransactionResponse,
      responseStream: false,
      options: {},
    },
    updateTransaction: {
      name: "UpdateTransaction",
      requestType: UpdateTransactionRequest,
      requestStream: false,
      responseType: UpdateTransactionResponse,
      responseStream: false,
      options: {},
    },
    deleteTransaction: {
      name: "DeleteTransaction",
      requestType: DeleteTransactionRequest,
      requestStream: false,
      responseType: DeleteTransactionResponse,
      responseStream: false,
      options: {},
    },
    listTransactions: {
      name: "ListTransactions",
      requestType: ListTransactionRequest,
      requestStream: false,
      responseType: ListTransactionResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface TransactorServiceImplementation<CallContextExt = {}> {
  createTransaction(
    request: CreateTransactionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateTransactionResponse>>;
  readTransaction(
    request: ReadTransactionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ReadTransactionResponse>>;
  updateTransaction(
    request: UpdateTransactionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UpdateTransactionResponse>>;
  deleteTransaction(
    request: DeleteTransactionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<DeleteTransactionResponse>>;
  listTransactions(
    request: ListTransactionRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<ListTransactionResponse>>;
}

export interface TransactorClient<CallOptionsExt = {}> {
  createTransaction(
    request: DeepPartial<CreateTransactionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateTransactionResponse>;
  readTransaction(
    request: DeepPartial<ReadTransactionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ReadTransactionResponse>;
  updateTransaction(
    request: DeepPartial<UpdateTransactionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UpdateTransactionResponse>;
  deleteTransaction(
    request: DeepPartial<DeleteTransactionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<DeleteTransactionResponse>;
  listTransactions(
    request: DeepPartial<ListTransactionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<ListTransactionResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
