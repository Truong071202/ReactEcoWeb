import { Routes, Route } from "react-router-dom";
import "./App.css";

import DefaultLayout from "./components/DefaultLayout";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<DefaultLayout />} />
    </Routes>
  );
};

export default App;
