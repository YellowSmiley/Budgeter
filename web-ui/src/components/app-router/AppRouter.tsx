import { Routes, Route, Navigate } from "react-router-dom";
import Transaction from "../transactions/Transaction";
import Transactions from "../transactions/Transactions";
import { Paths } from "./paths";
import Home from "../home/Home";

const AppRouter = () => (
  <Routes>
    <Route path={Paths.Home} element={<Home />} />
    <Route path={Paths.Transactions}>
      <Route index element={<Transactions />} />
      <Route path=":id" element={<Transaction />} />
    </Route>
    <Route path="*" element={<Navigate to={Paths.Home} />} />
  </Routes>
);

export default AppRouter;
