import React from "react";

const ButtonFilled = ({ text, handleClick, style, type }: any) => {
  return (
    <button
      className="filled-btn middle-out text-white hover:text-[#1D6DE6] transition duration-700 ease-in-out delay-100"
      onClick={handleClick}
      style={style}
      type={type ? type : "button"}
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
