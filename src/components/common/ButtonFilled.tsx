import React from "react";

const ButtonFilled = ({ text }: any) => {
  return (
    <button className="filled-btn middle-out text-black hover:text-white transition duration-700 ease-in-out delay-100">
      {text}
    </button>
  );
};

export default ButtonFilled;
