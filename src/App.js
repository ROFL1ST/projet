import React from "react";
import "./App.css";
import { Routes, Navigate, Route } from "react-router-dom";
import Login from "./page/Auth/Login";
import Register from "./page/Auth/Register";
import ProtectRoute from "./routers/ProtectRoute";
import Dashboard from "./page/Dashboard/Dashboard";
import History from "./page/Dashboard/History";
import Student from "./page/Dashboard/Student";
import Officers from "./page/Dashboard/Officers";
import EditList from "./page/Dashboard/EditList";
import EditPage from "./page/Dashboard/EditPage";
import Overview from "./page/Dashboard/Overview";
import PaymentAdd from "./page/Dashboard/PaymentAdd";
import Add from "./component/payment/Add";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Dashboard />
          </ProtectRoute>
        }
      >
        <Route path="overview" element={<Overview />} />
        <Route path="edit" element={<EditList />}>
          <Route path=":id" element={<EditPage />} />
        </Route>
        <Route path="student" element={<Student />} />
        <Route path="addPayment" element={<PaymentAdd />}>
          <Route path="add/:id" element={<Add />} />
        </Route>
        <Route path="officers" element={<Officers />} />
        <Route path="history" element={<History />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
