import React from "react";
import first from "../assets/first.png";
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import sixth from "../assets/sixth.png";

const Project = () => {
  return (
    <div className="bg-black pb-[200px]">
      <div className="max-w-container mx-auto">
        <h2 className="text-[48px] font-poppins leading-[26px] text-darkgray font-bold text-center">
          Projects
        </h2>

        <h3 className="text-[32px] font-poppins font-normal leading-[26px] text-[#A7A7A7] text-center mt-[50px]">
          Things I’ve built so far
        </h3>
        <div className="grid grid-cols-3 gap-[40px] mt-[60px]">
          <div className="w-[373px] h-[567px] bg-[#363636] shadow rounded-[20px] mt-[40px]">
            <img src={first} alt="img" />
            <h3 className="text-[28px] font-poppins font-medium leading-[26px] text-darkgray ml-[28px] mt-[27px]">
              Project Tile goes here
            </h3>
            <p className="text-[18px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[17px] w-[314px]">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>

            <h5 className="text-[15px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[12px] ">
              Tech stack : HTML , JavaScript, SASS, React
            </h5>
            <div className="flex justify-between items-center pr-[35px]">
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px] ">
                <FaLink className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px]">
                <IoLogoGithub className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[373px] h-[567px] bg-[#363636] shadow rounded-[20px] mt-[40px]">
            <img src={second} alt="img" />
            <h3 className="text-[28px] font-poppins font-medium leading-[26px] text-darkgray ml-[28px] mt-[27px]">
              Project Tile goes here
            </h3>
            <p className="text-[18px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[17px] w-[314px]">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>

            <h5 className="text-[15px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[12px] ">
              Tech stack : HTML , JavaScript, SASS, React
            </h5>
            <div className="flex justify-between items-center pr-[35px]">
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px] ">
                <FaLink className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px]">
                <IoLogoGithub className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[373px] h-[567px] bg-[#363636] shadow rounded-[20px] mt-[40px]">
            <img src={third} alt="img" />
            <h3 className="text-[28px] font-poppins font-medium leading-[26px] text-darkgray ml-[28px] mt-[27px]">
              Project Tile goes here
            </h3>
            <p className="text-[18px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[17px] w-[314px]">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>

            <h5 className="text-[15px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[12px] ">
              Tech stack : HTML , JavaScript, SASS, React
            </h5>
            <div className="flex justify-between items-center pr-[35px]">
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px] ">
                <FaLink className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px]">
                <IoLogoGithub className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[373px] h-[567px] bg-[#363636] shadow rounded-[20px] mt-[40px]">
            <img src={fourth} alt="img" />
            <h3 className="text-[28px] font-poppins font-medium leading-[26px] text-darkgray ml-[28px] mt-[27px]">
              Project Tile goes here
            </h3>
            <p className="text-[18px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[17px] w-[314px]">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>

            <h5 className="text-[15px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[12px] ">
              Tech stack : HTML , JavaScript, SASS, React
            </h5>
            <div className="flex justify-between items-center pr-[35px]">
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px] ">
                <FaLink className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px]">
                <IoLogoGithub className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[373px] h-[567px] bg-[#363636] shadow rounded-[20px] mt-[40px]">
            <img src={fifth} alt="img" />
            <h3 className="text-[28px] font-poppins font-medium leading-[26px] text-darkgray ml-[28px] mt-[27px]">
              Project Tile goes here
            </h3>
            <p className="text-[18px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[17px] w-[314px]">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>

            <h5 className="text-[15px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[12px] ">
              Tech stack : HTML , JavaScript, SASS, React
            </h5>
            <div className="flex justify-between items-center pr-[35px]">
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px] ">
                <FaLink className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px]">
                <IoLogoGithub className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[373px] h-[567px] bg-[#363636] shadow rounded-[20px] mt-[40px]">
            <img src={sixth} alt="img" />
            <h3 className="text-[28px] font-poppins font-medium leading-[26px] text-darkgray ml-[28px] mt-[27px]">
              Project Tile goes here
            </h3>
            <p className="text-[18px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[17px] w-[314px]">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>

            <h5 className="text-[15px] font-poppins font-light leading-[26px] text-darkgray ml-[28px] mt-[12px] ">
              Tech stack : HTML , JavaScript, SASS, React
            </h5>
            <div className="flex justify-between items-center pr-[35px]">
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px] ">
                <FaLink className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center gap-[10px] text-[#FFFFFF] ml-[28px] mt-[21px]">
                <IoLogoGithub className="text-[20px]" />
                <a
                  className="text-[16px] font-poppins font-normal leading-[26px] underline"
                  href="#"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
