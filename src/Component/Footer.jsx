import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black pb-[60px] ">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between pb-[50px] border-b-2 border-b-[#141414] ">
          <img src="footerlogo.svg" alt="footer" />
          <div className="flex gap-[40px] text-[#A7A7A7] text-[20px] font-poppins font-normal leading-[26px]">
            <p> +91 12345 09876</p>
            <p>info@example.com</p>
            <div className="flex gap-[20px] text-[30px] text-[#A7A7A7]">
              <FaGithub />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between mt-[60px] ">
            <ul className="flex items-center gap-[52px] text-[#A7A7A7] font-dm text-[18px] font-normal leading-[26px] ">
              <li>Home</li>
              <li>About</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
            <div>
              <h5 className="text-[#A7A7A7] font-poppins text-[18px] font-normal leading-[26px]">
                Designed and built by{" "}
                <span className="text-[#13B0F5]">Pavan MG </span>with{" "}
                <span className="text-[#13B0F5]">Love & Coffee</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
