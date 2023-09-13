import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 100) {
        const header = document.querySelector("header");
        if (header) {
          header.classList.add("shrink");
        }
      } else {
        const header = document.querySelector("header");
        if (header) {
          header.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`w-full z-[999] px-4 md:px-8 lg:px-[25px] xl:px-[30px] mx-auto border-b border-[#E3E3E3] ${
          navbar ? "mobile-header" : ""
        }`}
      >
        <div className="mx-auto flex flex-col lg:flex-row justify-between homepage-container">
          <div className="flex flex-row justify-between items-center gap-x-4">
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[80px] h-auto md:w-[90px] lg:w-[100px] xl:w-[110px] 2xl:w-[120px]"
                />
              </Link>
            </div>
            <div className="hidden">
              <button
                className="pt-2 rounded-md outline-none focus:none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: "#156CEB" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    style={{ color: "#156CEB" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              className={`flex justify-center items-center pb-6 lg:pb-0 lg:block ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col justify-center items-center h-[80vh] lg:h-[100%] bg-red-100">
                {/* <ul className="flex flex-col lg:flex-row justify-center items-center gap-y-6 gap-x-4 xl:gap-x-5 2xl:gap-x-6 uppercase text-[15px] lg:text-[13px] xl:text-[15px]">
                  <li>
                    <div className="btn-test from-bottom font-normal">
                      <a href="#features">Features</a>
                    </div>
                  </li>
                  <li>
                    <div className="btn-test from-bottom font-normal">
                      <a href="#working">how it works?</a>
                    </div>
                  </li>
                  <li>
                    <div className="btn-test from-bottom font-normal">
                      <a href="#testimonial">testimonial</a>
                    </div>
                  </li>
                  <li>
                    <div className="btn-test from-bottom font-normal">
                      <a href="#prices">prices</a>
                    </div>
                  </li>
                  <li>
                    <div className="btn-test from-bottom font-normal">
                      <a href="#faq">FAQs</a>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
