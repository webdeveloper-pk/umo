import React from "react";
import { Tilt } from "react-tilt";

const PriceCard = ({ title, price1, price2 }: any) => {
  return (
    <Tilt className="Tilt" options={{ max: 20 }}>
      <div className="border border-[#F1F1F1] rounded-[10px] lg:rounded-[14px] py-[17px] px-[20px] md:px-[28px] uppercase price-card">
        <p
          className="price-title text-center md:text-left text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] mb-[11px]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {title}
        </p>
        <p
          className="description-text text-center md:text-left text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] mb-[11px]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          WAS
          <s>
            <span className="mx-1 description-text">{price1}</span>
          </s>
          NOW
          <span className="mx-1 price-new-price">{price2}</span>
        </p>
        <p
          className="price-get text-center md:text-left text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          get
        </p>
      </div>
    </Tilt>
  );
};

export default PriceCard;
