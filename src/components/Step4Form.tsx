import React from "react";
import { Row, Col, Input, Select } from "antd";
import ButtonFilled from "./common/ButtonFilled";
import logo from "../assets/images/card-logo.png";
import rightLogo from "../assets/images/card-right-logo.png";
import cutter from "../assets/images/step-card-cutter.png";
import Preview from "./Preview";

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

const Step4Form = ({
  onNextStep,
  onBackStep,
  formData,
  handleInputChange,
}: any) => {
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
                  onChange={(e) => {
                    handleInputChange("user_email", e.target.value);
                  }}
                  value={formData?.user_email}
                  type="email"
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
        <Preview />
      </div>
    </div>
  );
};

export default Step4Form;
