import { useState, useEffect } from "react";
import "./Home.scss";
import PageHeader from "../../shared/components/page-header/PageHeader";
import { listTransactions } from "../../shared/services/transaction-service";
import Loading from "../../shared/components/loading/Loading";
import { bankAmountsFromTransactions } from "../../shared/utils/dashboard";
import { BankAmount } from "../../shared/types/dashboard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [bankAmounts, setBankAmounts] = useState<BankAmount[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const listRes = await listTransactions();
      setBankAmounts(bankAmountsFromTransactions(listRes));
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
        </div>
      )}
    </div>
  );
};

export default Home;
