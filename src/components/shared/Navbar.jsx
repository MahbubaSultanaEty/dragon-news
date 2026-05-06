"use client";
import React from "react";
import Image from "next/image";
import userAvatar from "@/assets/user.png";
import Link from "next/link";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  const logout = async () => {  
     await authClient.signOut();
    toast("logged out ")
    
  }

  console.log(user, "user");
  return (
    <div className="navbar my-2 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-700"
          >
            <li>
              <Navlink href={"/"}>Home</Navlink>
            </li>
            <li>
              <Navlink href={"/about-us"}>About</Navlink>
            </li>
            <li>
              <Navlink href={"/career"}>Career</Navlink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-700">
          <li>
            <Navlink href={"/"}>Home</Navlink>
          </li>
          <li>
            <Navlink href={"/about-us"}>About</Navlink>
          </li>
          <li>
            <Navlink href={"/career"}>Career</Navlink>
          </li>
        </ul>
      </div>
     
           <div className="navbar-end gap-2 ">
        <h2 className="text-xs font-semibold">Hello, { user?.name}</h2>
        <Image
          src={user?.image || userAvatar}
          width={40}
          height={40}
          alt="user avatar icon"
          className="bg-amber-800 rounded-full"
        />
   {
        user ? (        
          <button className="bg-gray-700 text-white btn btn-wide px-12" onClick={logout}>
            Logout
          </button>
     
        ) : (
          <Navlink href={"/login"}>
          <button className="bg-gray-700 text-white btn btn-wide px-12">
            Login
          </button>
        </Navlink>  
        )
        }
         </div>
     
    </div>
  );
};

export default Navbar;
