import React from "react";
import ButtonFilled from "../common/ButtonFilled";
import hero from "../../assets/images/hero.png";
import scanner from "../../assets/images/scanner.png";
import leftBox from "../../assets/images/yellow-box.png";
import rightBox from "../../assets/images/blue-box.png";
import leftCircle from "../../assets/images/light-blue-circle.png";
import rightCircle from "../../assets/images/yellow-circle.png";
import blueCircle from "../../assets/images/blue-circle.png";

const Hero = () => {
  return (
    <div className="bg-lighter-white relative">
      <div
        className="absolute leftBox"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <img src={leftBox} alt="box" className="" />
      </div>
      <div
        className="absolute rightBox"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <img
          src={rightBox}
          alt="box"
          className="w-[70%] md:w-[70%] lg:w-[100%]"
        />
      </div>
      <div
        className="absolute left-[3px] md:left-[20px] lg:left-[20px] xl:left-[50px] bottom-[85px]"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <img
          src={leftCircle}
          alt="box"
          className="w-[40%] md:w-[70%] lg:w-[100%]"
        />
      </div>
      <div
        className="absolute right-[-35px] md:right-[2px] lg:right-[30px] xl:right-[50px] 2xl:right-[80px] top-[90px]"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
        data-aos-offset="800"
      >
        <img
          src={rightCircle}
          alt="box"
          className="w-[40%] md:w-[70%] lg:w-[100%]"
        />
      </div>
      <div
        className="absolute left-[3px] md:left-[40px] lg:left-[60px] xl:left-[110px] blueCircle top-[50%]"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="3000"
        data-aos-offset="300"
      >
        <img
          src={blueCircle}
          alt="box"
          className="w-[40%] md:w-[70%] lg:w-[100%]"
        />
      </div>
      <div
        className="homepage-container mx-auto px-4 md:px-8 xl:px-10 py-[40px] lg:py-[60px] 2xl:py-[60px]"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="hero-inner-wrapper w-[100%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[80%] mx-auto flex flex-col items-center py-[50px] xl:py-[48px] 2xl:py-[56px] px-4 lg:px-[30px] xl:px-[40px] 2xl:px-[50px]">
          <p
            className="text-center text-black text-[15px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] custom-font-500 uppercase mb-[5px] md:mb-[10px]"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Welcome to UMO Leaflets:
          </p>
          <p
            className="text-center text-[#1C6DE4] text-[30px] md:text-[36px] lg:text-[36px] xl:text-[39px] 2xl:text-[41px] custom-font-700 uppercase mb-[10px] md:mb-[15px]"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Boost Your Business!
          </p>
          <p
            className="w-full hero-description px-[10px] lg:px-0 text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] custom-font-400 text-[#444] text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            At UMO, we're dedicated to helping your business thrive through
            effective leaflet marketing. Our platform makes it easy for you to
            reach your target audience and grow your brand.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-y-[30px] xl:gap-x-[20px] my-[25px] md:my-[40px] lg:my-[50px] justify-center lg:px-[20px] xl:px-0">
            <div
              className="flex justify-start"
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="2000"
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
                data-aos="zoom-out"
                data-aos-easing="linear"
                data-aos-duration="2000"
              />
              <div className="text-center text-black text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] custom-font-500 -mt-[10px] lg:-mt-[20px]">
                SCAN ME
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <ButtonFilled text="Get started Now" />
          </div>
          <button
            className="mt-[20px]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <a
              href="#!"
              className="text-black text-[14px] md:text-[15px] 2xl:text-[16px] uppercase custom-font-500 cursor-pointer"
            >
              Learn More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
