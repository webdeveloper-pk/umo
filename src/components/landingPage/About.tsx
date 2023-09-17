import React from "react";
import playButton from "../../assets/images/play-btn.png";

const About = () => {
  return (
    <div id="about">
      <div className="homepage-container mx-auto px-4 md:px-8 xl:px-10">
        <div
          className="mx-auto pt-[50px] lg:pt-[60px] xl:pt-[85px] 2xl:pt-[100px] pb-[40px] xl:pb-[65px] 2xl:pb-[80px] w-full about-wrapper"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="landing-section-title text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] text-center mb-[20px] md:mb-[30px]">
            About US
          </p>
          <p className="about-description px-[14px] lg:px-0 text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            dapibus ante mauris, a posuere erat facilisis at. Proin enim ex,
            vulputate sed ipsum vitae, porttitor cursus enim. Duis id ex porta,
            pulvinar mi sit amet, suscipit orci. Sed tempor lorem ut elementum
            porta. Nunc ac iaculis diam.
          </p>
          <div>
            <div className="video-wrapper relative min-h-[350px] lg:min-h-[600px] flex justify-center items-center mt-[30px] lg:mt-[40px] 2xl:mt-[50px]">
              <div className="absolute">
                <img
                  src={playButton}
                  alt=""
                  className="w-[100px] h-[100xp] md:w-[140px] md:h-[140xp] xl:w-[160px] xl:h-[160px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
