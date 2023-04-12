import { useEffect, useState } from "react";
import { listTransactions } from "./services/transaction-service";
import { Transaction } from "../../protos/transaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPlusSquare,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { generatePath, useNavigate } from "react-router-dom";
import { Paths } from "../app-router/paths";

import "./styles/Transactions.scss";
import PageHeader from "../shared/page-header/PageHeader";

const Transactions = () => {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await listTransactions();
      setTransactions(res);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Transactions">
      <PageHeader text="Transactions" />
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Person</th>
            <th>Day</th>
            <th>Bank</th>
            <th>
              <button
                className="primary"
                onClick={() => {
                  navigate(generatePath(Paths.Transaction, { id: "" }));
                }}
              >
                <FontAwesomeIcon icon={faPlusSquare} />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={7}>Loading...</td>
            </tr>
          ) : (
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.name}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.personId}</td>
                <td>{transaction.date}</td>
                <td>{transaction.bank}</td>
                <td>
                  <button
                    className="primary"
                    onClick={() => {
                      navigate(
                        generatePath(Paths.Transaction, { id: transaction.id })
                      );
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    className="danger"
                    onClick={() => {
                      // TODO
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
