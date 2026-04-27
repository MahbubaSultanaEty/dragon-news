import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { compareAsc, format } from "date-fns";


const Header = () => {
  return (
    <div className="text-center py-5 space-y-2 max-w-97 mx-auto">
      <Image width={300} height={200} alt="logo" src={logo} />
          <p>Journalism Without Fear or Favour</p>
          <p>{ format(new Date(), "EEEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
