import { FetchTransport, createChannel, createClient } from "nice-grpc-web";
import {
  TransactorClient,
  TransactorDefinition,
  Transaction,
} from "../../protos/transaction";

const channel = createChannel("https://localhost:7234", FetchTransport());

const client: TransactorClient = createClient(TransactorDefinition, channel);

export const createTransaction = async (transaction: Transaction) => {
  const response = await client.createTransaction({ transaction });
  return response.transaction;
};

export const getTransaction = async (transactionId: string) => {
  const response = await client.readTransaction({ transactionId });
  return response.transaction;
};

export const updateTransaction = async (transaction: Transaction) => {
  const response = await client.updateTransaction({ transaction });
  return response.transaction;
};

export const deleteTransaction = async (transactionId: string) => {
  const response = await client.deleteTransaction({ transactionId });
  return response.transactionId;
};

export const listTransactions = async () => {
  const response: Transaction[] = [];
  for await (const res of client.listTransactions({})) {
    if (res.transaction) {
      response.push(res.transaction);
    }
  }
  return response;
};
