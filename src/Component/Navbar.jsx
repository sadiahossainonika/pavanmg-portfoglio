import React from "react";
import logo from "../assets/navlogo.png";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-black pt-[15px] pb-[15px]">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" />
          <div>
            <ul className="flex items-center gap-[60px] text-[#A7A7A7] font-dm text-xl leading-[26px] ml-[200px]">
              <li>Home</li>
              <li>About</li>
              <li>Tech Stack</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex items-center gap-[20px] text-[#A7A7A7] text-[30px] ">
            <FaGithub />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
