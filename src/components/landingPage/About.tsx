import React from "react";
import playButton from "../../assets/images/play-btn.png";
import blueCircle from "../../assets/images/blue-circle.png";

const About = () => {
  return (
    <div id="about">
      <div className="homepage-container mx-auto px-4 md:px-8 xl:px-10 relative">
        <div
          className="absolute left-[4px] md:left-[8px] lg:left-[25px] xl:left-[50px] 2xl:left-[80px] bottom-[20px]"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="3000"
          data-aos-offset="300"
        >
          <img
            src={blueCircle}
            alt="box"
            className="w-[40%] md:w-[70%] lg:w-[100%]"
          />
        </div>
        <div
          className="mx-auto pt-[50px] lg:pt-[60px] xl:pt-[85px] 2xl:pt-[100px] w-full about-wrapper"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="landing-section-title text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] text-center mb-[20px] lg:mb-[30px]">
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
