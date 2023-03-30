using Grpc.Core;
using System;
using System.Threading.Tasks;
using Transaction;

namespace client
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Channel channel = new Channel("localhost", 50052, ChannelCredentials.Insecure);

            await channel.ConnectAsync().ContinueWith((task) =>
            {
                if (task.Status == TaskStatus.RanToCompletion)
                    Console.WriteLine("The client connected successfully");
            });

            var client = new TransactionService.TransactionServiceClient(channel);

            var newTransaction = CreateTransaction(client);

            DeleteTransaction(client, newTransaction);
            //UpdateTransaction(client, newTransaction);

            channel.ShutdownAsync().Wait();
            Console.ReadKey();
        }

        private static Transaction.Transaction CreateTransaction(TransactionService.TransactionServiceClient client)
        {
            var response = client.CreateTransaction(new CreateTransactionRequest()
            {
                Transaction = new Transaction.Transaction()
                {
                    Amount = 1000.00,
                    Bank = "Nationwide",
                    Date = "1",
                    Name = "Income",
                    PersonId = "Mike"
                }
            });

            Console.WriteLine("The transaction " + response.Transaction.Id + " was created!");

            return response.Transaction;
        }

        private static void ReadTransaction(TransactionService.TransactionServiceClient client)
        {
            try
            {
                var response = client.ReadTransaction(new ReadTransactionRequest()
                {
                    TransactionId = "64257438796887314eef6970"
                });

                Console.WriteLine(response.Transaction.ToString());

            }
            catch (RpcException e)
            {
                Console.WriteLine(e.Status.Detail);
            }
        }

        private static void UpdateTransaction(TransactionService.TransactionServiceClient client, Transaction.Transaction transaction)
        {
            try
            {
                transaction.Amount = 2000.00;

                var response = client.UpdateTransaction(new UpdateTransactionRequest()
                {
                    Transaction = transaction
                });

                Console.WriteLine(response.Transaction.ToString());
            }
            catch (RpcException e)
            {
                Console.WriteLine(e.Status.Detail);
            }
        }

        private static void DeleteTransaction(TransactionService.TransactionServiceClient client, Transaction.Transaction transaction)
        {
            try
            {
                var response = client.DeleteTransaction(new DeleteTransactionRequest() { TransactionId = transaction.Id });

                Console.WriteLine("The transaction " + response.TransactionId + " was deleted!");
            }
            catch (RpcException e)
            {
                Console.WriteLine(e.Status.Detail);
            }
        }
    }
}
