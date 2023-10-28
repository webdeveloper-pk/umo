import React from "react";
import { Link } from "react-router-dom";
import scanner from "../assets/images/scanner.png";
import ButtonFilled from "./common/ButtonFilled";
import hero from "../assets/images/hero.png";
import logo from "../assets/images/card-logo.png";
import rightLogo from "../assets/images/card-right-logo.png";
import { useAppSelector } from "services/hooks/hooks";
import { QRCodeSVG } from "qrcode.react";
import { formatDate } from "services/utils/formatDate";

const Step5Form = () => {
  const formData = useAppSelector((state) => state.inputFormData.data);
  const logoImg: any = formData?.configuration?.logo || null;
  // console.log('formData?.address?.social_media?.facebook::: ', formData?.address?.social_media?.facebook);
  const qrCodePreferenceMappings: any = {
    email: formData.business_email,
    address: formData.address?.plain_address,
    facebook: formData.address?.social_media?.facebook,
    instagram: formData.address?.social_media?.insta,
    linkedin: formData.address?.social_media?.linkedln,
    twitter: formData.address?.social_media?.twitter,
    // phone: {`${formData.business_phone?.country_code}+${formData.business_phone?.number}`}
  };
  const formattedDate = formatDate(formData?.date);
  return (
    <div className="mt-[20px]">
      <div className="flex flex-col lg:flex-row items-center gap-y-[0px] xl:gap-x-[0px] my-[25px] md:my-[40px] lg:my-[50px] justify-center lg:px-[20px] xl:px-0">
        <div className="flex justify-start relative">
          <img src={hero} alt="hero" className="w-[100%] md:w-[80%] lg:w-[90%] xl:w-[90%] 2xl:w-[100%] mx-auto" />
          <div>
            <div className="absolute card-left-position top-[12px] md:top-[20px] lg:top-[15px] xl:top-[18px] 2xl:top-[22px] left-[24px] md:left-[95px] lg:left-[60px] xl:left-[70px] 2xl:left-[50px]">
              <div className="">
                <img src={logo} alt="logo" className="w-[50px] lg:w-[40px] 2xl:w-[60px] card-logo-width" />
              </div>
              <div className="mt-[7px] xl:mt-[10px] 2xl:mt-[15px]">
                <p className="card-title min-h-[30px] lg:min-h-[40px] 2xl:min-h-[0px] w-[80%] md:w-[70%] xl:w-[60%]">
                  {formData?.business_name}
                </p>
              </div>
              {formData?.address?.plain_address ? (
                <p className="card-phone-text w-[80%] md:w-[70%] xl:w-[60%] mt-[3px] 2xl:mt-0">
                  {formData?.address?.plain_address}
                </p>
              ) : (
                <div className="final-address-loading">
                  <div className="light-gray-line1 mt-[4px]"></div>
                  <div className="light-gray-line2 mt-[4px] 2xl:mt-[8px]"></div>
                </div>
              )}
              <div className="final-off-text-wrapper w-[80%] md:w-[70%] xl:w-[60%]">
                {formData?.configuration?.percentage_off ? (
                  <div className="">
                    <p className="card-off-text">{formData?.configuration?.percentage_off}% Off</p>
                  </div>
                ) : (
                  <div className="final-step-card-off-text-margin-loading flex flex-col justify-center">
                    <div className="light-yellow-line1"></div>
                    <div className="light-yellow-line2 mt-[4px] 2xl:mt-[8px]"></div>
                  </div>
                )}
              </div>
              {formData?.business_phone?.country_code ? (
                <div className="flex items-center gap-x-[10px] 2xl:gap-x-[15px] mt-[5px] md:mt-[1px] 2xl:mt-[5px] w-[80%] md:w-[70%] xl:w-[60%]">
                  <div className="card-phone-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      className="w-[15px] h-[15px] md:w-[14px] md:h-[14px] xl:w-[19px] xl:h-[19px]"
                    >
                      <path
                        d="M14.5065 15.0721C13.237 15.0721 11.9357 14.7542 10.6025 14.1185C9.26931 13.4828 8.03072 12.5906 6.88674 11.4418C5.74276 10.2929 4.85292 9.05436 4.21723 7.726C3.58152 6.39763 3.26367 5.09871 3.26367 3.82923C3.26367 3.59919 3.33897 3.4075 3.48957 3.25415C3.64017 3.10079 3.82842 3.02411 4.05432 3.02411H5.91654C6.1212 3.02411 6.2998 3.08855 6.45234 3.21742C6.60487 3.3463 6.70816 3.51162 6.76221 3.71338L7.13581 5.509C7.17058 5.71945 7.1643 5.90336 7.11699 6.06072C7.06969 6.21807 6.98619 6.34695 6.86648 6.44735L5.21422 7.9881C5.52315 8.54899 5.86466 9.07006 6.23875 9.5513C6.61282 10.0325 7.01176 10.4884 7.43556 10.919C7.87289 11.3563 8.34351 11.763 8.84743 12.139C9.35136 12.515 9.90453 12.87 10.5069 13.2041L12.1172 11.5648C12.2398 11.4326 12.3776 11.3455 12.5306 11.3035C12.6836 11.2615 12.8528 11.253 13.0382 11.2781L14.6224 11.6025C14.827 11.6527 14.9931 11.7557 15.1205 11.9116C15.2479 12.0676 15.3116 12.2464 15.3116 12.4482V14.2814C15.3116 14.5073 15.235 14.6956 15.0816 14.8462C14.9283 14.9968 14.7366 15.0721 14.5065 15.0721ZM4.86089 7.28145L6.30607 5.9521C6.35433 5.91349 6.38571 5.8604 6.40019 5.79283C6.41467 5.72524 6.41226 5.66249 6.39296 5.60458L6.05844 4.0088C6.03914 3.93157 6.00536 3.87365 5.95709 3.83503C5.90882 3.79642 5.84607 3.77711 5.76884 3.77711H4.22374C4.16583 3.77711 4.11756 3.79642 4.07894 3.83503C4.04033 3.87365 4.02102 3.92191 4.02102 3.97983C4.0355 4.49438 4.11611 5.03162 4.26284 5.59155C4.40958 6.15147 4.60893 6.71476 4.86089 7.28145ZM11.2237 13.5574C11.7325 13.8093 12.2748 13.9957 12.8506 14.1164C13.4265 14.237 13.9282 14.3017 14.3559 14.3104C14.4138 14.3104 14.4621 14.2911 14.5007 14.2525C14.5393 14.2139 14.5586 14.1656 14.5586 14.1077V12.5959C14.5586 12.5186 14.5393 12.4559 14.5007 12.4076C14.4621 12.3594 14.4042 12.3256 14.3269 12.3063L12.9339 12.021C12.876 12.0017 12.8253 11.9993 12.7818 12.0138C12.7384 12.0282 12.6926 12.0596 12.6443 12.1079L11.2237 13.5574Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="card-phone-text">
                    {formData?.business_phone?.country_code} {formData?.business_phone?.number}
                  </p>
                </div>
              ) : (
                <div className="final-contact-wrapper-loading">
                  <div className="light-gray-line1 mt-[4px]"></div>
                  <div className="light-gray-line2 mt-[4px] 2xl:mt-[8px]"></div>
                </div>
              )}
            </div>
            <div className="absolute card-right-position top-[13px] xl:top-[20px] 2xl:top-[30px] right-[-15px] md:right-[50px] lg:right-[20px] xl:right-[35px] 2xl:right-[39px]">
              <div className="flex justify-center right-logo-wrapper">
                <div className="right-logo-image">
                  {logoImg !== null ? (
                    <img
                      src={URL.createObjectURL(logoImg)}
                      alt="logo"
                      className="object-cover rounded-full w-full h-full"
                    />
                  ) : (
                    <div className="final-step-card-right-logo-image-outer-loading">
                      <div className="right-logo-image rounded-full bg-white"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-[10px] md:mt-[15px] lg:mt-[10px] xl:mt-[20px] 2xl:mt-[38px]">
                <button className="card-button ">UMHOO16</button>
                <p className="card-date mt-[8px] md:mt-[10px] lg:mt-[9px] 2xl:mt-[11px] text-center">{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block hero-mid-margin w-[25px] 2xl:h-[320px] hero-mid-div py-[20px] rounded-[8px] bg-[#F9F9F9]"></div>
        <div className="block lg:hidden  h-[20px] w-[90%] md:w-[70%] mx-[30px] rounded-[8px] bg-[#F9F9F9]"></div>
        <div className="scanner-wrapper p-[10px] lg:p-[5px] 2xl:p-[20px] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center final-qr-wrapper">
            {/* <img
            src={scanner}
            alt="scanner"
            className="w-[170px] md:w-[250px] lg:w-[100%] 2xl:w-auto"
          /> */}
            <QRCodeSVG
              value={qrCodePreferenceMappings[formData.qrCodePreference]}
              size={128}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"L"}
              includeMargin={false}
              className="w-[80%] h-[80%]"
            />
          </div>
          <div className="text-center text-black text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] custom-font-500 ">
            {/* -mt-[10px] lg:-mt-[20px] */}
            SCAN ME
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[30px] lg:mt-[35px]">
        <Link to="/">
          <ButtonFilled text="All done" />
        </Link>
      </div>
    </div>
  );
};

export default Step5Form;
