import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content"> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
