import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Radio, Select } from "antd";
import ButtonFilled from "./common/ButtonFilled";
import Preview from "./preview/Preview";
import countries from "../services/data/countries.json";

// const { Option } = Select;

const Step1Form = ({ onNextStep, formData, handleInputChange }: any) => {
  const [value, setValue] = React.useState("email");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleChange = (value: any) => {
    handleInputChange("contact_info", {
      business_phone: {
        ...formData.contact_info.business_phone,
        country_code: `${value.target.value}`,
      },
    });
  };

  return (
    <div className="md:px-[20px] lg:px-auto">
      <div className="border border-[#1D6DE6] searched-list-wrapper flex flex-col gap-y-[15px] md:flex-row md:justify-between md:items-center px-[20px] xl:px-[30px] mb-[15px] py-[20px] md:py-0 bg-[#FCFCFC]">
        <div className="flex items-center justify-center md:justify-start gap-x-[20px] 2xl:gap-x-[25px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path
              d="M21.9999 31.3675C25.3305 28.7351 27.8437 26.2119 29.5395 23.798C31.2353 21.3841 32.0833 19.0431 32.0833 16.7749C32.0833 14.8981 31.7407 13.2977 31.0555 11.9738C30.3704 10.65 29.5166 9.57849 28.4941 8.75936C27.4717 7.94025 26.3759 7.34502 25.2067 6.97364C24.0376 6.60227 22.9687 6.41659 21.9999 6.41659C21.0312 6.41659 19.9622 6.60227 18.7931 6.97364C17.6239 7.34502 16.5281 7.94025 15.5057 8.75936C14.4833 9.57849 13.6295 10.65 12.9443 11.9738C12.2592 13.2977 11.9166 14.8981 11.9166 16.7749C11.9166 19.0431 12.7645 21.3841 14.4603 23.798C16.1562 26.2119 18.6694 28.7351 21.9999 31.3675ZM21.9999 33.1128C21.7515 33.1128 21.5094 33.0728 21.2734 32.9929C21.0374 32.913 20.8201 32.7931 20.6214 32.6333C18.2874 30.7788 15.9476 28.4806 13.6018 25.7389C11.2561 22.9971 10.0833 20.0091 10.0833 16.7749C10.0833 14.7649 10.4435 13.0025 11.1639 11.4879C11.8843 9.97325 12.8125 8.70121 13.9485 7.67173C15.0845 6.64222 16.3625 5.8701 17.7825 5.35536C19.2025 4.84062 20.6083 4.58325 21.9999 4.58325C23.3915 4.58325 24.7973 4.84062 26.2173 5.35536C27.6374 5.8701 28.9154 6.64222 30.0514 7.67173C31.1874 8.70121 32.1156 9.97325 32.836 11.4879C33.5564 13.0025 33.9166 14.7649 33.9166 16.7749C33.9166 20.0091 32.7437 22.9971 30.398 25.7389C28.0523 28.4806 25.7124 30.7788 23.3784 32.6333C23.1797 32.7931 22.9624 32.913 22.7264 32.9929C22.4905 33.0728 22.2483 33.1128 21.9999 33.1128ZM21.9999 19.2499C22.7732 19.2499 23.4249 18.9849 23.9549 18.4549C24.4849 17.9249 24.7499 17.2732 24.7499 16.4999C24.7499 15.7266 24.4849 15.075 23.9549 14.5449C23.4249 14.0149 22.7732 13.7499 21.9999 13.7499C21.2266 13.7499 20.575 14.0149 20.0449 14.5449C19.5149 15.075 19.2499 15.7266 19.2499 16.4999C19.2499 17.2732 19.5149 17.9249 20.0449 18.4549C20.575 18.9849 21.2266 19.2499 21.9999 19.2499ZM10.9999 39.4166C10.7402 39.4166 10.5225 39.3286 10.3468 39.1527C10.1711 38.9768 10.0833 38.7588 10.0833 38.4987C10.0833 38.2386 10.1711 38.021 10.3468 37.8459C10.5225 37.6708 10.7402 37.5832 10.9999 37.5832H32.9999C33.2596 37.5832 33.4774 37.6712 33.653 37.8472C33.8287 38.0231 33.9166 38.2411 33.9166 38.5012C33.9166 38.7612 33.8287 38.9788 33.653 39.1539C33.4774 39.329 33.2596 39.4166 32.9999 39.4166H10.9999Z"
              fill="#1D6DE6"
            />
          </svg>
          <div>
            <p className="searched-place text-[15px] md:text-[16px] lg:text-[17px] xl:text-[19px] 2xl:text-[20px]">
              {formData?.address?.selected_city?.name}
            </p>
            <div className="flex items-center gap-x-[10px] mt-[6px]">
              <p className="searched-available-spot text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">
                Available Spots:
              </p>
              <p className="available-count text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">
                {formData?.address?.selected_city?.count}
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onNextStep(e);
            }}
          >
            <Row>
              <Col xs={{ span: 24 }}>
                <Input
                  placeholder="Enter Name here"
                  className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                  onChange={(e) => {
                    handleInputChange("business_name", e.target.value);
                  }}
                  value={formData?.business_name}
                  maxLength={32}
                  showCount
                  required
                />
              </Col>
              <Radio.Group onChange={onChange} value={value} className="min-w-full">
                <Row className="mt-[20px] lg:mt-[22px]" align="bottom">
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 9 }}
                    className={`mb-[25px] lg:mb-0 rounded-[12px] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[16px] 2xl:rounded-[17px] custom-radio-wrapper flex justify-start items-center  px-[15px] lg:px-[18px] ${
                      value === "email"
                        ? "bg-[#FEFEFE] border border-[#1D6DE6] text-black"
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
                        ? "bg-[#FEFEFE] border border-[#1D6DE6] text-black"
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
                        onChange={(e) => {
                          handleInputChange("email", e.target.value);
                        }}
                        value={formData?.email}
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
                      id="select"
                      className="step-custom-input flex items-center step-custom-select-wrapper px-[10px]"
                    >
                      <select
                        className="w-full countries-custom-dropdown"
                        onChange={handleChange}
                        value={formData?.contact_info?.business_phone?.country_code}
                      >
                        <option value="">Select Country Code</option>
                        {countries?.map((country: any) => (
                          <option key={country.value} value={country.value}>
                            + {country.label}
                          </option>
                        ))}
                      </select>
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
                        onChange={(e) => {
                          handleInputChange("contact_info", {
                            ...formData.contact_info,
                            business_phone: {
                              ...formData.contact_info.business_phone,
                              number: `${e.target.value}`,
                            },
                          });
                        }}
                        value={formData?.contact_info?.business_phone?.number}
                        type="number"
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
                // handleClick={(event: any) => onNextStep(event)}
                type="submit"
              />
              {/* <button >next</button> */}
            </div>
          </form>
        </div>
        <Preview />
      </div>
    </div>
  );
};

export default Step1Form;
