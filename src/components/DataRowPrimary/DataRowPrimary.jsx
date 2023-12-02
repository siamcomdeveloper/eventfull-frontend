/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DataRowPrimary = ({
  className,
  divClassName,
  text = "label 1",
  divClassNameOverride,
  text1 = "label 2",
  divClassName1,
  text2 = "label 3 right",
  divClassName2,
  text3 = "label 4 right",
}) => {
  return (
    <div className={`data-row-primary ${className}`}>
      <div className={`label ${divClassName}`}>{text}</div>
      <div className={`label ${divClassNameOverride}`}>{text1}</div>
      <div className={`label-right ${divClassName1}`}>{text2}</div>
      <div className={`label-right ${divClassName2}`}>{text3}</div>
    </div>
  );
};

DataRowPrimary.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
