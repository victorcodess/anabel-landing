import React from "react";
import disney from "./assets/disney logo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between absolute top-7 w-full items-center z-50">
      <img src={disney} alt="Disney Logo" className="w-[261px]" />
      <ul className="flex flex-row gap-[80px] text-[16px] ml-28 font-medium">
        <li>Home</li>
        <li>Episodes</li>
        <li>Cast</li>
        <li>Plot</li>
        <li>Disney Club</li>
      </ul>

      <button className="bg-gradient-to-br from-[#4523B0] to-[#6E8EFF] rounded-[72.5px] py-[14.5px] px-[37.43px] mr-24 font-semibold">
        Create Account
      </button>
    </nav>
  );
};

export default Navbar;
