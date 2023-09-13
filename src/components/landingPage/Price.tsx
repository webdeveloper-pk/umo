import React from "react";
import PriceCard from "../common/PriceCard";

const Price = () => {
  return (
    <div className="homepage-container mx-auto px-4 md:px-8 lg:px-[25px] xl:px-[30px]">
      <div className="w-full xl:w-[75%] 2xl:w-[75%] price-wrapper mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[30px] gap-x-[50px] xl:gap-x-[60px] 2xl:gap-x-[100px] mt-[50px] lg:mt-[60px] xl:mt-[85px] 2xl:mt-[100px]">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <PriceCard title="1000 Leaflets" price1="£29.99" price2="£19.99" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <PriceCard title="1000 Leaflets" price1="£29.99" price2="£19.99" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <PriceCard title="1000 Leaflets" price1="£29.99" price2="£19.99" />
        </div>
      </div>
    </div>
  );
};

export default Price;
