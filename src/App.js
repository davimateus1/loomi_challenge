import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<Login />} exact path="/" />
      <Route element={<Dashboard />} exact path="/dashboard" />
    </Routes>
  );
};

export default App;
