import React from "react";
import AOS from "aos";
import Navbar from "../components/common/Navbar";
import Hero from "../components/landingPage/Hero";
import Footer from "../components/common/Footer";
import Price from "../components/landingPage/Price";
import About from "../components/landingPage/About";
import Faq from "../components/landingPage/Faq";
import circles from "../assets/images/price-circles.png";

const Homepage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="hero-wrapper-margin">
        <Hero />
        <div className="relative">
          <div className="absolute hidden md:block md:right-[3px] lg:right-[10px] xl:right-[25px] 2xl:right-[45px] top-0">
            <img src={circles} alt="circles" className="w-[60%] lg:w-[70%]" />
          </div>
          <Price />
          <About />
        </div>
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
