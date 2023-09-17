import React from "react";
import { Row, Col, Input, Select } from "antd";
import preview from "../assets/images/hero.png";
import ButtonFilled from "./common/ButtonFilled";

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
    <div>
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
                text="Next"
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
            <div className="mt-[25px] lg:mt-[34px]">
              <img src={preview} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Form;
