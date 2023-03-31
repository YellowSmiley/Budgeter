import "./App.scss";
import ListOfTransactions from "./components/ListOfTransactions/ListOfTransactions";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Budgeter</header>
      <div className="App-content">
        <ListOfTransactions />
      </div>
    </div>
  );
};

export default App;
