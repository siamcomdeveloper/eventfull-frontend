/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementStarHalfFilled = ({
  className,
  overlapGroupClassName,
  subtractClassName,
  subtract = "/img/subtract-1.svg",
}) => {
  return (
    <div className={`element-star-half-filled ${className}`}>
      <div className={`subtract-wrapper ${overlapGroupClassName}`}>
        <img className={`subtract ${subtractClassName}`} alt="Subtract" src={subtract} />
      </div>
    </div>
  );
};

ElementStarHalfFilled.propTypes = {
  subtract: PropTypes.string,
};
