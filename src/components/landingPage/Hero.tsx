import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { ArrowRightOutlined } from "@ant-design/icons";
import ButtonFilled from "../common/ButtonFilled";
import hero from "../../assets/images/hero-blue-bg.png";
import scanner from "../../assets/images/scanner.png";
import leftBox from "../../assets/images/yellow-box.png";
import rightBox from "../../assets/images/blue-box.png";
import leftCircle from "../../assets/images/light-blue-circle.png";
import rightCircle from "../../assets/images/yellow-circle.png";
import blueCircle from "../../assets/images/blue-circle.png";
import logo from "../../assets/images/card-logo.png";
import rightLogo from "../../assets/images/card-right-logo.png";

const Hero = () => {
  return (
    <div className="bg-lighter-white relative" id="home">
      <div
        className="absolute leftBox"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <Tilt className="Tilt" options={{ max: 50 }}>
          <img src={leftBox} alt="box" className="" />
        </Tilt>
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
      <a
        href="#!"
        className="cursor-pointer fixed hero-help-icon rounded-full border border-[#1D6DE6] bg-white flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]"
        >
          <path
            d="M19.6009 67.5C18.8286 67.5 18.1812 67.2385 17.6587 66.7155C17.1362 66.1925 16.875 65.5444 16.875 64.7712V53.8562C16.875 52.3554 17.4088 51.0739 18.4765 50.0117C19.5441 48.9494 20.8276 48.4183 22.3269 48.4183H58.6731C60.1724 48.4183 61.4559 48.9526 62.5235 50.0212C63.5912 51.0899 64.125 52.3746 64.125 53.8752V64.7892C64.125 65.5623 63.8638 66.2074 63.3413 66.7244C62.8188 67.2415 62.1714 67.5 61.3991 67.5H19.6009ZM31.3485 42.4471C27.3442 42.4471 23.9309 41.036 21.1085 38.2136C18.2862 35.3913 16.875 31.9779 16.875 27.9735C16.875 23.9692 18.2862 20.5559 21.1085 17.7335C23.9309 14.9112 27.3442 13.5 31.3485 13.5H49.6515C53.6558 13.5 57.0691 14.9112 59.8915 17.7335C62.7138 20.5559 64.125 23.9692 64.125 27.9735C64.125 31.9779 62.7138 35.3913 59.8915 38.2136C57.0691 41.036 53.6558 42.4471 49.6515 42.4471H31.3485ZM20.25 64.125H60.75V53.8702C60.75 53.2644 60.5553 52.7668 60.1659 52.3774C59.7765 51.988 59.2789 51.7933 58.6731 51.7933H22.3269C21.7211 51.7933 21.2235 51.988 20.8341 52.3774C20.4447 52.7668 20.25 53.2644 20.25 53.8702V64.125ZM31.3485 39.0721H49.6515C52.7668 39.0721 55.3954 38.0012 57.5373 35.8594C59.6791 33.7175 60.75 31.0889 60.75 27.9735C60.75 24.8582 59.6791 22.2296 57.5373 20.0877C55.3954 17.9459 52.7668 16.875 49.6515 16.875H31.3485C28.2332 16.875 25.6046 17.9459 23.4627 20.0877C21.3209 22.2296 20.25 24.8582 20.25 27.9735C20.25 31.0889 21.3209 33.7175 23.4627 35.8594C25.6046 38.0012 28.2332 39.0721 31.3485 39.0721ZM31.3462 30.4399C32.0444 30.4399 32.6304 30.2037 33.1042 29.7315C33.578 29.2592 33.8149 28.674 33.8149 27.9758C33.8149 27.2777 33.5787 26.6917 33.1065 26.2179C32.6342 25.7441 32.049 25.5072 31.3508 25.5072C30.6527 25.5072 30.0667 25.7434 29.5929 26.2156C29.1191 26.6879 28.8822 27.2731 28.8822 27.9712C28.8822 28.6694 29.1184 29.2554 29.5907 29.7292C30.0629 30.203 30.6481 30.4399 31.3462 30.4399ZM49.6492 30.4399C50.3473 30.4399 50.9333 30.2037 51.4071 29.7315C51.8809 29.2592 52.1178 28.674 52.1178 27.9758C52.1178 27.2777 51.8816 26.6917 51.4094 26.2179C50.9371 25.7441 50.3519 25.5072 49.6538 25.5072C48.9556 25.5072 48.3696 25.7434 47.8958 26.2156C47.422 26.6879 47.1851 27.2731 47.1851 27.9712C47.1851 28.6694 47.4213 29.2554 47.8935 29.7292C48.3658 30.203 48.951 30.4399 49.6492 30.4399Z"
            // fill="#1D6DE6"
            fill="black"
          />
        </svg>
      </a>
      <div
        className="homepage-container mx-auto px-4 md:px-8 xl:px-10 py-[40px] lg:py-[60px] 2xl:py-[60px]"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="hero-inner-wrapper bg-[#FDFDFD] w-[100%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[80%] mx-auto flex flex-col items-center py-[50px] xl:py-[48px] 2xl:py-[56px] px-4 lg:px-[30px] xl:px-[40px] 2xl:px-[50px]">
          <p
            className="hero-welcome-text text-center text-[15px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] uppercase mb-[5px] md:mb-[10px]"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {/* Welcome to UMO Leaflets: */}
            Empowering Communities with Every Leaflet
          </p>
          {/* Becoming Stronger Together */}
          <p
            className="hero-together-text md:w-auto flex justify-center hero-title text-center text-[19px] md:text-[30px] lg:text-[36px] xl:text-[39px] 2xl:text-[41px] uppercase mt-[0px] mb-[10px] md:mb-[10px]"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="w-fit font-semibold bg-[#fedb0d] text-[#156ceb] py-[10px] px-[18px] md:px-[20px] rounded-[25px] md:rounded-[28px] lg:rounded-[30px] xl:rounded-[32px] 2xl:rounded-[35px]">
              Becoming Stronger Together
            </p>
          </p>
          <p
            className="w-full hero-description px-[15px] lg:px-0 text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            At UMO, we’re dedicated to helping your business thrive through
            effective leaflet marketing. Our platform makes it easy for you to
            reach your target audience and grow your brand. In an era where
            every penny counts, our coupon leaflets allow businesses to stand
            alongside their communities, making essential goods and services
            more affordable.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-y-[0px] xl:gap-x-[0px] my-[25px] md:my-[40px] lg:my-[50px] justify-center lg:px-[20px] xl:px-0">
            <div
              className="flex justify-start relative"
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <img
                src={hero}
                alt="hero"
                className="w-[100%] md:w-[80%] lg:w-[90%] xl:w-[90%] 2xl:w-[100%] mx-auto"
              />
              <div>
                <div className="absolute card-left-position top-[12px] md:top-[20px] lg:top-[15px] xl:top-[18px] 2xl:top-[22px] left-[24px] md:left-[95px] lg:left-[60px] xl:left-[70px] 2xl:left-[50px]">
                  <div className="">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[50px] lg:w-[40px] 2xl:w-[60px] card-logo-width"
                    />
                  </div>
                  <div className="mt-[7px] xl:mt-[10px] 2xl:mt-[18px]">
                    <p className="card-title">
                      Lloyds <br /> Pharmacy
                    </p>
                  </div>
                  <div className="light-gray-line1 mt-[4px] md:mt-[8px]"></div>
                  <div className="light-gray-line2 mt-[4px] md:mt-[8px]"></div>
                  <div className="">
                    <p className="card-off-text">15% Off</p>
                  </div>
                  <div className="light-yellow-line1 mt-[0px]"></div>
                  <div className="light-yellow-line2 mt-[4px] md:mt-[8px]"></div>
                  <div className="flex items-center gap-x-[10px] 2xl:gap-x-[15px] mt-[15px] 2xl:mt-[19px]">
                    <div className="card-phone-svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        className="w-[15px] h-[15px] md:w-[19px] md:h-[19px]"
                      >
                        <path
                          d="M14.5065 15.0721C13.237 15.0721 11.9357 14.7542 10.6025 14.1185C9.26931 13.4828 8.03072 12.5906 6.88674 11.4418C5.74276 10.2929 4.85292 9.05436 4.21723 7.726C3.58152 6.39763 3.26367 5.09871 3.26367 3.82923C3.26367 3.59919 3.33897 3.4075 3.48957 3.25415C3.64017 3.10079 3.82842 3.02411 4.05432 3.02411H5.91654C6.1212 3.02411 6.2998 3.08855 6.45234 3.21742C6.60487 3.3463 6.70816 3.51162 6.76221 3.71338L7.13581 5.509C7.17058 5.71945 7.1643 5.90336 7.11699 6.06072C7.06969 6.21807 6.98619 6.34695 6.86648 6.44735L5.21422 7.9881C5.52315 8.54899 5.86466 9.07006 6.23875 9.5513C6.61282 10.0325 7.01176 10.4884 7.43556 10.919C7.87289 11.3563 8.34351 11.763 8.84743 12.139C9.35136 12.515 9.90453 12.87 10.5069 13.2041L12.1172 11.5648C12.2398 11.4326 12.3776 11.3455 12.5306 11.3035C12.6836 11.2615 12.8528 11.253 13.0382 11.2781L14.6224 11.6025C14.827 11.6527 14.9931 11.7557 15.1205 11.9116C15.2479 12.0676 15.3116 12.2464 15.3116 12.4482V14.2814C15.3116 14.5073 15.235 14.6956 15.0816 14.8462C14.9283 14.9968 14.7366 15.0721 14.5065 15.0721ZM4.86089 7.28145L6.30607 5.9521C6.35433 5.91349 6.38571 5.8604 6.40019 5.79283C6.41467 5.72524 6.41226 5.66249 6.39296 5.60458L6.05844 4.0088C6.03914 3.93157 6.00536 3.87365 5.95709 3.83503C5.90882 3.79642 5.84607 3.77711 5.76884 3.77711H4.22374C4.16583 3.77711 4.11756 3.79642 4.07894 3.83503C4.04033 3.87365 4.02102 3.92191 4.02102 3.97983C4.0355 4.49438 4.11611 5.03162 4.26284 5.59155C4.40958 6.15147 4.60893 6.71476 4.86089 7.28145ZM11.2237 13.5574C11.7325 13.8093 12.2748 13.9957 12.8506 14.1164C13.4265 14.237 13.9282 14.3017 14.3559 14.3104C14.4138 14.3104 14.4621 14.2911 14.5007 14.2525C14.5393 14.2139 14.5586 14.1656 14.5586 14.1077V12.5959C14.5586 12.5186 14.5393 12.4559 14.5007 12.4076C14.4621 12.3594 14.4042 12.3256 14.3269 12.3063L12.9339 12.021C12.876 12.0017 12.8253 11.9993 12.7818 12.0138C12.7384 12.0282 12.6926 12.0596 12.6443 12.1079L11.2237 13.5574Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <p className="card-phone-text">+1 234 5678</p>
                  </div>
                </div>
                <div className="absolute card-right-position top-[13px] xl:top-[20px] 2xl:top-[30px] right-[-15px] md:right-[50px] lg:right-[20px] xl:right-[35px] 2xl:right-[39px]">
                  <div className="flex justify-center right-logo-wrapper">
                    <img
                      src={rightLogo}
                      alt="logo"
                      className="right-logo-image"
                    />
                  </div>
                  <div className="mt-[10px] md:mt-[15px] lg:mt-[10px] xl:mt-[20px] 2xl:mt-[38px]">
                    <button className="card-button ">UMHOO16</button>
                    <p className="card-date mt-[8px] md:mt-[10px] lg:mt-[9px] 2xl:mt-[11px] text-center">
                      01, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block hero-mid-margin w-[25px] 2xl:h-[320px] hero-mid-div py-[20px] rounded-[8px] bg-[#F9F9F9]"></div>
            <div className="block lg:hidden  h-[20px] w-[90%] md:w-[70%] mx-[30px] rounded-[8px] bg-[#F9F9F9]"></div>
            <div className="scanner-wrapper p-[10px] lg:p-[5px] 2xl:p-[20px]">
              <Tilt className="Tilt" options={{ max: 20 }}>
                <img
                  src={scanner}
                  alt="scanner"
                  className="w-[170px] md:w-[250px] lg:w-[100%] 2xl:w-[100%]"
                  data-aos="zoom-out"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                />
              </Tilt>
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
            <Link to="/select-city">
              <ButtonFilled text="Get started Now" />
            </Link>
          </div>
          {/* <button
            className="mt-[20px] relative group"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Link
              to="/select-city"
              className="ml-[10px] md:ml-[25px] text-black text-[14px] md:text-[15px] 2xl:text-[16px] uppercase custom-font-500 cursor-pointer group-hover:text-[#156CEB] transition duration-700 ease-in-out delay-50"
            >
              Enter sales rep code
            </Link>
            <span className="absolte ml-[5px]">
              <ArrowRightOutlined className="text-white group-hover:text-[#156CEB] transition duration-700 ease-in-out delay-50" />
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
