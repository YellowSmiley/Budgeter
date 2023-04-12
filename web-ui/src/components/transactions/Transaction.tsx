import { useNavigate, useParams } from "react-router-dom";
import { Paths } from "../app-router/paths";
import PageHeader from "../shared/page-header/PageHeader";
import { useState, useEffect } from "react";
import {
  getTransaction,
  updateTransaction,
} from "./services/transaction-service";
import { Transaction as ITransaction } from "../../protos/transaction";
import Loading from "../shared/loading/Loading";

const Transaction = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState<ITransaction>();
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      if (!id) {
        throw new Error("No ID provided");
      }
      const res = await getTransaction(id);
      setTransaction(res);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Transaction">
      <PageHeader text="Transaction" path={Paths.Transactions} />
      {loading ? (
        <Loading />
      ) : (
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={transaction?.name}
              onChange={(e) => {
                if (transaction) {
                  transaction.name = e.target.value;
                  setTransaction(transaction);
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={transaction?.amount}
              onChange={(e) => {
                if (transaction) {
                  transaction.amount = parseInt(e.target.value);
                  setTransaction(transaction);
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="person">Person</label>
            <input
              type="text"
              id="person"
              value={transaction?.personId}
              onChange={(e) => {
                if (transaction) {
                  transaction.personId = e.target.value;
                  setTransaction(transaction);
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="day">Day</label>
            <input
              type="number"
              id="day"
              value={transaction?.date}
              onChange={(e) => {
                if (transaction) {
                  transaction.date = e.target.value;
                  setTransaction(transaction);
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="bank">Bank</label>
            <input
              type="text"
              id="bank"
              value={transaction?.bank}
              onChange={(e) => {
                if (transaction) {
                  transaction.bank = e.target.value;
                  setTransaction(transaction);
                }
              }}
            />
          </div>
          <button
            disabled={saving}
            onClick={async (e) => {
              try {
                e.preventDefault();
                setSaving(true);
                if (transaction) {
                  await updateTransaction(transaction);
                }
                navigate(Paths.Transactions);
              } catch (error) {
                console.error(error);
              } finally {
                setSaving(false);
              }
            }}
          >
            {saving ? <Loading /> : "Save"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Transaction;
