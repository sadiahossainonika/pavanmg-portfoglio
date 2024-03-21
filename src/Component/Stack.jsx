import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import vector from "../assets/Vector.png";
import react from "../assets/react.svg";
import bootstrap from "../assets/bootstrap.svg";
import tailwind from "../assets/tailwind.svg";
import saas from "../assets/saas.svg";
import git from "../assets/git.svg";
import greensock from "../assets/greensock.svg";
import codee from "../assets/code.svg";
import github from "../assets/github.svg";

const Stack = () => {
  return (
    <div className="bg-black pb-[214px]">
      <div className="max-w-container mx-auto">
        <h2 className="text-[48px] font-poppins leading-[26px] font-bold text-[#CCCCCC] text-center ">
          My Tech Stack
        </h2>

        <h3 className="text-[32px] font-poppins leading-[26px] font-normal text-[#A7A7A7] text-center mt-[49px]">
          {" "}
          Technologies I’ve been working with recently
        </h3>
        <div className="grid grid-cols-6 gap-[80px] mt-[147px]">
          <img src={html} alt="first" />
          <img src={css} alt="second" />
          <img src={javascript} alt="third" />
          <img src={react} alt="fifth" />
          <img src={vector} alt="fourth" />
          <img src={bootstrap} alt="six" />
          <img src={tailwind} alt="seven" />
          <img src={saas} alt="eight" />
          <img src={git} alt="nine" />
          <img src={greensock} alt="ten" />
          <img src={codee} alt="eleven" />
          <img src={github} alt="twelve" />
        </div>
      </div>
    </div>
  );
};

export default Stack;
