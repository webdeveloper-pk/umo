import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div className="homepage-container mx-auto px-4 md:px-8 xl:px-10">
      <div
        className="mb-[50px] 2xl:mb-[60px] w-full faq-wrapper mx-auto"
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <p className="font-poppins text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] text-black uppercase text-center mb-[20px] md:mb-[30px]">
          Faqs
        </p>
        <div>
          <Collapse
            ghost
            accordion
            defaultActiveKey={["1"]}
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              isActive ? (
                <div className="pr-0 md:pr-2 lg:pr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    transform="rotate(180)"
                  >
                    <path
                      d="M16 10L12 14L8 10"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <div className="pr-0 md:pr-2 lg:pr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 10L12 14L8 10"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )
            }
          >
            <Panel
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              key="1"
            >
              <div className="flex flex-row items-start">
                <div className="pb-4 text-[#444] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer dapibus ante m
                </div>
              </div>
            </Panel>
            <Panel
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              key="2"
            >
              <div className="flex flex-row items-start">
                <div className="pb-4 text-[#444] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer dapibus ante m
                </div>
              </div>
            </Panel>
            <Panel
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              key="3"
            >
              <div className="flex flex-row items-start">
                <div className="pb-4 text-[#444] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer dapibus ante m
                </div>
              </div>
            </Panel>
            <Panel
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              key="4"
            >
              <div className="flex flex-row items-start">
                <div className="pb-4 text-[#444] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer dapibus ante m
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Faq;
