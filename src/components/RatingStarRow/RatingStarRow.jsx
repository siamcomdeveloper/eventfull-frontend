/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ElementStarFilledWrapper } from "../ElementStarFilledWrapper";
import { ElementStarUnfilledWrapper } from "../ElementStarUnfilledWrapper";
import "./style.css";

export const RatingStarRow = ({
  className,
  elementStarFilledWrapperStarClassName,
  elementStarFilledWrapperElementStarFilledClassName,
  elementStarFilledWrapperStar = "/img/star-1-29.svg",
  elementStarFilledWrapperStarClassNameOverride,
  elementStarFilledWrapperElementStarFilledClassNameOverride,
  elementStarFilledWrapperImg = "/img/star-1-28.svg",
  elementStarFilledWrapperImgClassName,
  elementStarFilledWrapperStarWrapperClassName,
  elementStarFilledWrapperStar1 = "/img/star-1-27.svg",
  elementStarFilledWrapperImgClassNameOverride,
  elementStarFilledWrapperStarWrapperClassNameOverride,
  elementStarFilledWrapperStar2 = "/img/star-1-26.svg",
  override = <ElementStarUnfilledWrapper star="/img/star-1-25.svg" />,
}) => {
  return (
    <div className={`rating-star-row ${className}`}>
      <ElementStarFilledWrapper
        className={elementStarFilledWrapperElementStarFilledClassName}
        star={elementStarFilledWrapperStar}
        starClassName={elementStarFilledWrapperStarClassName}
      />
      <ElementStarFilledWrapper
        className={elementStarFilledWrapperElementStarFilledClassNameOverride}
        star={elementStarFilledWrapperImg}
        starClassName={elementStarFilledWrapperStarClassNameOverride}
      />
      <ElementStarFilledWrapper
        className={elementStarFilledWrapperStarWrapperClassName}
        star={elementStarFilledWrapperStar1}
        starClassName={elementStarFilledWrapperImgClassName}
      />
      <ElementStarFilledWrapper
        className={elementStarFilledWrapperStarWrapperClassNameOverride}
        star={elementStarFilledWrapperStar2}
        starClassName={elementStarFilledWrapperImgClassNameOverride}
      />
      {override}
    </div>
  );
};

RatingStarRow.propTypes = {
  elementStarFilledWrapperStar: PropTypes.string,
  elementStarFilledWrapperImg: PropTypes.string,
  elementStarFilledWrapperStar1: PropTypes.string,
  elementStarFilledWrapperStar2: PropTypes.string,
};
