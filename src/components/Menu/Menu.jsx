/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Menu = ({ menuHome, className, divClassName, divClassNameOverride, divClassName1, divClassName2 }) => {
  return (
    <div className={`menu ${className}`}>
      <div className={`div menu-home-${menuHome} ${divClassName}`}><a className="menu-link" href='/'>Home</a></div>
      <div className={`div menu-home-${menuHome} ${divClassNameOverride}`}><a className="menu-link vendor" href='/vendors'>Vendors</a></div>
      <div className={`text-wrapper-2 menu-home-0-${menuHome} ${divClassName1}`}><a className="menu-link" href='/about-us'>About Us</a></div>
      <div className={`text-wrapper-3 menu-home-1-${menuHome} ${divClassName2}`}><a className="menu-link" href='/princing'>Pricing</a></div>
    </div>
  );
};

Menu.propTypes = {
  menuHome: PropTypes.oneOf(["vendors", "default", "home", "about-us", "pricing"]),
};
