import React from "react";
import { Row, Col, Input, Select } from "antd";
import ButtonFilled from "./common/ButtonFilled";
import logo from "../assets/images/card-logo.png";
import rightLogo from "../assets/images/card-right-logo.png";
import cutter from "../assets/images/step-card-cutter.png";

const paymentOptions = [
  {
    value: "cash",
    label: "Cash",
  },
  {
    value: "card",
    label: "Card",
  },
];

const Step4Form = ({ onNextStep, onBackStep }: any) => {
  return (
    <div className="md:px-[20px] lg:px-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-y-[40px] gap-x-[20px]">
        <div className="w-[100%] lg:w-[44.5%]">
          <form>
            <Row>
              <p className="form-input-title text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] ml-[10px] xl:ml-[30px] mb-[15px]">
                Enter your Email
              </p>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
                xxl={{ span: 24 }}
              >
                <Input
                  placeholder="Enter here"
                  className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                />
              </Col>
            </Row>
            <Row className="mt-[20px] lg:mt-[25px] 2xl:mt-[30px]">
              <p className="form-input-title text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] ml-[10px] xl:ml-[30px] mb-[15px]">
                Payment Method
              </p>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
                xxl={{ span: 24 }}
                className="step-custom-input flex items-center step-custom-select-wrapper"
              >
                <Select
                  placeholder="Select a Payment Method"
                  className="step-custom-select px-[12px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                  options={paymentOptions}
                />
              </Col>
            </Row>
            <div className="flex items-center gap-x-[20px] mt-[30px] lg:mt-[40px]">
              <button
                className="back-btn"
                onClick={(event) => onBackStep(event)}
              >
                <span className="back-btn-inner">Back</span>
              </button>
              <ButtonFilled
                text="Finish"
                handleClick={(event: any) => onNextStep(event)}
              />
            </div>
          </form>
        </div>
        <div className="w-[100%] lg:w-[53%] lg:px-[10px] xl:px-[30px]">
          <div className=" step-preview pl-[20px] lg:pl-[27px] pb-[20px] lg:pb-[30px] pr-[18px] pt-[30px] lg:pt-[39px] lg:mt-[40px] xl:mt-[50px]">
            <p className="preview-text text-[15px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
              Preview
            </p>
            <div className="mt-[25px] lg:mt-[34px] step-card-wrapper py-[15px] lg:py-[20px] px-[15px] md:px-[30px] lg:px-[20px] xl:px-[25px] 2xl:px-[30px] w-full relative">
              <div className="absolute left-[-7px] md:left-[-10px] lg:left-[-10px] top-0">
                <img
                  src={cutter}
                  alt="design"
                  className="w-[60%] md:w-[100%]"
                />
              </div>
              <div className="flex justify-between">
                <div className="">
                  <div className="">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[50px] lg:w-[40px] 2xl:w-[60px]"
                    />
                  </div>
                  <div className="mt-[7px] xl:mt-[10px] 2xl:mt-[10px]">
                    <p className="step-card-title">
                      Lloyds <br /> Pharmacy
                    </p>
                  </div>
                  <div className="step-light-gray-line1 mt-[4px] md:mt-[7px]"></div>
                  <div className="step-light-gray-line2 mt-[4px] md:mt-[7px]"></div>
                  <div className="mt-[-10px]">
                    <p className="step-card-off-text">15% Off</p>
                  </div>
                  <div className="step-light-yellow-line1 mt-[0px]"></div>
                  <div className="step-light-yellow-line2 mt-[4px] md:mt-[7px]"></div>
                  <div className="flex items-center gap-x-[10px] 2xl:gap-x-[15px] mt-[15px] 2xl:mt-[15px]">
                    <div className="step-card-phone-svg">
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
                    <p className="step-card-phone-text">+1 234 5678</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex justify-end">
                    <img
                      src={rightLogo}
                      alt="logo"
                      className="step-card-right-logo-image"
                    />
                  </div>
                  <div className="mt-[10px] md:mt-[15px] lg:mt-[10px] xl:mt-[20px] 2xl:mt-[25px] step-right-div">
                    <button className="step-card-button">UMHOO16</button>
                    <p className="step-card-date mt-[8px] md:mt-[10px] lg:mt-[9px] 2xl:mt-[11px] text-center">
                      01, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Form;
