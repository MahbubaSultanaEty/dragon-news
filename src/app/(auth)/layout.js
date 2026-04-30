import Navbar from "@/components/shared/Navbar";
import React from "react";
import { montserrat } from "../layout";
import LeftSidebar from "@/components/homepage/news/LeftSidebar";

const AuthLayout = ({ children }) => {
  return (
      <div className={`${montserrat.className}`}>
        <Navbar />
      {children}
      
      </div>
  );
};

export default AuthLayout;
