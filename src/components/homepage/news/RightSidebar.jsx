'use client'
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const RightSidebar = () => {
  const handleGoogleSignIn = async() => {
     const data = await authClient.signIn.social({
    provider: "google",
     });
    console.log(data, "data");
  };

  const handleGithubSignIn = async() => {
     const data = await authClient.signIn.social({
    provider: "github",
     });
    console.log(data, "data");
  }
  return (
    <div>
          <h2 className="text-xl font-semibold mb-4">Login With</h2>
          <div className="flex flex-col gap-3">
        <button className="btn text-blue-700  border-blue-700"
          onClick={handleGoogleSignIn}>
        <FaGoogle /> Login with google
      </button>
      <button onClick={handleGithubSignIn} className="btn  border-black">
        <IoLogoGithub /> Login with github
      </button>
          </div>
     
    </div>
  );
};

export default RightSidebar;
