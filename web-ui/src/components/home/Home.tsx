import { useState, useEffect } from "react";
import "./Home.scss";
import PageHeader from "../../shared/components/page-header/PageHeader";
import { listTransactions } from "../../shared/services/transaction-service";
import Loading from "../../shared/components/loading/Loading";
import {
  bankAmountsFromTransactions,
  discretionaryIncomeByPerson,
  totalExpenditure,
  totalIncome,
} from "../../shared/utils/dashboard";
import { BankAmount, PersonAmount } from "../../shared/types/dashboard";

const Home = () => {
  const [bankAmounts, setBankAmounts] = useState<BankAmount[]>([]);
  const [expenditure, setExpenditure] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [personAmounts, setPersonAmounts] = useState<PersonAmount[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const listRes = await listTransactions();
      setBankAmounts(bankAmountsFromTransactions(listRes));
      setExpenditure(totalExpenditure(listRes));
      setIncome(totalIncome(listRes));
      setPersonAmounts(discretionaryIncomeByPerson(listRes));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Home">
      <PageHeader text="Home" />
      {loading ? (
        <Loading />
      ) : (
        <div className="Home_dashboard">
          {bankAmounts.map((b) => (
            <div className="Home_dashboard_item">
              <div className="Home_dashboard_item_title">{`Total ${b.bank} amount`}</div>
              <div className="Home_dashboard_item_value">{b.amount}</div>
            </div>
          ))}
          <div className="Home_dashboard_item">
            <div className="Home_dashboard_item_title">Total Expenditure</div>
            <div className="Home_dashboard_item_value">{expenditure}</div>
          </div>
          <div className="Home_dashboard_item">
            <div className="Home_dashboard_item_title">Total Income</div>
            <div className="Home_dashboard_item_value">{income}</div>
          </div>
          {personAmounts.map((p) => (
            <div className="Home_dashboard_item">
              <div className="Home_dashboard_item_title">{`Discretionary income for ${p.personId}`}</div>
              <div className="Home_dashboard_item_value">{p.amount}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
