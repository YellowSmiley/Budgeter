import { useNavigate, useParams } from "react-router-dom";
import { Paths } from "../app-router/paths";
import { useState, useEffect, useMemo } from "react";
import Loading from "../../shared/components/loading/Loading";
import PageHeader from "../../shared/components/page-header/PageHeader";
import {
  getTransaction,
  updateTransaction,
  createTransaction,
} from "../../shared/services/transaction-service";
import { Transaction as ITransaction } from "../../protos/transaction";

const Transaction = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState<ITransaction>({
    id: "",
    name: "",
    amount: 0,
    personId: "",
    date: "",
    bank: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      if (!id || id === ":id") {
        throw new Error("No ID provided");
      }
      const res = await getTransaction(id);
      if (res) {
        setTransaction(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSubmitDisabled = useMemo(
    () =>
      !transaction.amount ||
      !transaction.name ||
      !transaction.personId ||
      !transaction.date ||
      !transaction.bank,
    [transaction]
  );

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
              className={!transaction?.name ? "error" : ""}
              type="text"
              id="name"
              value={transaction?.name}
              onChange={(e) => {
                const newTransaction = { ...transaction };
                newTransaction.name = e.target.value;
                setTransaction(newTransaction);
              }}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount (£)</label>
            <input
              className={!transaction?.amount ? "error" : ""}
              type="number"
              id="amount"
              value={transaction?.amount}
              onChange={(e) => {
                const newTransaction = { ...transaction };
                newTransaction.amount = parseInt(e.target.value);
                setTransaction(newTransaction);
              }}
            />
          </div>
          <div>
            <label htmlFor="person">Person</label>
            <input
              className={!transaction?.personId ? "error" : ""}
              type="text"
              id="person"
              value={transaction?.personId}
              onChange={(e) => {
                const newTransaction = { ...transaction };
                newTransaction.personId = e.target.value;
                setTransaction(newTransaction);
              }}
            />
          </div>
          <div>
            <label htmlFor="day">Day</label>
            <input
              className={!transaction?.date ? "error" : ""}
              type="number"
              id="day"
              value={transaction?.date}
              onChange={(e) => {
                const newTransaction = { ...transaction };
                newTransaction.date = e.target.value;
                setTransaction(newTransaction);
              }}
            />
          </div>
          <div>
            <label htmlFor="bank">Bank</label>
            <input
              className={!transaction?.bank ? "error" : ""}
              type="text"
              id="bank"
              value={transaction?.bank}
              onChange={(e) => {
                const newTransaction = { ...transaction };
                newTransaction.bank = e.target.value;
                setTransaction(newTransaction);
              }}
            />
          </div>
          <button
            disabled={saving || isSubmitDisabled}
            onClick={async (e) => {
              try {
                e.preventDefault();
                setSaving(true);
                if (transaction.id) {
                  await updateTransaction(transaction);
                } else {
                  await createTransaction(transaction);
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
