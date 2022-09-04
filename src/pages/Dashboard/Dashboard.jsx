import React from "react";
import Header from "../Header";
import "./dashboard.css";
import SortDate from "../../components/SortDate.jsx/SortDate";
import Table from "../../components/materialtable/indextable"
const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="dashboard bg-indigo-800 -ml-0.5 -mr-1 ">
        <Header />
        <SortDate />
        <div className="h-20 max-h-30 hover:max-h-screen">
          <Table/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
