import { useState, useEffect } from "react";
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
import { StyledHome } from "./StyledHome";

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
    <StyledHome>
      <PageHeader text="Home" />
      {loading ? (
        <Loading />
      ) : (
        <div className="dashboard">
          {bankAmounts.map((b) => (
            <div className="item">
              <div className="title">{`Total ${b.bank} amount`}</div>
              <div className="value">{b.amount}</div>
            </div>
          ))}
          <div className="item">
            <div className="title">Total Expenditure</div>
            <div className="value">{expenditure}</div>
          </div>
          <div className="item">
            <div className="title">Total Income</div>
            <div className="value">{income}</div>
          </div>
          {personAmounts.map((p) => (
            <div className="item">
              <div className="title">{`Discretionary income for ${p.personId}`}</div>
              <div className="value">{p.amount}</div>
            </div>
          ))}
        </div>
      )}
    </StyledHome>
  );
};

export default Home;
