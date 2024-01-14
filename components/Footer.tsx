import React from "react";
import Twitter from "../public/images/Twitter (Black).svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-sky-50 p-2 sm:p-4 mt-10 flex flex-col sm:flex-row gap-3 px-5 sm:px-14">
      <div className="sm:flex-1">
        <h1 className="font-bold text-sky-500">Chirp.</h1>
      </div>

      <div className="flex justify-center gap-5 items-center text-sm cursor-pointer">
        <Image alt="icon" src={Twitter} />
        <div className="flex-1 flex sm:gap-5 justify-evenly">
          <p className="font-medium">Privacy Policy</p>
          <p className="font-medium">Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
