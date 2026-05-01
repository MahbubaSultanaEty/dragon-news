import Navbar from "@/components/shared/Navbar";
import React from "react";
import { montserrat } from "../layout";
import LeftSidebar from "@/components/homepage/news/LeftSidebar";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className} bg-gray-400 `}>
      <div className="w-11/12  mx-auto ">
      <Navbar />
      {children}
      </div> 
      </div>
  );
};

export default AuthLayout;
