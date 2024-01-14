import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import TwitterIcon from "../public/images/Twitter.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center p-4 bg-slate-50 z-50">
      <div className="sm:pl-20">
        <h1 className="text-lg font-bold text-sky-500">Chirp.</h1>
      </div>

      <div className="hidden sm:flex sm:items-center sm:gap-5 md:pr-20 sm:text-slate-600 sm:text-sm sm:font-medium">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Pricing</p>
        <p className="cursor-pointer">FAQ</p>
        <Button className="bg-sky-500 text-white flex gap-2 ">
          <Image src={TwitterIcon} alt="Twitter icon" />
          Sign in with Twitter
        </Button>
      </div>

      <div className="sm:hidden cursor-pointer">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
