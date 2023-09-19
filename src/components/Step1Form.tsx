import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Radio, Select } from "antd";
import ButtonFilled from "./common/ButtonFilled";
import logo from "../assets/images/card-logo.png";
import rightLogo from "../assets/images/card-right-logo.png";
import cutter from "../assets/images/step-card-cutter.png";
import flag from "../assets/images/flag.png";

const { Option } = Select;

const Step1Form = ({ onNextStep }: any) => {
  const [value, setValue] = React.useState("email");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const getCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = (value: any) => {
    setSelectedCountry(value);
  };

  return (
    <div className="md:px-[20px] lg:px-auto">
      <div className="border border-[#1D6DE6] searched-list-wrapper flex flex-col gap-y-[15px] md:flex-row md:justify-between md:items-center px-[20px] xl:px-[30px] mb-[15px] py-[20px] md:py-0 bg-[#FCFCFC]">
        <div className="flex items-center justify-center md:justify-start gap-x-[20px] 2xl:gap-x-[25px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <path
              d="M21.9999 31.3675C25.3305 28.7351 27.8437 26.2119 29.5395 23.798C31.2353 21.3841 32.0833 19.0431 32.0833 16.7749C32.0833 14.8981 31.7407 13.2977 31.0555 11.9738C30.3704 10.65 29.5166 9.57849 28.4941 8.75936C27.4717 7.94025 26.3759 7.34502 25.2067 6.97364C24.0376 6.60227 22.9687 6.41659 21.9999 6.41659C21.0312 6.41659 19.9622 6.60227 18.7931 6.97364C17.6239 7.34502 16.5281 7.94025 15.5057 8.75936C14.4833 9.57849 13.6295 10.65 12.9443 11.9738C12.2592 13.2977 11.9166 14.8981 11.9166 16.7749C11.9166 19.0431 12.7645 21.3841 14.4603 23.798C16.1562 26.2119 18.6694 28.7351 21.9999 31.3675ZM21.9999 33.1128C21.7515 33.1128 21.5094 33.0728 21.2734 32.9929C21.0374 32.913 20.8201 32.7931 20.6214 32.6333C18.2874 30.7788 15.9476 28.4806 13.6018 25.7389C11.2561 22.9971 10.0833 20.0091 10.0833 16.7749C10.0833 14.7649 10.4435 13.0025 11.1639 11.4879C11.8843 9.97325 12.8125 8.70121 13.9485 7.67173C15.0845 6.64222 16.3625 5.8701 17.7825 5.35536C19.2025 4.84062 20.6083 4.58325 21.9999 4.58325C23.3915 4.58325 24.7973 4.84062 26.2173 5.35536C27.6374 5.8701 28.9154 6.64222 30.0514 7.67173C31.1874 8.70121 32.1156 9.97325 32.836 11.4879C33.5564 13.0025 33.9166 14.7649 33.9166 16.7749C33.9166 20.0091 32.7437 22.9971 30.398 25.7389C28.0523 28.4806 25.7124 30.7788 23.3784 32.6333C23.1797 32.7931 22.9624 32.913 22.7264 32.9929C22.4905 33.0728 22.2483 33.1128 21.9999 33.1128ZM21.9999 19.2499C22.7732 19.2499 23.4249 18.9849 23.9549 18.4549C24.4849 17.9249 24.7499 17.2732 24.7499 16.4999C24.7499 15.7266 24.4849 15.075 23.9549 14.5449C23.4249 14.0149 22.7732 13.7499 21.9999 13.7499C21.2266 13.7499 20.575 14.0149 20.0449 14.5449C19.5149 15.075 19.2499 15.7266 19.2499 16.4999C19.2499 17.2732 19.5149 17.9249 20.0449 18.4549C20.575 18.9849 21.2266 19.2499 21.9999 19.2499ZM10.9999 39.4166C10.7402 39.4166 10.5225 39.3286 10.3468 39.1527C10.1711 38.9768 10.0833 38.7588 10.0833 38.4987C10.0833 38.2386 10.1711 38.021 10.3468 37.8459C10.5225 37.6708 10.7402 37.5832 10.9999 37.5832H32.9999C33.2596 37.5832 33.4774 37.6712 33.653 37.8472C33.8287 38.0231 33.9166 38.2411 33.9166 38.5012C33.9166 38.7612 33.8287 38.9788 33.653 39.1539C33.4774 39.329 33.2596 39.4166 32.9999 39.4166H10.9999Z"
              fill="#1D6DE6"
            />
          </svg>
          <div>
            <p className="searched-place text-[15px] md:text-[16px] lg:text-[17px] xl:text-[19px] 2xl:text-[20px]">
              Birmingham
            </p>
            <div className="flex items-center gap-x-[10px] mt-[6px]">
              <p className="searched-available-spot text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">
                Available Spots:
              </p>
              <p className="available-count text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">
                08
              </p>
            </div>
          </div>
        </div>
        <button className="searched-select-btn text-[14px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] uppercase">
          selected
        </button>
      </div>
      <div className="mt-[25px] lg:mt-[34px] flex flex-col lg:flex-row lg:justify-between items-start gap-y-[40px] gap-x-[20px]">
        <div className="w-[100%] lg:w-[43%]">
          <p className="form-input-title text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] ml-[10px] xl:ml-[30px] mb-[15px]">
            Enter your Business/Personal Name
          </p>
          <form>
            <Row>
              <Col xs={{ span: 24 }}>
                <Input
                  placeholder="Enter Name here"
                  className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                />
              </Col>
              <Radio.Group
                onChange={onChange}
                value={value}
                className="min-w-full"
              >
                <Row className="mt-[20px] lg:mt-[22px]" align="bottom">
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 9 }}
                    className={`mb-[25px] lg:mb-0 rounded-[12px] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[16px] 2xl:rounded-[17px] custom-radio-wrapper flex justify-start items-center  px-[15px] lg:px-[18px] ${
                      value === "email"
                        ? "bg-[#FEFEFE] border border-[#092642] text-black"
                        : "bg-[#FCFCFC] border border-[#E3E3E3] text-black"
                    }`}
                  >
                    <Radio value="email" className="text-black">
                      Email
                    </Radio>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 14, offset: 1 }}
                    className={`rounded-[12px] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[16px] 2xl:rounded-[17px] custom-radio-wrapper flex justify-start items-center  px-[15px] lg:px-[18px] ${
                      value === "phone"
                        ? "bg-[#FEFEFE] border border-[#092642] text-black"
                        : "bg-[#FCFCFC] border border-[#E3E3E3] text-black"
                    }`}
                  >
                    <Radio value="phone" className="text-black">
                      Phone Number
                    </Radio>
                  </Col>
                </Row>
                {value === "email" && (
                  <Row className="mt-[20px] lg:mt-[22px]">
                    <Col xs={{ span: 24 }}>
                      <Input
                        placeholder="Enter Email here"
                        className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                      />
                    </Col>
                  </Row>
                )}
                {value === "phone" && (
                  <Row className="mt-[20px] lg:mt-[22px]">
                    <Col
                      xs={{ span: 10 }}
                      md={{ span: 6 }}
                      lg={{ span: 10 }}
                      xl={{ span: 9 }}
                      xxl={{ span: 6 }}
                      className="step-custom-input flex items-center step-custom-select-wrapper"
                    >
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder={
                          // <>
                          //   <img src={flag} alt="" className="" />
                          //   <span>+2</span>
                          // </>
                          "Select"
                        }
                        className="step-custom-select px-[6px] lg:px-[12px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                        optionFilterProp="children"
                        onChange={handleChange}
                        value={selectedCountry}
                      >
                        {countries.map((country: any) => (
                          <Option key={country.ccn3} value={country.ccn3}>
                            <div className="flex items-center gap-x-[8px]">
                              <img
                                src={country.flags.png}
                                alt={country.name.common}
                                className="w-[22px] h-[22px] lg:w-[28px] lg:h-[28px] rounded-full"
                              />
                              <span className="text-[13px] md:text-[15px]">
                                +
                                {country?.ccn3 || (
                                  <span className="country-dropdown-text text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px]">
                                    2
                                  </span>
                                )}
                              </span>
                            </div>
                          </Option>
                        ))}
                      </Select>
                    </Col>
                    <Col
                      xs={{ span: 13, offset: 1 }}
                      md={{ span: 17, offset: 1 }}
                      lg={{ span: 13, offset: 1 }}
                      xl={{ span: 14, offset: 1 }}
                      xxl={{ span: 17, offset: 1 }}
                    >
                      <Input
                        placeholder="000 00 0000"
                        className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                      />
                    </Col>
                  </Row>
                )}
              </Radio.Group>
            </Row>
            <div className="flex items-center gap-x-[20px] mt-[30px] lg:mt-[40px]">
              <Link to="/select-city" className="back-btn">
                <span className="back-btn-inner">Back</span>
              </Link>
              <ButtonFilled
                text="Next"
                handleClick={(event: any) => onNextStep(event)}
              />
            </div>
          </form>
        </div>
        <div className="w-[100%] lg:w-[54%] lg:px-[10px] xl:px-[30px] bg-red-100">
          <div className="step-preview pl-[10px] md:pl-[20px] lg:pl-[10px] xl:pl-[27px] pb-[20px] lg:pb-[30px] pr-[10px] md:pr-[20px]  lg:pr-[10px] xl:pr-[20px] pt-[30px] lg:pt-[39px] lg:mt-[40px] xl:mt-[50px]">
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

export default Step1Form;
