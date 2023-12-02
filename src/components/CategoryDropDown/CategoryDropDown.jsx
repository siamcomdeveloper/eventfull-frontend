/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const CategoryDropDown = ({ className, categoryDropDownClassName, spanClassName }) => {
  return (
    <div className={`category-drop-down ${className}`}>
      <div className={`category-drop-down-group-wrapper group-wrapper${categoryDropDownClassName}`}>
        <div className="category-drop-down-group">
          <div className="category-drop-down-overlap">
            <div className="category-drop-down-planner">
              <div className="category-drop-down-text-wrapper-4"><a href="/vendors/?type=make-up&location=" className="main-category">Make-up</a></div>

              <p className="category-drop-down-text-wrapper-5">
                <a href="/vendors/?type=make-up&location=" className="sub-category"><span className={`${spanClassName}`}>Bridal<br /></span></a>
                <a href="/vendors/?type=make-up&location=" className="sub-category"><span className={`${spanClassName}`}>Fashion<br /></span></a>
                <a href="/vendors/?type=make-up&location=" className="sub-category"><span className={`${spanClassName}`}>Beauty<br /></span></a>
                <a href="/vendors/?type=make-up&location=" className="sub-category"><span className={`${spanClassName}`}>Special Effects<br /></span></a>
              </p>

            </div>
            <div className="category-drop-down-planner-2">
              <div className="category-drop-down-text-wrapper-6"><a href="/vendors/?type=planner&location=" className="main-category">Planner</a></div>
              <p className="category-drop-down-text-wrapper-5">
                <a href="/vendors/?type=planner&location=" className="sub-category"><span className={`${spanClassName}`}>Wedding<br /></span></a>
                <a href="/vendors/?type=planner&location=" className="sub-category"><span className={`${spanClassName}`}>Corporate Event<br /></span></a>
                <a href="/vendors/?type=planner&location=" className="sub-category"><span className={`${spanClassName}`}>Social Event<br /></span></a>
                <a href="/vendors/?type=planner&location=" className="sub-category"><span className={`${spanClassName}`}>House Party<br /></span></a>
              </p>

            </div>
          </div>
          <div className="category-drop-down-catering">
            <div className="category-drop-down-text-wrapper-7"><a href="/vendors/?type=catering&location=" className="main-category">Catering</a></div>

            <p className="category-drop-down-text-wrapper-5">
              <a href="/vendors/?type=catering&location=" className="sub-category"><span className={`${spanClassName}`}>Buffet<br /></span></a>
              <a href="/vendors/?type=catering&location=" className="sub-category"><span className={`${spanClassName}`}>Food Stations<br /></span></a>
              <a href="/vendors/?type=catering&location=" className="sub-category"><span className={`${spanClassName}`}>Cocktail Receptions<br /></span></a>
              <a href="/vendors/?type=catering&location=" className="sub-category"><span className={`${spanClassName}`}>Outdoor BBQ<br /></span></a>
            </p>

          </div>
          <div className="category-drop-down-photography">
            <div className="category-drop-down-text-wrapper-8"><a href="/vendors/?type=photography&location=" className="main-category">Photography</a></div>

            <p className="category-drop-down-text-wrapper-5">
              <a href="/vendors/?type=photography&location=" className="sub-category"><span className={`${spanClassName}`}>Wedding<br /></span></a>
              <a href="/vendors/?type=photography&location=" className="sub-category"><span className={`${spanClassName}`}>Portrait<br /></span></a>
              <a href="/vendors/?type=photography&location=" className="sub-category"><span className={`${spanClassName}`}>Commercial<br /></span></a>
              <a href="/vendors/?type=photography&location=" className="sub-category"><span className={`${spanClassName}`}>Event<br /></span></a>
            </p>

          </div>
          <div className="category-drop-down-overlap-group-2">
            <div className="category-drop-down-decoration">
              <div className="category-drop-down-text-wrapper-9"><a href="/vendors/?type=decoration&location=" className="main-category">Decoration</a></div>
            
              <p className="category-drop-down-text-wrapper-5">
                <a href="/vendors/?type=decoration&location=" className="sub-category"><span className={`${spanClassName}`}>Balloon<br /></span></a>
                <a href="/vendors/?type=decoration&location=" className="sub-category"><span className={`${spanClassName}`}>Floral<br /></span></a>
                <a href="/vendors/?type=decoration&location=" className="sub-category"><span className={`${spanClassName}`}>Furniture<br /></span></a>
                <a href="/vendors/?type=decoration&location=" className="sub-category"><span className={`${spanClassName}`}>Signage and Banners<br /></span></a>
              </p>

            </div>
            <div className="category-drop-down-venue">
              <div className="category-drop-down-text-wrapper-10"><a href="/vendors/?type=venue&location=" className="main-category">Venue</a></div>

              <p className="category-drop-down-hotel-winery-park">
                <a href="/vendors/?type=venue&location=" className="sub-category"><span className={`${spanClassName}`}>Hotel<br /></span></a>
                <a href="/vendors/?type=venue&location=" className="sub-category"><span className={`${spanClassName}`}>Winery<br /></span></a>
                <a href="/vendors/?type=venue&location=" className="sub-category"><span className={`${spanClassName}`}>Park<br /></span></a>
                <a href="/vendors/?type=venue&location=" className="sub-category"><span className={`${spanClassName}`}>Castle<br /></span></a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
