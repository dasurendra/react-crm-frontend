import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admim-layout">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Header />
      </div>
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
