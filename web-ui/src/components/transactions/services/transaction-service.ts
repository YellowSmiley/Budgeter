import { ChannelCredentials, createChannel, createClient } from "nice-grpc";
import {
  Transaction,
  TransactionServiceClient,
  TransactionServiceDefinition,
} from "../../../protos/transaction";
//
// const getConnection = () => {
const channel = createChannel(
  "localhost:50052",
  ChannelCredentials.createInsecure()
);

const client: TransactionServiceClient = createClient(
  TransactionServiceDefinition,
  channel
);
//   return { channel, client };
// };

export const createTransaction = async (transaction: Transaction) => {
  // const { channel, client } = getConnection();
  const response = await client.createTransaction({ transaction });
  // channel.close();
  return response.transaction;
};

export const getTransaction = async (transactionId: string) => {
  // const { channel, client } = getConnection();
  const response = await client.readTransaction({ transactionId });
  // channel.close();
  return response.transaction;
};

export const updateTransaction = async (transaction: Transaction) => {
  // const { channel, client } = getConnection();
  const response = await client.updateTransaction({ transaction });
  // channel.close();
  return response.transaction;
};

export const deleteTransaction = async (transactionId: string) => {
  // const { channel, client } = getConnection();
  const response = await client.deleteTransaction({ transactionId });
  // channel.close();
  return response.transactionId;
};

export const listTransactions = async () => {
  // const { channel, client } = getConnection();
  // const response = await client.listTransactions({});
  const response: Transaction[] = [];
  for await (const res of client.listTransactions({})) {
    if (res.transaction) {
      response.push(res.transaction);
    }
  }
  // channel.close();
  return response;
};
