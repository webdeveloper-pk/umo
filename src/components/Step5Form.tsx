import React from "react";
import hero from "../assets/images/hero.png";
import scanner from "../assets/images/scanner.png";

const Step5Form = () => {
  return (
    <div className="mt-[20px]">
      <div className="flex flex-col lg:flex-row items-center gap-[22px] justify-center">
        <div
          className="flex justify-start"
          //   data-aos="zoom-out"
          //   data-aos-easing="linear"
          //   data-aos-duration="2000"
        >
          <img
            src={hero}
            alt="hero"
            className="w-[100%] md:w-[80%] lg:w-[90%] xl:w-[90%] 2xl:w-[100%] mx-auto"
          />
        </div>
        <div className="scanner-wrapper p-[10px] lg:p-[5px] 2xl:p-[20px]">
          <img
            src={scanner}
            alt="scanner"
            className="w-[200px] md:w-[250px] lg:w-[100%] 2xl:w-auto"
            // data-aos="zoom-out"
            // data-aos-easing="linear"
            // data-aos-duration="2000"
          />

          <div className="text-center text-black text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] custom-font-500 -mt-[10px] lg:-mt-[20px]">
            SCAN ME
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5Form;
