import { useEffect, useState } from "react";
import {
  getTransaction,
  listTransactions,
} from "./services/transaction-service";
import { Transaction } from "../../protos/transaction";

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchData = async () => {
    try {
      const res = await listTransactions();
      setTransactions(res);
      // const res = await getTransaction("64257438796887314eef6970");
      // if (res) {
      //   setTransactions([res]);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Person</th>
            <th>Day</th>
            <th>Bank</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.personId}</td>
              <td>{transaction.date}</td>
              <td>{transaction.bank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
