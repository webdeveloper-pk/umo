import React from "react";
import AOS from "aos";
import Navbar from "../components/common/Navbar";
import Hero from "../components/landingPage/Hero";
import Footer from "../components/common/Footer";
import Price from "../components/landingPage/Price";
import About from "../components/landingPage/About";
import Faq from "../components/landingPage/Faq";

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
        <Price />
        <About />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
