# Budgeter

Budgeter is a simple budgeting app that allows you to track your spending and income.

The WebService is written in C# and uses .NET framework 6, Google Protobuf, Grpc, Grpc Core and Grpc Tools. It uses MongoDB as a database.

The web-ui client is written in TypeScript and uses React 18, Node 18, ts-proto and nice-grpc and was bootstrapped with Vite react-ts template.

## Getting Started

Run build on the WebService project to generate relevant files from the `.proto` files in `./Protos`.

Run/Debug the WebService project, to start the BE.

Run `npm install` and `npm run dev` in the `./web-ui` directory to start the web-ui client.

See the `./web-ui/README.md` for more information.
