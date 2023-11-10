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
        <p className="landing-section-title text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] text-center mb-[20px] md:mb-[30px]">
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
              header="What sets UMO apart from other marketing platforms?"
              key="1"
            >
              <div className="flex flex-row items-start">
                <div className="pb-4 text-[#444] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
                  UMO isn't just about advertising; it's a movement. While other
                  platforms focus solely on profit, we put community first. By
                  providing discounts through our coupons, businesses can act as
                  local heroes, showing they care and supporting residents as
                  the cost of living rises.
                </div>
              </div>
            </Panel>
            <Panel header="How do UMO leaflets work?" key="2">
              <div className="flex flex-row items-start">
                <div className="pb-4 text-[#444] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
                  UMO leaflets are only distributed if there are 25 businesses
                  signed up for a specific location. This structure is
                  intentional, fostering a sense of collective effort. Once all
                  the spaces are filled with unique business offers, we handle
                  the distribution to key city centres, neighbourhoods, and
                  popular gathering spots. Plus, with our QR code feature,
                  customers can immediately connect with a business's digital
                  presence, enhancing engagement and brand loyalty.
                </div>
              </div>
            </Panel>
            <Panel header="What does UMO cost?" key="3">
              <div className="flex flex-row items-start">
                <div className="pb-4 text-[#444] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
                  The launch price for your business to feature on our leaflet
                  is a competitive £49.99, covering 1000 leaflets. That's a mere
                  5p per leaflet! Not only does this modest investment help you
                  reach potential customers, but it can also be written off as a
                  business expense.
                </div>
              </div>
            </Panel>
            <Panel header="What happens once I’ve paid?" key="4">
              <div className="flex flex-row items-start">
                <div className="pb-4 text-[#444] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
                  We will hold your money once a spot is purchased, and after
                  the 24 additional spots are filled on your leaflet, we will
                  deliver the leaflets within a week to different popular
                  locations. These locations are selected based on what social
                  events or large gatherings are happening that week.
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
