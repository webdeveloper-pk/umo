import React from "react";
import { Col, Input, Row } from "antd";
import rightBox from "../../assets/images/blue-box.png";
import leftCircle from "../../assets/images/light-blue-circle.png";

const { TextArea } = Input;

const Contact = () => {
  return (
    <div
      id="contact"
      className="homepage-container mx-auto pl-4 pr-4 md:pl-8 md:pr-8 xl:pl-[30px] xl:pr-[40px] 2xl:pl-[35px] 2xl:pr-[55px] pt-[30px] lg:pt-[40px] xl:pt-[50px] pb-[50px] xl:pb-[70px] 2xl:pb-[80px] relative"
    >
      <div
        className="absolute contact-rightBox"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <img
          src={rightBox}
          alt="box"
          className="w-[70%] md:w-[70%] lg:w-[100%]"
        />
      </div>
      <div
        className="absolute left-[3px] md:left-[15px] lg:left-[20px] xl:left-[50px] bottom-[20px] md:bottom-[10px] lg:bottom-[-5px] xl:bottom-[10px] 2xl:xl:bottom-[20px]"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <img
          src={leftCircle}
          alt="box"
          className="w-[40%] md:w-[70%] lg:w-[100%]"
        />
      </div>
      <div
        className="bg-[#FEDB0D] border border-[#DEDEDE] rounded-[20px] md:rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] 2xl:rounded-[44px] px-[30px] md:px-[50px] xl:px-[60px] 2xl:px-[70px] py-[40px] lg:py-[40px] 2xl:py-[50px] flex flex-col lg:flex-row gap-y-[30px] gap-x-[30px] lg:justify-between relative"
        style={{ zIndex: 99 }}
      >
        <div
          className="w-full lg:w-[49%] xl:w-[44%] lg:mt-[10px] xl:mt-[15px] 2xl:mt-[15px]"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="w-full lg:w-[90%] xl:w-[90%] 2xl:w-[80%] text-center lg:text-left contact-title mb-[20px] xl:mb-[22px] text-[30px] md:text-[36px] lg:etxt-[30px] xl:text-[40px] 2xl:text-[56px]">
            Get our latest
            <span className="custom-font-600 mx-1">
              {" "}
              offer & More news{" "}
            </span>{" "}
            for our platform.
          </p>
          <p className="w-full lg:w-[90%] xl:w-[90%] 2xl:w-[80%] text-center lg:text-left contact-description text-[15px] md:text-[16px] lg:text-[17px] xl:etxt-[18px] 2xl:text-[20px]">
            Dive into our movement. Be the first to know about our innovative
            campaigns, partnerships, and community stories
          </p>
        </div>
        <div
          className="w-[100%] lg:w-[49%] xl:w-[54%]"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Row>
            <Col
              xs={{ span: 24 }}
              md={{ span: 11 }}
              className="mb-[18px] md:mb-0"
            >
              <Input
                placeholder="First Name"
                className="contact-custom-input px-[12px] lg:px-[18px] xl:px-[25px] text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]"
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 11, offset: 2 }}>
              <Input
                placeholder="First Name"
                className="contact-custom-input px-[12px] lg:px-[18px] xl:px-[25px] text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]"
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} className="my-[18px]">
              <Input
                placeholder="Enter Email"
                className="contact-custom-input px-[12px] lg:px-[18px] xl:px-[25px] text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]"
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <TextArea
                rows={4}
                placeholder="Your Message"
                className="contact-custom-input contact-custom-textarea"
              />
            </Col>
          </Row>
          <div className="flex justify-center lg:justify-start mt-[18px]">
            <button className="contact-btn text-[14px] lg:text-[15px] 2xl:text-[16px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
