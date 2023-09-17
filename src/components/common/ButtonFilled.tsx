import React from "react";

const ButtonFilled = ({ text, handleClick }: any) => {
  return (
    <button
      className="filled-btn middle-out text-white hover:text-black transition duration-700 ease-in-out delay-100"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
