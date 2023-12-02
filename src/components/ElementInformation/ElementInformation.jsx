/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementInformation = ({
  className,
  overlapGroupClassName,
  unionClassName,
  union = "/img/union-1.svg",
}) => {
  return (
    <div className={`element-information ${className}`}>
      <div className={`union-wrapper ${overlapGroupClassName}`}>
        <img className={`union ${unionClassName}`} alt="Union" src={union} />
      </div>
    </div>
  );
};

ElementInformation.propTypes = {
  union: PropTypes.string,
};
