import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AppRouter from "./components/app-router/AppRouter";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header>Budgeter</header>
      <main>
        <AppRouter />
      </main>
    </div>
  </BrowserRouter>
);

export default App;
