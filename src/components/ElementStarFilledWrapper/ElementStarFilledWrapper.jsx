/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementStarFilledWrapper = ({ className, starClassName, star = "/img/star-1-24.svg" }) => {
  return (
    <div className={`element-star-filled-wrapper ${className}`}>
      <img className={`star-3 ${starClassName}`} alt="Star" src={star} />
    </div>
  );
};

ElementStarFilledWrapper.propTypes = {
  star: PropTypes.string,
};
