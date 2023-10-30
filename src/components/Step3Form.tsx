import React from "react";
import { Row, Col, Input, Upload, Button, message } from "antd";
import ButtonFilled from "./common/ButtonFilled";
import logo from "../assets/images/card-logo.png";
import rightLogo from "../assets/images/card-right-logo.png";
import cutter from "../assets/images/step-card-cutter.png";
import Preview from "./preview/Preview";

const Step3Form = ({ onNextStep, onBackStep, formData, handleInputChange }: any) => {
  const [checker, setChecker] = React.useState(false);

  const fileProps = {
    name: "file",
    multiple: false,
    beforeUpload: () => {
      return false;
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        let reader = new FileReader();
        reader.readAsDataURL(info.file);
        handleInputChange("logo", info.file);
        // setAdData((prevData: any) => ({
        //   ...prevData,
        //   files: [...prevData.files, info.file],
        // }));
      }
    },
  };

  return (
    <div className="md:px-[20px] lg:px-auto">
      <div>
        <p className="form-input-title text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] ml-[10px] xl:ml-[30px] mb-[15px]">
          Percentage Off
        </p>
        <Row>
          <Col>
            <div className="w-full flex justify-center md:justify-start text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">
              {["05", "10", "25", "50"].map((val, id) => {
                return (
                  <button
                    className={`percent-btn mr-[13px] mb-[20px] lg:mb-[25px] 2xl:mb-[30px] border border-[#e3e3e3] hover:border-[#1D6DE6] ${
                      formData?.percentage_off === val ? `border-[#1D6DE6] activeBtn` : ""
                    }`}
                    key={id}
                    onClick={() => {
                      handleInputChange("percentage_off", val);
                      setChecker(false);
                    }}
                  >
                    {val}%
                  </button>
                );
              })}
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 11 }} lg={{ span: 6 }} xl={{ span: 5 }} xxl={{ span: 5 }}>
            <div className="mb-[20px] md:mb-0">
              <Input
                placeholder="Custom Number"
                className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                type="number"
                onChange={(e) => {
                  handleInputChange("percentage_off", e.target.value);
                  setChecker(true);
                }}
                value={checker ? formData?.percentage_off : ""}
                maxLength={3}
                max={999}
                showCount
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className=" flex flex-col lg:flex-row lg:justify-between items-start gap-y-[40px] gap-x-[20px]">
        <div className="w-[100%] lg:w-[44.5%]">
          <form>
            <Row>
              <p className="form-input-title text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] ml-[10px] xl:ml-[30px] mb-[15px]">
                How much a customer should spend?
              </p>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
                xxl={{ span: 24 }}
                className="mb-[20px] xl:mb-[23px]"
              >
                <Input
                  placeholder="Enter here"
                  className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                  onChange={(e) => {
                    handleInputChange("min_spend", e.target.value);
                  }}
                  value={formData?.min_spend}
                  type="number"
                />
              </Col>
            </Row>
            <Row>
              <p className="form-input-title text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] ml-[10px] xl:ml-[30px] mb-[15px]">
                Upload a Logo
              </p>
              <Col xs={{ span: 24 }} className="w-full">
                <div>
                  <Upload {...fileProps} multiple={false} showUploadList={false} className="min-w-full">
                    <Button className="min-w-full upload-custom upload-border">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          className="w-[40px] h-[40px]"
                        >
                          <path
                            d="M23.45 37.4001V19.1001L18.7 23.8501L17.9 23.1001L24 17.0001L30.1 23.1001L29.3 23.8501L24.55 19.1001V37.4001H23.45ZM10.6 18.1501V13.3001C10.6 12.5409 10.8602 11.9011 11.3807 11.3807C11.9011 10.8603 12.5408 10.6001 13.3 10.6001H34.7C35.4592 10.6001 36.099 10.8603 36.6194 11.3807C37.1398 11.9011 37.4 12.5409 37.4 13.3001V18.1501H36.3V13.3001C36.3 12.9001 36.1333 12.5334 35.8 12.2001C35.4667 11.8668 35.1 11.7001 34.7 11.7001H13.3C12.9 11.7001 12.5333 11.8668 12.2 12.2001C11.8667 12.5334 11.7 12.9001 11.7 13.3001V18.1501H10.6Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 uppercase upload-text text-[14px] lg:text-[15px] 2xl:text-[16px]">
                        Upload
                      </span>
                    </Button>
                  </Upload>
                </div>
              </Col>
            </Row>
            <div className="flex items-center gap-x-[20px] mt-[30px] lg:mt-[40px]">
              <button className="back-btn" onClick={(event) => onBackStep(event)}>
                <span className="back-btn-inner">Back</span>
              </button>
              <ButtonFilled
                // text="PAY NOW"
                text="next"
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

export default Step3Form;
