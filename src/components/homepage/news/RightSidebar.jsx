import React from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const RightSidebar = () => {
  return (
    <div>
          <h2 className="text-xl font-semibold mb-4">Login With</h2>
          <div className="flex flex-col gap-3">
          <button className="btn text-blue-700  border-blue-700">
        <FaGoogle /> Login with google
      </button>
      <button className="btn  border-black">
        <IoLogoGithub /> Login with github
      </button>
          </div>
     
    </div>
  );
};

export default RightSidebar;
