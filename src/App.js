import React from "react";
import "./App.css";
import { Routes, Navigate, Route } from "react-router-dom";
import Login from "./page/Auth/Login";
import Register from "./page/Auth/Register";
import ProtectRoute from "./routers/ProtectRoute";
import Dashboard from "./page/Dashboard/Dashboard";
import Overview from "./page/Dashboard/Overview";
import Student from "./page/Dashboard/Student";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectRoute>
            <Dashboard />
          </ProtectRoute>
        }
      >
        <Route path="overview" element={<Overview />} />
        <Route path="student" element={<Student />} />
      </Route>

      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
