# Budgeter

Budgeter is a simple budgeting app that allows you to track your spending and income.

The server is written in C# and uses .NET framework 4.7.2, Google Protobuf, Grpc, Grpc Core, Grpc Tools and Grpc Reflection.

The console client is written in C# and uses .NET framework 4.7.2, Google Protobuf, Grpc, Grpc Core and Grpc Tools.

The web-ui client is written in TypeScript and uses React 18, Node 18, ts-proto and nice-grpc and was bootstrapped with Vite react-ts template.

## Getting Started

### Prerequisites

Install Google Protobuf, Grpc, Grpc Core, Grpc Tools and Grpc Reflection NuGet packages on the server.

Install Google Protobuf, Grpc, Grpc Core and Grpc Tools NuGet packages on the client.

Install (Envoy)[https://www.envoyproxy.io/docs/envoy/latest/start/quick-start/run-envoy] on your local machine and run it using the envoy-custom.yaml config.

Example command:

```
docker run --rm -it -v "$PWD\:`"/c/code/Budgeter`"" -p '9901:9901' -p '10000:10000' 'envoyproxy/envoy:dev-36f84faa276f2a61aec1d3d05fb74525086186eb' -c '/c/code/Budgeter/envoy-custom.yaml'
```

### Usage

Run build on both the server and client projects to generate `.cs` files from the `.proto` files in `./protos`.

Run/Debug the server project, to start the BE.

Run/Debug the client project, to start the console client.

Run `npm install` and `npm run dev` in the `./web-ui` directory to start the web-ui client.
