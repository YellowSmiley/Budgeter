using Grpc.Core;
using MongoDB.Bson;
using MongoDB.Driver;

namespace WebService.Services
{
    public class TransactionService : Transactor.TransactorBase
    {
        private static MongoClient mongoClient = new MongoClient("mongodb://localhost:27017");
        private static IMongoDatabase mongoDatabase = mongoClient.GetDatabase("mydb");
        private static IMongoCollection<BsonDocument> mongoCollection = mongoDatabase.GetCollection<BsonDocument>("transaction");
        private readonly ILogger<TransactionService> _logger;
        public TransactionService(ILogger<TransactionService> logger)
        {
            _logger = logger;
        }

        public override Task<CreateTransactionResponse> CreateTransaction(CreateTransactionRequest request, ServerCallContext context)
        {
            var transaction = request.Transaction;
            BsonDocument doc = new BsonDocument("name", transaction.Name)
                .Add("person_id", transaction.PersonId)
                .Add("amount", transaction.Amount)
                .Add("date", transaction.Date)
                .Add("bank", transaction.Bank);

            mongoCollection.InsertOne(doc);

            string? id = doc.GetValue("_id").ToString();

            transaction.Id = id;

            return Task.FromResult(new CreateTransactionResponse()
            {
                Transaction = transaction,
            });
        }

        public override Task<ReadTransactionResponse> ReadTransaction(ReadTransactionRequest request, ServerCallContext context)
        {
            var transactionId = request.TransactionId;

            var filter = new FilterDefinitionBuilder<BsonDocument>().Eq("_id", new ObjectId(transactionId));
            var result = mongoCollection.Find(filter).FirstOrDefault();

            if (result == null)
                throw new RpcException(new Status(StatusCode.NotFound, "The transaction id " + transactionId + " wasn't found"));

            Transaction transaction = new Transaction()
            {
                Id = result.GetValue("_id").AsObjectId.ToString(),
                Amount = result.GetValue("amount").AsDouble,
                Bank = result.GetValue("bank").AsString,
                Date = result.GetValue("date").AsString,
                Name = result.GetValue("name").AsString,
                PersonId = result.GetValue("person_id").AsString,
            };

            return Task.FromResult(new ReadTransactionResponse() { Transaction = transaction });
        }

        public override Task<UpdateTransactionResponse> UpdateTransaction(UpdateTransactionRequest request, ServerCallContext context)
        {
            var transactionId = request.Transaction.Id;

            var filter = new FilterDefinitionBuilder<BsonDocument>().Eq("_id", new ObjectId(transactionId));
            var result = mongoCollection.Find(filter).FirstOrDefault();

            if (result == null)
                throw new RpcException(new Status(StatusCode.NotFound, "The transaction id " + transactionId + " wasn't found"));

            var doc = new BsonDocument("name", request.Transaction.Name)
                .Add("person_id", request.Transaction.PersonId)
                .Add("amount", request.Transaction.Amount)
                .Add("date", request.Transaction.Date)
                .Add("bank", request.Transaction.Bank);

            mongoCollection.ReplaceOne(filter, doc);

            Transaction transaction = new Transaction()
            {
                Amount = doc.GetValue("amount").AsDouble,
                Bank = doc.GetValue("bank").AsString,
                Date = doc.GetValue("date").AsString,
                Name = doc.GetValue("name").AsString,
                PersonId = doc.GetValue("person_id").AsString,
            };

            transaction.Id = transactionId;

            return Task.FromResult(new UpdateTransactionResponse() { Transaction = transaction });
        }

        public override Task<DeleteTransactionResponse> DeleteTransaction(DeleteTransactionRequest request, ServerCallContext context)
        {
            var transactionId = request.TransactionId;

            var filter = new FilterDefinitionBuilder<BsonDocument>().Eq("_id", new ObjectId(transactionId));
            var result = mongoCollection.DeleteOne(filter);

            if (result.DeletedCount == 0)
                throw new RpcException(new Status(StatusCode.NotFound, "The transaction id " + transactionId + " wasn't found"));

            return Task.FromResult(new DeleteTransactionResponse()
            {
                TransactionId = transactionId
            });
        }

        public override async Task ListTransactions(ListTransactionRequest request, IServerStreamWriter<ListTransactionResponse> responseStream, ServerCallContext context)
        {
            var filter = new FilterDefinitionBuilder<BsonDocument>().Empty;

            var result = mongoCollection.Find(filter);

            foreach (var item in result.ToList())
            {
                await responseStream.WriteAsync(new ListTransactionResponse()
                {
                    Transaction = new Transaction()
                    {
                        Id = item.GetValue("_id").ToString(),
                        Amount = item.GetValue("amount").ToDouble(),
                        Bank = item.GetValue("bank").ToString(),
                        Date = item.GetValue("date").ToString(),
                        Name = item.GetValue("name").ToString(),
                        PersonId = item.GetValue("person_id").ToString(),
                    }
                });
            }
        }
    }
}
