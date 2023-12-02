/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ThirtyTwoMoneyPriceCost7 } from "../../icons/ThirtyTwoMoneyPriceCost7";
import "./style.css";

export const BaseTextInput = ({ className, visible = true, divClassName, text = "label" }) => {
  return (
    <div className={`base-text-input ${className}`}>
      {visible && <ThirtyTwoMoneyPriceCost7 className="element-money-price-cost" />}

      <div className={`div ${divClassName}`}>{text}</div>
    </div>
  );
};

BaseTextInput.propTypes = {
  visible: PropTypes.bool,
  text: PropTypes.string,
};
