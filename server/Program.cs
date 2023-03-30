using Grpc.Core;

namespace server
{
    class Program
    {
        const int Port = 50052;

        static void Main(string[] args)
        {
            Server server = null;

            try
            {
                server = new Server()
                {
                    Services = { TransactionService.}
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}