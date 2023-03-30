using Grpc.Core;
using System;
using System.IO;
using Transaction;

namespace server
{
    internal class Program
    {
        const int Port = 50052;

        static void Main(string[] args)
        {
            Server server = null;

            try
            {
                server = new Server()
                {
                    Services = { TransactionService.BindService(new TransactionServiceImpl())},
                    Ports = { new ServerPort("localhost", Port, SslServerCredentials.Insecure) }
                };

                server.Start();
                Console.WriteLine("The server is listening on the port: " + Port);
                Console.ReadKey();
            }
            catch (IOException e)
            {
                Console.WriteLine("The server failed to start: " + e.Message);
                throw;
            }
            finally
            {
                if (server != null) 
                    server.ShutdownAsync().Wait();
            }
        }
    }
}
