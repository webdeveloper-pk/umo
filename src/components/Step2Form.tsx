import React from "react";
import { Row, Col, Input, Radio } from "antd";
import ButtonFilled from "./common/ButtonFilled";
import logo from "../assets/images/card-logo.png";
import rightLogo from "../assets/images/card-right-logo.png";
import cutter from "../assets/images/step-card-cutter.png";

const Step2Form = ({ onNextStep, onBackStep }: any) => {
  const [value, setValue] = React.useState("social-media");
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="">
      <Row>
        <Radio.Group onChange={onChange} value={value} className="min-w-full">
          <Row align="bottom">
            <Col
              xs={{ span: 24 }}
              lg={{ span: 9 }}
              xl={{ span: 9 }}
              xxl={{ span: 8 }}
              className={`mb-[25px] lg:mb-0 rounded-[12px] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[16px] 2xl:rounded-[17px] custom-radio-wrapper flex justify-start items-center  px-[15px] lg:px-[18px] ${
                value === "address"
                  ? "bg-[#FEFEFE] border border-[#092642] text-black"
                  : "bg-[#FCFCFC] border border-[#E3E3E3] text-black"
              }`}
            >
              <Radio value="address" className="text-black">
                Address
              </Radio>
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 9, offset: 1 }}
              xl={{ span: 9, offset: 1 }}
              xxl={{ span: 8, offset: 1 }}
              className={`rounded-[12px] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[16px] 2xl:rounded-[17px] custom-radio-wrapper flex justify-start items-center  px-[15px] lg:px-[18px] ${
                value === "social-media"
                  ? "bg-[#FEFEFE] border border-[#092642] text-black"
                  : "bg-[#FCFCFC] border border-[#E3E3E3] text-black"
              }`}
            >
              <Radio value="social-media" className="text-black">
                Social Media
              </Radio>
            </Col>
          </Row>
        </Radio.Group>
      </Row>
      <div className="mt-[20px] lg:mt-[23px] flex flex-col lg:flex-row lg:justify-between items-start gap-y-[40px] gap-x-[20px]">
        <div className="w-[100%] lg:w-[44.5%]">
          {value === "social-media" && (
            <p className="form-input-title text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] ml-[10px] xl:ml-[30px] mb-[15px]">
              Add your soical media here
            </p>
          )}
          <form>
            {value === "social-media" ? (
              <>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 20 }}
                    xl={{ span: 20 }}
                    xxl={{ span: 18 }}
                    className="mb-[20px] xl:mb-[23px]"
                  >
                    <Input
                      placeholder="Paste link here"
                      prefix={
                        <div className="mr-[10px] lg:mr-[15px] xl:mr-[20px] 2xl:mr-[25px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      }
                      className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 20 }}
                    xl={{ span: 20 }}
                    xxl={{ span: 18 }}
                    className="mb-[20px] xl:mb-[23px]"
                  >
                    <Input
                      placeholder="Paste link here"
                      prefix={
                        <div className="mr-[10px] lg:mr-[15px] xl:mr-[20px] 2xl:mr-[25px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      }
                      className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 20 }}
                    xl={{ span: 20 }}
                    xxl={{ span: 18 }}
                    className="mb-[20px] xl:mb-[23px]"
                  >
                    <Input
                      placeholder="Paste link here"
                      prefix={
                        <div className="mr-[10px] lg:mr-[15px] xl:mr-[20px] 2xl:mr-[25px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      }
                      className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 20 }}
                    xl={{ span: 20 }}
                    xxl={{ span: 18 }}
                  >
                    <Input
                      placeholder="Paste link here"
                      prefix={
                        <div className="mr-[10px] lg:mr-[15px] xl:mr-[20px] 2xl:mr-[25px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      }
                      className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                    />
                  </Col>
                </Row>
              </>
            ) : (
              <Row>
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 20 }}
                  xl={{ span: 20 }}
                  xxl={{ span: 18 }}
                >
                  <p className="form-input-title text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] ml-[10px] xl:ml-[30px] mb-[15px]">
                    Enter Your Address
                  </p>
                  <Input
                    placeholder="Enter Address here"
                    className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                  />
                </Col>
              </Row>
            )}
            <div className="flex items-center gap-x-[20px] mt-[30px] lg:mt-[40px]">
              <button
                className="back-btn"
                onClick={(event) => onBackStep(event)}
              >
                <span className="back-btn-inner">Back</span>
              </button>
              <ButtonFilled
                text="Next"
                handleClick={(event: any) => onNextStep(event)}
              />
            </div>
          </form>
        </div>
        <div className="w-[100%] lg:w-[54.5%] lg:px-[10px] xl:px-[30px]">
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

export default Step2Form;
