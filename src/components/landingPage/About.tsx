import React from "react";

const About = () => {
  return (
    <div>
      <div className="homepage-container mx-auto px-4 md:px-8 xl:px-10">
        <div
          className="mx-auto pt-[50px] lg:pt-[60px] xl:pt-[85px] 2xl:pt-[100px] pb-[40px] xl:pb-[65px] 2xl:pb-[80px] w-full about-wrapper"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="font-poppins text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] text-black uppercase text-center mb-[20px] md:mb-[30px]">
            About US
          </p>
          <p className="px-[14px] lg:px-0 text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] custom-font-400 text-[#444] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            dapibus ante mauris, a posuere erat facilisis at. Proin enim ex,
            vulputate sed ipsum vitae, porttitor cursus enim. Duis id ex porta,
            pulvinar mi sit amet, suscipit orci. Sed tempor lorem ut elementum
            porta. Nunc ac iaculis diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
