import { BrowserRouter, NavLink } from "react-router-dom";
import AppRouter from "./components/app-router/AppRouter";
import classNames from "classnames";
import { StyledApp } from "./StyledApp";
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <StyledApp>
        <header>
          Budgeter
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
        </header>
        <main>
          <AppRouter />
        </main>
      </StyledApp>
    </BrowserRouter>
  </>
);

export default App;
