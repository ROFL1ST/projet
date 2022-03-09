import React from "react";
import { Outlet } from "react-router-dom";
import Panel from "../../component/Panel";

function Dashboard({ children }) {
  return (
    <div className="antialiased h-screen w-screen overflow-hidden ">
      <div className="flex">
        <Panel/>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
