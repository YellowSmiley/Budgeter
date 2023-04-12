import { createChannel, FetchTransport, createClient } from "nice-grpc-web";
import { GreeterClient, GreeterDefinition } from "../../../protos/greet";

const channel = createChannel("https://localhost:7234", FetchTransport());

const client: GreeterClient = createClient(GreeterDefinition, channel);

export const sayHello = async () => {
  const response = await client.sayHello({ name: "John" });
  return response.message;
};
