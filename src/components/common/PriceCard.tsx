import React from "react";

const PriceCard = ({ title, price1, price2 }: any) => {
  return (
    <div className="border border-[#F1F1F1] rounded-[10px] lg:rounded-[14px] py-[17px] px-[20px] md:px-[28px] uppercase price-card">
      <p
        className="text-center md:text-left text-black text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] custom-font-600 mb-[11px]"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {title}
      </p>
      <p
        className="text-center md:text-left text-black text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] custom-font-400 mb-[11px]"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        WAS
        <s>
          <span className="mx-1">{price1}</span>
        </s>
        NOW
        <span className="mx-1 text-medium-blue custom-font-700">{price2}</span>
      </p>
      <p
        className="text-center md:text-left text-black text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] custom-font-700"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        get
      </p>
    </div>
  );
};

export default PriceCard;
