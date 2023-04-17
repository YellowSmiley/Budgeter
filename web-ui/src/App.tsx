import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.scss";
import AppRouter from "./components/app-router/AppRouter";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header>Budgeter</header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        ;
        <NavLink
          to="/transactions"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Transactions
        </NavLink>
        ;
      </nav>
      <main>
        <AppRouter />
      </main>
    </div>
  </BrowserRouter>
);

export default App;
