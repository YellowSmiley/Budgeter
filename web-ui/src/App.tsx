import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.scss";
import AppRouter from "./components/app-router/AppRouter";
import classNames from "classnames";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header>Budgeter</header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            classNames("navLink", {
              active: isActive,
              pending: isPending,
            })
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive, isPending }) =>
            classNames("navLink", {
              active: isActive,
              pending: isPending,
            })
          }
        >
          Transactions
        </NavLink>
      </nav>
      <main>
        <AppRouter />
      </main>
    </div>
  </BrowserRouter>
);

export default App;
