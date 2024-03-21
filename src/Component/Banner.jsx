import React from "react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="bg-black pb-[348px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-2">
            <h1 className="w-[438px] font-poppins text-[58px] leading-[70px] tracking-[-1px] pt-[265px] font-bold text-[#D9D9D9]">
              Hi 👋, My name is <span className="text-[#13B0F5]">Pavan MG</span>{" "}
              I build things for web
            </h1>
            <img className="pt-[235px] ml-[220px]" src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
