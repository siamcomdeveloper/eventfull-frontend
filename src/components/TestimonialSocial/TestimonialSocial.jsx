/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ElementStarUnfilledWrapper } from "../ElementStarUnfilledWrapper";
import { RatingStarRow } from "../RatingStarRow";
import "./style.css";

export const TestimonialSocial = ({
  className,
  avatarClassName,
  avatar = "/img/avatar-3.png",
  textClassName,
  divClassName,
  text = "First Last",
  text1 = "Tokyo, Japan ",
  ratingStarRowElementStarFilledWrapperStarClassName,
  ratingStarRowElementStarFilledWrapperStarClassNameOverride,
  ratingStarRow = <ElementStarUnfilledWrapper star="/img/star-1-30.svg" />,
  ratingStarRowElementStarFilledWrapperImgClassName,
  ratingStarRowElementStarFilledWrapperStar = "/img/star-1-31.svg",
  ratingStarRowElementStarFilledWrapperImgClassNameOverride,
  ratingStarRowElementStarFilledWrapperElementStarFilledClassName,
  ratingStarRowElementStarFilledWrapperImg = "/img/star-1-34.svg",
  ratingStarRowElementStarFilledWrapperStar1 = "/img/star-1-33.svg",
  ratingStarRowElementStarFilledWrapperElementStarFilledClassNameOverride,
  ratingStarRowElementStarFilledWrapperStarWrapperClassName,
  ratingStarRowElementStarFilledWrapperStar2 = "/img/star-1-32.svg",
  ratingStarRowRatingStarRowClassName,
  ratingStarRowElementStarFilledWrapperStarWrapperClassNameOverride,
  text2 = "This is a review of my stay at location where I had a great time. I would definitely recommend using Tripma for your next flight booking. It was easy and seamless. When we had an issue, Tripma support was there to help ",
}) => {
  return (
    <div className={`testimonial-social ${className}`}>
      <img className={`avatar ${avatarClassName}`} alt="Avatar" src={avatar} />
      <div className={`text ${textClassName}`}>
        <div className="user-data">
          <div className={`first-last ${divClassName}`}>{text}</div>
          <p className="p">
            <span className="span">{text1}</span>
            <span className="text-wrapper-8">|</span>
            <span className="span"> April 2019</span>
          </p>
          <RatingStarRow
            className={ratingStarRowRatingStarRowClassName}
            elementStarFilledWrapperElementStarFilledClassName={
              ratingStarRowElementStarFilledWrapperStarWrapperClassNameOverride
            }
            elementStarFilledWrapperElementStarFilledClassNameOverride={
              ratingStarRowElementStarFilledWrapperStarWrapperClassName
            }
            elementStarFilledWrapperImg={ratingStarRowElementStarFilledWrapperStar1}
            elementStarFilledWrapperImgClassName={ratingStarRowElementStarFilledWrapperStarClassNameOverride}
            elementStarFilledWrapperImgClassNameOverride={ratingStarRowElementStarFilledWrapperImgClassNameOverride}
            elementStarFilledWrapperStar={ratingStarRowElementStarFilledWrapperImg}
            elementStarFilledWrapperStar1={ratingStarRowElementStarFilledWrapperStar2}
            elementStarFilledWrapperStar2={ratingStarRowElementStarFilledWrapperStar}
            elementStarFilledWrapperStarClassName={ratingStarRowElementStarFilledWrapperImgClassName}
            elementStarFilledWrapperStarClassNameOverride={ratingStarRowElementStarFilledWrapperStarClassName}
            elementStarFilledWrapperStarWrapperClassName={
              ratingStarRowElementStarFilledWrapperElementStarFilledClassNameOverride
            }
            elementStarFilledWrapperStarWrapperClassNameOverride={
              ratingStarRowElementStarFilledWrapperElementStarFilledClassName
            }
            override={ratingStarRow}
          />
          <p className="p" style={{marginTop: 20}}>
            <span className="text-wrapper-9">{text2}</span>
            <span className="text-wrapper-10">read more...</span>
          </p>
        </div>
      </div>
    </div>
  );
};

TestimonialSocial.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  ratingStarRowElementStarFilledWrapperStar: PropTypes.string,
  ratingStarRowElementStarFilledWrapperImg: PropTypes.string,
  ratingStarRowElementStarFilledWrapperStar1: PropTypes.string,
  ratingStarRowElementStarFilledWrapperStar2: PropTypes.string,
  text2: PropTypes.string,
};
