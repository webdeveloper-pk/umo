import React from "react";

const ButtonFilled = ({ text, handleClick, style }: any) => {
  return (
    <button
      className="filled-btn middle-out text-[#FEDB0D] hover:text-[#1D6DE6] transition duration-700 ease-in-out delay-100"
      onClick={handleClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
