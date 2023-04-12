import { Routes, Route, Navigate } from "react-router-dom";
import Transaction from "../transactions/Transaction";
import Transactions from "../transactions/Transactions";
import { Paths } from "./paths";

const AppRouter = () => (
  <Routes>
    <Route path={Paths.Transactions}>
      <Route index element={<Transactions />} />
      <Route path=":id" element={<Transaction />} />
    </Route>
    <Route path="*" element={<Navigate to={Paths.Transactions} />} />
  </Routes>
);

export default AppRouter;
