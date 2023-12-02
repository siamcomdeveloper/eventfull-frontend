/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconArrowDown1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-arrow-down-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.08311 15.8226L12.3131 15.8226L17.9231 15.8226C18.8831 15.8226 19.3631 14.6626 18.6831 13.9826L13.5031 8.80255C12.6731 7.97255 11.3231 7.97255 10.4931 8.80255L8.52311 10.7726L5.31311 13.9826C4.64311 14.6626 5.12311 15.8226 6.08311 15.8226Z"
        fill={color}
      />
    </svg>
  );
};

IconArrowDown1.propTypes = {
  color: PropTypes.string,
};
