import React from "react";
import { Row, Col, Input, Select } from "antd";
import ButtonFilled from "./common/ButtonFilled";
// import logo from "../assets/images/card-logo.png";
// import rightLogo from "../assets/images/card-right-logo.png";
// import cutter from "../assets/images/step-card-cutter.png";
import Preview from "./preview/Preview";
import { useAppSelector, useAppDispatch } from "services/hooks/hooks";
import { createCheckoutAction, resetStatus } from "store/slices/createCheckoutSlice";
import SpinnerGrow from "./common/spinners/SpinnerGrow";

const qrCodePreference = [
  {
    value: "email",
    label: "Email",
  },
  {
    value: "address",
    label: "Address",
  },
  {
    value: "facebook",
    label: "Facebook",
  },
  {
    value: "instagram",
    label: "Instagram",
  },
  {
    value: "linkedin",
    label: "Linkedln",
  },
  {
    value: "twitter",
    label: "Twitter",
  },
];

const Step4Form = ({ onNextStep, onBackStep, formData, handleInputChange, setCurrentStep }: any) => {
  const dispatch = useAppDispatch();

  const createCheckoutReducer = useAppSelector((state) => ({
    status: state.createCheckout.status,
    checkout: state.createCheckout.checkout,
    error: state.createCheckout.error,
  }));
  console.log("createCheckoutReducer::: ", createCheckoutReducer);

  React.useEffect(() => {
    if (createCheckoutReducer.status === "succeeded") {
      if (createCheckoutReducer?.checkout?.data?.url) {
        const newWindow = window.open(createCheckoutReducer.checkout.data.url, "_blank");

        if (newWindow) {
          newWindow.opener = null;
        }
      }
      setCurrentStep((prevStep: any) => prevStep + 1);
      dispatch(resetStatus());
    }
  }, [createCheckoutReducer.status, dispatch]);

  return (
    <div className="md:px-[20px] lg:px-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-y-[40px] gap-x-[20px]">
        <div className="w-[100%] lg:w-[44.5%]">
          <form>
            <Row>
              <p className="form-input-title text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] ml-[10px] xl:ml-[30px] mb-[15px]">
                Enter your Email
              </p>
              <Col xs={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
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
                QrCode preference *
              </p>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
                xxl={{ span: 24 }}
                className="step-custom-input flex items-center step-custom-select-wrapper"
              >
                <Select
                  placeholder="Select a QrCode Preference"
                  className="step-custom-select px-[12px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                  options={qrCodePreference}
                  onChange={(value) => {
                    handleInputChange("qrCodePreference", value);
                  }}
                  value={formData?.qrCodePreference}
                  // status="error"
                />
              </Col>
            </Row>
            <div className="flex items-center gap-x-[20px] mt-[30px] lg:mt-[40px]">
              <button className="back-btn" onClick={(event) => onBackStep(event)}>
                <span className="back-btn-inner">Back</span>
              </button>
              <ButtonFilled
                text={
                  <>
                    {createCheckoutReducer.status === "loading" ? (
                      <div className="flex justify-center items-center gap-1">
                        <SpinnerGrow />
                        Loading...
                      </div>
                    ) : (
                      "PAY NOW"
                    )}
                  </>
                }
                handleClick={(event: any) => {
                  dispatch(createCheckoutAction(formData));
                }}
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
