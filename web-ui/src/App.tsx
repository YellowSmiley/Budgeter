import "./App.scss";
import Transactions from "./components/transactions/Transactions";

const App = () => {
  return (
    <div className="App">
      <header className="navbar">Budgeter</header>
      <main className="main-content">
        <Transactions />
      </main>
    </div>
  );
};

export default App;
