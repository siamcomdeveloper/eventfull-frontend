/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementStarUnfilled = ({ className, starClassName, star = "/img/star-1-21.svg" }) => {
  return (
    <div className={`element-star-unfilled ${className}`}>
      <img className={`star-2 ${starClassName}`} alt="Star" src={star} />
    </div>
  );
};

ElementStarUnfilled.propTypes = {
  star: PropTypes.string,
};
