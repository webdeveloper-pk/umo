import React from "react";
import { Link, useNavigate } from "react-router-dom";
import leftBox from "../../assets/images/city-yellow-box.png";
import rightBox from "../../assets/images/city-blue-box.png";
import leftCircle from "../../assets/images/light-blue-circle.png";
import blueCircle from "../../assets/images/blue-circle.png";
import Navbar from "../../components/common/Navbar";
import { Input } from "antd";
import { generateUniqueCode } from "services/utils/generateUniqueCode";

const SlectCity = ({
  search,
  setSearch,
  locationListWithUsedSpotsReducer,
  handleGetLocation,
  handleInputChange,
}: any) => {
  const navigate = useNavigate();
  // console.log("locationListWithUsedSpotsReducer::: ", locationListWithUsedSpotsReducer);
  return (
    <div className="hero-wrapper-margin">
      <Navbar />
      <div className="bg-lighter-white relative">
        <div className="absolute leftBox">
          <img src={leftBox} alt="box" className="" />
        </div>
        <div className="absolute city-rightBox">
          <img
            src={rightBox}
            alt="box"
            className="w-[70%] md:w-[70%] lg:w-[100%]"
          />
        </div>
        <div className="absolute left-[1px] md:left-[10px] lg:left-[15px] xl:left-[30px] 2xl:left-[45px] top-[55%]">
          <img
            src={leftCircle}
            alt="box"
            className="w-[40%] md:w-[70%] lg:w-[100%]"
          />
        </div>
        <div className="absolute left-[3px] md:left-[20px] lg:left-[40px] xl:left-[90px] 2xl:left-[110px] city-blueCircle bottom-[80px]">
          <img
            src={blueCircle}
            alt="box"
            className="w-[40%] md:w-[70%] lg:w-[100%]"
          />
        </div>
        <a
          href="#!"
          className="cursor-pointer fixed hero-help-icon rounded-full border border-[#1D6DE6] bg-[#FEDB0D] flex justify-center items-center"
          style={{ zIndex: 9999 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="81"
            height="81"
            viewBox="0 0 81 81"
            fill="none"
            className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]"
          >
            <path
              d="M19.6009 67.5C18.8286 67.5 18.1812 67.2385 17.6587 66.7155C17.1362 66.1925 16.875 65.5444 16.875 64.7712V53.8562C16.875 52.3554 17.4088 51.0739 18.4765 50.0117C19.5441 48.9494 20.8276 48.4183 22.3269 48.4183H58.6731C60.1724 48.4183 61.4559 48.9526 62.5235 50.0212C63.5912 51.0899 64.125 52.3746 64.125 53.8752V64.7892C64.125 65.5623 63.8638 66.2074 63.3413 66.7244C62.8188 67.2415 62.1714 67.5 61.3991 67.5H19.6009ZM31.3485 42.4471C27.3442 42.4471 23.9309 41.036 21.1085 38.2136C18.2862 35.3913 16.875 31.9779 16.875 27.9735C16.875 23.9692 18.2862 20.5559 21.1085 17.7335C23.9309 14.9112 27.3442 13.5 31.3485 13.5H49.6515C53.6558 13.5 57.0691 14.9112 59.8915 17.7335C62.7138 20.5559 64.125 23.9692 64.125 27.9735C64.125 31.9779 62.7138 35.3913 59.8915 38.2136C57.0691 41.036 53.6558 42.4471 49.6515 42.4471H31.3485ZM20.25 64.125H60.75V53.8702C60.75 53.2644 60.5553 52.7668 60.1659 52.3774C59.7765 51.988 59.2789 51.7933 58.6731 51.7933H22.3269C21.7211 51.7933 21.2235 51.988 20.8341 52.3774C20.4447 52.7668 20.25 53.2644 20.25 53.8702V64.125ZM31.3485 39.0721H49.6515C52.7668 39.0721 55.3954 38.0012 57.5373 35.8594C59.6791 33.7175 60.75 31.0889 60.75 27.9735C60.75 24.8582 59.6791 22.2296 57.5373 20.0877C55.3954 17.9459 52.7668 16.875 49.6515 16.875H31.3485C28.2332 16.875 25.6046 17.9459 23.4627 20.0877C21.3209 22.2296 20.25 24.8582 20.25 27.9735C20.25 31.0889 21.3209 33.7175 23.4627 35.8594C25.6046 38.0012 28.2332 39.0721 31.3485 39.0721ZM31.3462 30.4399C32.0444 30.4399 32.6304 30.2037 33.1042 29.7315C33.578 29.2592 33.8149 28.674 33.8149 27.9758C33.8149 27.2777 33.5787 26.6917 33.1065 26.2179C32.6342 25.7441 32.049 25.5072 31.3508 25.5072C30.6527 25.5072 30.0667 25.7434 29.5929 26.2156C29.1191 26.6879 28.8822 27.2731 28.8822 27.9712C28.8822 28.6694 29.1184 29.2554 29.5907 29.7292C30.0629 30.203 30.6481 30.4399 31.3462 30.4399ZM49.6492 30.4399C50.3473 30.4399 50.9333 30.2037 51.4071 29.7315C51.8809 29.2592 52.1178 28.674 52.1178 27.9758C52.1178 27.2777 51.8816 26.6917 51.4094 26.2179C50.9371 25.7441 50.3519 25.5072 49.6538 25.5072C48.9556 25.5072 48.3696 25.7434 47.8958 26.2156C47.422 26.6879 47.1851 27.2731 47.1851 27.9712C47.1851 28.6694 47.4213 29.2554 47.8935 29.7292C48.3658 30.203 48.951 30.4399 49.6492 30.4399Z"
              fill="#1D6DE6"
            />
          </svg>
        </a>
        <div className="homepage-container mx-auto px-4 md:px-8 xl:px-10 py-[40px] lg:py-[60px] 2xl:py-[60px]">
          <div className="">
            <div
              className="hero-outer-wrapper w-[100%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[80%] mx-auto relative"
              style={{ zIndex: "999" }}
            >
              <div className="hero-inner-wrapper bg-[#FEDB0D] flex flex-col items-center py-[50px] xl:py-[48px] 2xl:py-[56px] px-4 lg:px-[30px] xl:px-[40px] 2xl:px-[50px] relative mt-[10px] mr-[10px] md:ml-[-19px] md:mb-[-19px] md:mt-[19px] md:mr-[19px]">
                <div className="absolute top-[30px] lg:left-[22px] xl:left-[38px] lg:top-[45px] xl:top-[52px]">
                  <div className="flex items-center gap-x-[13px]">
                    <Link to="/">
                      <button className="w-[50px] h-[50px] rounded-full bg-[#1D6DE6] flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15 19L8 12L15 5"
                            stroke="#FEDB0D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </Link>
                    <span className="text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px] custom-font-900 text-[#1D6DE6] uppercase">
                      Back
                    </span>
                  </div>
                </div>
                <p className="sidepage-title text-center text-[28px] md:text-[28px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] mb-[10px] md:mb-[12px] mt-[50px] lg:mt-0">
                  Select a City to Process
                </p>
                <p className="w-full sidepage-descriptions px-[10px] lg:px-0 text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-center">
                  Choose your desired location and tap into a community eager to
                  engage with your brand.
                </p>
                <div className="mt-[25px] lg:mt-[30px] w-full xl:ml-[20px] 2xl:ml-[50px] md:px-[20px] lg:px-auto">
                  <div className="select-input-wrapper md:h-[65px] flex flex-col md:flex-row gap-y-[10px] items-center justify-between pr-[15px] md:pr-[20px] lg:pr-[30px] xl:pr-[40px] py-[20px] md:py-0">
                    <div className="w-full md:w-[45%] lg:w-[55%] xl:w-[60%] 2xl:w-[65%]">
                      <Input
                        placeholder="Enter Location"
                        className="location-input pl-[40px] md:pl-[20px] lg:pl-[30px] xl:pl-[40px] text-[14px] lg:text-[15px] 2xl:text-[16px]"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-[15px] items-center gap-x-[20px] lg:gap-x-[30px]">
                      {/* <button className="current-location flex justify-start items-center gap-x-[10px] py-[8px] px-[12px] md:px-[8px] xl:px-[12px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11.5 20.95V19.9885C9.41672 19.7936 7.69652 19.0177 6.33947 17.6606C4.98242 16.3036 4.20646 14.5834 4.01157 12.5H3.05005C2.90838 12.5 2.78963 12.4521 2.6938 12.3561C2.59797 12.2601 2.55005 12.1412 2.55005 11.9994C2.55005 11.8575 2.59797 11.7388 2.6938 11.6433C2.78963 11.5478 2.90838 11.5 3.05005 11.5H4.01157C4.20646 9.41672 4.98242 7.69652 6.33947 6.33947C7.69652 4.98242 9.41672 4.20646 11.5 4.01157V3.05005C11.5 2.90838 11.548 2.78963 11.644 2.6938C11.7399 2.59797 11.8589 2.55005 12.0007 2.55005C12.1426 2.55005 12.2613 2.59797 12.3568 2.6938C12.4523 2.78963 12.5 2.90838 12.5 3.05005V4.01157C14.5834 4.20646 16.3036 4.98242 17.6606 6.33947C19.0177 7.69652 19.7936 9.41672 19.9885 11.5H20.95C21.0917 11.5 21.2105 11.548 21.3063 11.644C21.4021 11.7399 21.45 11.8589 21.45 12.0007C21.45 12.1426 21.4021 12.2613 21.3063 12.3568C21.2105 12.4523 21.0917 12.5 20.95 12.5H19.9885C19.7936 14.5834 19.0177 16.3036 17.6606 17.6606C16.3036 19.0177 14.5834 19.7936 12.5 19.9885V20.95C12.5 21.0917 12.4521 21.2105 12.3561 21.3063C12.2601 21.4021 12.1412 21.45 11.9994 21.45C11.8575 21.45 11.7388 21.4021 11.6433 21.3063C11.5478 21.2105 11.5 21.0917 11.5 20.95ZM12 19C13.9334 19 15.5834 18.3167 16.95 16.95C18.3167 15.5834 19 13.9334 19 12C19 10.0667 18.3167 8.41672 16.95 7.05005C15.5834 5.68338 13.9334 5.00005 12 5.00005C10.0667 5.00005 8.41672 5.68338 7.05005 7.05005C5.68338 8.41672 5.00005 10.0667 5.00005 12C5.00005 13.9334 5.68338 15.5834 7.05005 16.95C8.41672 18.3167 10.0667 19 12 19ZM12 15C11.175 15 10.4688 14.7063 9.8813 14.1188C9.2938 13.5313 9.00005 12.825 9.00005 12C9.00005 11.175 9.2938 10.4688 9.8813 9.8813C10.4688 9.2938 11.175 9.00005 12 9.00005C12.825 9.00005 13.5313 9.2938 14.1188 9.8813C14.7063 10.4688 15 11.175 15 12C15 12.825 14.7063 13.5313 14.1188 14.1188C13.5313 14.7063 12.825 15 12 15ZM12 14C12.55 14 13.0209 13.8042 13.4125 13.4125C13.8042 13.0209 14 12.55 14 12C14 11.45 13.8042 10.9792 13.4125 10.5875C13.0209 10.1959 12.55 10 12 10C11.45 10 10.9792 10.1959 10.5875 10.5875C10.1959 10.9792 10 11.45 10 12C10 12.55 10.1959 13.0209 10.5875 13.4125C10.9792 13.8042 11.45 14 12 14Z"
                            fill="#1D6DE6"
                          />
                        </svg>
                        <p className="current-location-text text-[14px] lg:text-[15px] 2xl:text-[16px]">
                          Use my current location
                        </p>
                      </button> */}
                      <button
                        className="location-search text-[14px] lg:text-[15px] 2xl:text-[16px]"
                        onClick={() => {
                          handleGetLocation();
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="mt-[30px] xl:mt-[40px]">
                    <p className="searched-text ml-[10px] lg:ml-[20px] xl:ml-[30px]">
                      Searched Results
                    </p>
                    {/* list of all search results */}
                    {locationListWithUsedSpotsReducer?.status === "loading" ? (
                      <>
                        <div className="loading-wrapper">
                          <div className="loading"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        {locationListWithUsedSpotsReducer?.location?.map(
                          (data: any, index: any) => (
                            <div
                              className={`cursor-pointer mt-[17px] searched-list-wrapper flex flex-col gap-y-[15px] md:flex-row md:justify-between md:items-center px-[20px] xl:px-[30px] mb-[15px] py-[20px] md:py-0
                    ${index === 0 ? "bg-[#F5F5F5]" : "bg-[#FCFCFC]"}
                    `}
                              // onClick={() => navigate("/info")}
                            >
                              <div className="flex items-center justify-center md:justify-start gap-x-[20px] 2xl:gap-x-[25px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="44"
                                  height="44"
                                  viewBox="0 0 44 44"
                                  fill="none"
                                >
                                  <path
                                    d="M21.9999 31.3675C25.3305 28.7351 27.8437 26.2119 29.5395 23.798C31.2353 21.3841 32.0833 19.0431 32.0833 16.7749C32.0833 14.8981 31.7407 13.2977 31.0555 11.9738C30.3704 10.65 29.5166 9.57849 28.4941 8.75936C27.4717 7.94025 26.3759 7.34502 25.2067 6.97364C24.0376 6.60227 22.9687 6.41659 21.9999 6.41659C21.0312 6.41659 19.9622 6.60227 18.7931 6.97364C17.6239 7.34502 16.5281 7.94025 15.5057 8.75936C14.4833 9.57849 13.6295 10.65 12.9443 11.9738C12.2592 13.2977 11.9166 14.8981 11.9166 16.7749C11.9166 19.0431 12.7645 21.3841 14.4603 23.798C16.1562 26.2119 18.6694 28.7351 21.9999 31.3675ZM21.9999 33.1128C21.7515 33.1128 21.5094 33.0728 21.2734 32.9929C21.0374 32.913 20.8201 32.7931 20.6214 32.6333C18.2874 30.7788 15.9476 28.4806 13.6018 25.7389C11.2561 22.9971 10.0833 20.0091 10.0833 16.7749C10.0833 14.7649 10.4435 13.0025 11.1639 11.4879C11.8843 9.97325 12.8125 8.70121 13.9485 7.67173C15.0845 6.64222 16.3625 5.8701 17.7825 5.35536C19.2025 4.84062 20.6083 4.58325 21.9999 4.58325C23.3915 4.58325 24.7973 4.84062 26.2173 5.35536C27.6374 5.8701 28.9154 6.64222 30.0514 7.67173C31.1874 8.70121 32.1156 9.97325 32.836 11.4879C33.5564 13.0025 33.9166 14.7649 33.9166 16.7749C33.9166 20.0091 32.7437 22.9971 30.398 25.7389C28.0523 28.4806 25.7124 30.7788 23.3784 32.6333C23.1797 32.7931 22.9624 32.913 22.7264 32.9929C22.4905 33.0728 22.2483 33.1128 21.9999 33.1128ZM21.9999 19.2499C22.7732 19.2499 23.4249 18.9849 23.9549 18.4549C24.4849 17.9249 24.7499 17.2732 24.7499 16.4999C24.7499 15.7266 24.4849 15.075 23.9549 14.5449C23.4249 14.0149 22.7732 13.7499 21.9999 13.7499C21.2266 13.7499 20.575 14.0149 20.0449 14.5449C19.5149 15.075 19.2499 15.7266 19.2499 16.4999C19.2499 17.2732 19.5149 17.9249 20.0449 18.4549C20.575 18.9849 21.2266 19.2499 21.9999 19.2499ZM10.9999 39.4166C10.7402 39.4166 10.5225 39.3286 10.3468 39.1527C10.1711 38.9768 10.0833 38.7588 10.0833 38.4987C10.0833 38.2386 10.1711 38.021 10.3468 37.8459C10.5225 37.6708 10.7402 37.5832 10.9999 37.5832H32.9999C33.2596 37.5832 33.4774 37.6712 33.653 37.8472C33.8287 38.0231 33.9166 38.2411 33.9166 38.5012C33.9166 38.7612 33.8287 38.9788 33.653 39.1539C33.4774 39.329 33.2596 39.4166 32.9999 39.4166H10.9999Z"
                                    fill="#1D6DE6"
                                  />
                                </svg>
                                <div>
                                  <p className="searched-place text-[15px] md:text-[16px] lg:text-[17px] xl:text-[19px] 2xl:text-[20px]">
                                    {data?.location?.location_name}
                                  </p>
                                  <div className="flex items-center gap-x-[10px] mt-[6px]">
                                    <p className="searched-available-spot text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">
                                      Available Spots:
                                    </p>
                                    <p className="available-count text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">
                                      {data?.entry_count}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <button
                                className="searched-select-btn text-[14px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] uppercase"
                                onClick={() => {
                                  handleInputChange(
                                    "location",
                                    data?.location?.id
                                  );
                                  handleInputChange("address", {
                                    selected_city: {
                                      name: data?.location?.location_name,
                                      count: data?.entry_count,
                                    },
                                  });
                                  handleInputChange("umo_code",generateUniqueCode(data?.location?.location_name))
                                  navigate("/info");
                                }}
                              >
                                select
                              </button>
                            </div>
                          )
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlectCity;
