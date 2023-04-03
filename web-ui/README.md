# Budgeter - Web-UI Client

Budgeter is a simple budgeting app that allows you to track your spending and income.

The web-ui client is written in TypeScript and uses React 18, Node 18, ts-proto and nice-grpc and was bootstrapped with Vite react-ts template.

## Getting Started

### Prerequisites

Run `npm install`

Get [protoc](https://github.com/protocolbuffers/protobuf/releases) and add it to your PATH.

### Usage

Run `npm run dev` to start the web-ui client.

Run the following in PowerShell, from the `../Budgeter` directory, to generate `.ts` files from the `.proto` files, in `./protos`:

```
protoc --plugin=protoc-gen-ts_proto=.\web-ui\node_modules\.bin\protoc-gen-ts_proto.cmd --ts_proto_out=./web-ui/src/protos --ts_proto_opt="outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false" --proto_path=./protos/ ./protos/transaction.proto
```
