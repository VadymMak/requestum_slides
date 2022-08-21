import React from "react";
import Navbar from "../navbar/Navbar";
import { Router } from "../../router/Router";
import RightBar from "../right-bar/RightBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Navbar />
        {children}
        <RightBar />
      </div>
      <Router />
    </>
  );
};

export default Layout;
