import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SidebarMenu from "../../components/Sidebar/SidebarMenu";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="left">
        <SidebarMenu />
      </div>

      <div className="right">
        <Header />
        <div className="main"> {children}</div>

        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
