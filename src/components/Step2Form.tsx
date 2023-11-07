import React from "react";
import { Row, Col, Input, Radio } from "antd";
import ButtonFilled from "./common/ButtonFilled";
import logo from "../assets/images/card-logo.png";
import rightLogo from "../assets/images/card-right-logo.png";
import cutter from "../assets/images/step-card-cutter.png";
import Preview from "./preview/Preview";

const Step2Form = ({
  onNextStep,
  onBackStep,
  formData,
  handleInputChange,
}: any) => {
  const [value, setValue] = React.useState("address");
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="md:px-[20px] lg:px-auto">
      <Row>
        <Radio.Group onChange={onChange} value={value} className="min-w-full">
          <Row align="bottom">
            <Col
              xs={{ span: 24 }}
              lg={{ span: 9 }}
              xl={{ span: 9 }}
              xxl={{ span: 9 }}
              className={`mb-[25px] lg:mb-0 rounded-[12px] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[16px] 2xl:rounded-[17px] custom-radio-wrapper flex justify-start items-center  px-[15px] lg:px-[18px] ${
                value === "address"
                  ? "bg-[#FEFEFE] border border-[#1D6DE6] text-black"
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
              xxl={{ span: 9, offset: 1 }}
              className={`rounded-[12px] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[16px] 2xl:rounded-[17px] custom-radio-wrapper flex justify-start items-center  px-[15px] lg:px-[18px] ${
                value === "social-media"
                  ? "bg-[#FEFEFE] border border-[#1D6DE6] text-black"
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
                    xxl={{ span: 20 }}
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
                      onChange={(e) => {
                        handleInputChange("contact_info", {
                          ...formData.contact_info,
                          social_media: {
                            ...formData.contact_info.social_media,
                            facebook: `${e.target.value}`,
                          },
                        });
                      }}
                      value={formData?.contact_info?.social_media?.facebook}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 20 }}
                    xl={{ span: 20 }}
                    xxl={{ span: 20 }}
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
                      onChange={(e) => {
                        handleInputChange("contact_info", {
                          ...formData.contact_info,
                          social_media: {
                            ...formData.contact_info.social_media,
                            twitter: `${e.target.value}`,
                          },
                        });
                      }}
                      value={formData?.contact_info?.social_media?.twitter}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 20 }}
                    xl={{ span: 20 }}
                    xxl={{ span: 20 }}
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
                      onChange={(e) => {
                        handleInputChange("contact_info", {
                          ...formData.contact_info,
                          social_media: {
                            ...formData.contact_info.social_media,
                            insta: `${e.target.value}`,
                          },
                        });
                      }}
                      value={formData?.contact_info?.social_media?.insta}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 20 }}
                    xl={{ span: 20 }}
                    xxl={{ span: 20 }}
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
                      onChange={(e) => {
                        handleInputChange("contact_info", {
                          ...formData.contact_info,
                          social_media: {
                            ...formData.contact_info.social_media,
                            linkedln: `${e.target.value}`,
                          },
                        });
                      }}
                      value={formData?.contact_info?.social_media?.linkedln}
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
                  xxl={{ span: 20 }}
                >
                  <p className="form-input-title text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] ml-[10px] xl:ml-[30px] mb-[15px]">
                    Enter Your Address
                  </p>
                  <Input
                    placeholder="Enter Address here"
                    className="step-custom-input px-[12px] lg:px-[16px] xl:px-[24px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                    onChange={(e) => {
                      handleInputChange("address", {
                        ...formData.address,
                        plain_address: `${e.target.value}`,
                      });
                    }}
                    value={formData?.address?.plain_address}
                    type="text"
                    // maxLength={40}
                    // showCount
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
        <Preview />
      </div>
    </div>
  );
};

export default Step2Form;
