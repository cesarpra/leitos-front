"use client";

import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Dashboard from "../../../components/Dashboard";
import withPrivateRoute from "../../../components/withPrivateRoute";

function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default withPrivateRoute(DashboardPage); 
