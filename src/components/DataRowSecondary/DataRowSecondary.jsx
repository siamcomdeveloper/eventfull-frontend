/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DataRowSecondary = ({
  className,
  hasDiv = true,
  divClassName,
  text = "label 2",
  divClassNameOverride,
  text1 = "label 3 right",
  divClassName1,
  text2 = "label 4 right",
  text3 = "label 1",
  divClassName2,
}) => {
  return (
    <div className={`data-row-secondary ${className}`}>
      {hasDiv && <div className={`text-wrapper ${divClassName2}`}>{text3}</div>}

      <div className={`text-wrapper ${divClassName}`}>{text}</div>
      <div className={`div ${divClassNameOverride}`}>{text1}</div>
      <div className={`div ${divClassName1}`}>{text2}</div>
    </div>
  );
};

DataRowSecondary.propTypes = {
  hasDiv: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
