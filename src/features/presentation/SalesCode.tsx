import React from "react";
import { Link, useNavigate } from "react-router-dom";
import leftBox from "../../assets/images/city-yellow-box.png";
import rightBox from "../../assets/images/city-blue-box.png";
import leftCircle from "../../assets/images/light-blue-circle.png";
import blueCircle from "../../assets/images/blue-circle.png";
import Navbar from "../../components/common/Navbar";
import { Row, Col, Input, Radio } from "antd";
import ButtonFilled from "../../components/common/ButtonFilled";

const SalesCode = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("sales");
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="hero-wrapper-margin">
      <Navbar />
      <div className="bg-lighter-white relative">
        <div className="absolute leftBox">
          <img src={leftBox} alt="box" className="" />
        </div>
        <div className="absolute city-rightBox">
          <img
            src={rightBox}
            alt="box"
            className="w-[70%] md:w-[70%] lg:w-[100%]"
          />
        </div>
        <div className="absolute left-[1px] md:left-[10px] lg:left-[15px] xl:left-[30px] 2xl:left-[45px] top-[55%]">
          <img
            src={leftCircle}
            alt="box"
            className="w-[40%] md:w-[70%] lg:w-[100%]"
          />
        </div>
        <div className="absolute left-[3px] md:left-[20px] lg:left-[40px] xl:left-[90px] 2xl:left-[110px] city-blueCircle bottom-[80px]">
          <img
            src={blueCircle}
            alt="box"
            className="w-[40%] md:w-[70%] lg:w-[100%]"
          />
        </div>
        <a
          href="#!"
          className="cursor-pointer fixed hero-help-icon rounded-full border border-[#1D6DE6] bg-[#FEDB0D] flex justify-center items-center"
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
              fill="#1D6DE6"
            />
          </svg>
        </a>
        <div
          className="homepage-container mx-auto px-4 md:px-8 xl:px-10 py-[40px] lg:py-[60px] 2xl:py-[60px]"
          //   data-aos="zoom-in"
          //   data-aos-easing="linear"
          //   data-aos-duration="1000"
        >
          <div className="">
            <div
              className="hero-outer-wrapper w-[100%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[80%] mx-auto lg:min-h-[800px] relative"
              style={{ zIndex: "999" }}
            >
              <div className="hero-inner-wrapper bg-[#FEDB0D] flex flex-col items-center py-[50px] xl:py-[48px] 2xl:py-[56px] px-4 lg:px-[30px] xl:px-[40px] 2xl:px-[50px] relative mt-[3px] mr-[10px] md:ml-[-19px] md:mb-[-19px] md:mr-[19px] min-h-[700px] md:min-h-[700px] lg:min-h-[800px]">
                <div className="absolute top-[30px] lg:left-[22px] xl:left-[38px] lg:top-[45px] xl:top-[52px]">
                  <div className="flex items-center gap-x-[13px]">
                    <Link to="/">
                      <button className="w-[50px] h-[50px] rounded-full bg-[#1D6DE6] flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15 19L8 12L15 5"
                            stroke="#FEDB0D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </Link>
                    <span className="text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px] custom-font-900 text-[#1D6DE6] uppercase">
                      Back
                    </span>
                  </div>
                </div>
                <p
                  className="sidepage-title text-center text-[28px] md:text-[28px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] mb-[10px] md:mb-[12px] mt-[50px] lg:mt-0"
                  //   data-aos="fade-down"
                  //   data-aos-easing="linear"
                  //   data-aos-duration="1500"
                >
                  Enter Sales Rep Code
                </p>
                {/* <p
                  className="w-full sidepage-descriptions px-[10px] lg:px-0 text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-center"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ut ex ac est laoreet mattis.
                </p> */}
                <form className="mt-[40px] lg:mt-[50px] 2xl:mt-[60px] w-full md:px-[20px] lg:px-auto">
                  <Row>
                    <Radio.Group
                      onChange={onChange}
                      value={value}
                      className="min-w-full"
                    >
                      <Row align="bottom">
                        <Col
                          xs={{ span: 24 }}
                          lg={{ span: 9 }}
                          xl={{ span: 9 }}
                          xxl={{ span: 8 }}
                          className={`mb-[25px] lg:mb-0 rounded-[12px] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[16px] 2xl:rounded-[17px] custom-radio-wrapper flex justify-start items-center  px-[15px] lg:px-[18px] ${
                            value === "sales"
                              ? "bg-[#FEFEFE] border border-[#1D6DE6] text-black"
                              : "bg-[#FCFCFC] border border-[#E3E3E3] text-black"
                          }`}
                        >
                          <Radio value="sales" className="text-black">
                            Sales Rep
                          </Radio>
                        </Col>
                        <Col
                          xs={{ span: 24 }}
                          lg={{ span: 9, offset: 1 }}
                          xl={{ span: 9, offset: 1 }}
                          xxl={{ span: 8, offset: 1 }}
                          className={`rounded-[12px] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[16px] 2xl:rounded-[17px] custom-radio-wrapper flex justify-start items-center  px-[15px] lg:px-[18px] ${
                            value === "user"
                              ? "bg-[#FEFEFE] border border-[#1D6DE6] text-black"
                              : "bg-[#FCFCFC] border border-[#E3E3E3] text-black"
                          }`}
                        >
                          <Radio value="user" className="text-black">
                            New User
                          </Radio>
                        </Col>
                      </Row>
                    </Radio.Group>
                  </Row>
                  <Row className="mt-[16px]">
                    <Col
                      xs={{ span: 24 }}
                      lg={{ span: 9 }}
                      xl={{ span: 9 }}
                      xxl={{ span: 8 }}
                    >
                      <Input
                        placeholder="Enter Code"
                        className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                      />
                    </Col>
                  </Row>
                  <div className="flex items-center gap-x-[20px] mt-[30px] lg:mt-[40px]">
                    <Link to="/">
                      <button className="back-btn">
                        <span className="back-btn-inner">Back</span>
                      </button>
                    </Link>
                    <ButtonFilled
                      text="Next"
                      handleClick={() => navigate("/select-city")}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCode;
