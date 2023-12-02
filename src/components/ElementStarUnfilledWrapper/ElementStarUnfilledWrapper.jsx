/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementStarUnfilledWrapper = ({ star = "/img/star-1-23.svg" }) => {
  return (
    <div className="element-star-unfilled-wrapper">
      <img className="star-4" alt="Star" src={star} />
    </div>
  );
};

ElementStarUnfilledWrapper.propTypes = {
  star: PropTypes.string,
};
