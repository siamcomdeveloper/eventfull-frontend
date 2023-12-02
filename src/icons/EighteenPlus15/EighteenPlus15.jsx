/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const EighteenPlus15 = ({ color = "#F6F6FE", className }) => {
  return (
    <svg
      className={`eighteen-plus-15 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.25 8.25V3.75C8.25 3.33579 8.58579 3 9 3C9.41421 3 9.75 3.33579 9.75 3.75V8.25L14.25 8.25C14.6642 8.25 15 8.58579 15 9C15 9.41421 14.6642 9.75 14.25 9.75L9.75 9.75V14.25C9.75 14.6642 9.41421 15 9 15C8.58579 15 8.25 14.6642 8.25 14.25V9.75H3.75C3.33579 9.75 3 9.41421 3 9C3 8.58579 3.33579 8.25 3.75 8.25H8.25Z"
        fill={color}
      />
    </svg>
  );
};

EighteenPlus15.propTypes = {
  color: PropTypes.string,
};
