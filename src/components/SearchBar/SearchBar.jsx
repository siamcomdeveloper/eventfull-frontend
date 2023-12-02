/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SearchBar = ({ className, text = "Vendor Type", vector = "/img/vector-4.svg" }) => {
  return (
    <div className={`search-bar ${className}`}>
      <div className="frame">
        <div className="frame-2">
          <div className="where">
            <div className="group-wrapper">
              <div className="group">
                <img className="vector" alt="Vector" src="/img/vector-7.svg" />
                <div className="text-wrapper-4">Where</div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="text-wrapper-5">When</div>
              <img className="img" alt="Vector" src="/img/vector-6.svg" />
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="text-wrapper-5">{text}</div>
              <img className="vector-2" alt="Vector" src="/img/vector-5.svg" />
            </div>
          </div>
          <div className="guest-search">
            <div className="overlap-2">
              <div className="guest">
                <div className="overlap-group-2">
                  <div className="text-wrapper-6">Guest</div>
                  <img className="vector-3" alt="Vector" src={vector} />
                </div>
              </div>
              <button className="btn-search">
                <div className="div-wrapper">
                  <div className="text-wrapper-7">Search</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  text: PropTypes.string,
  vector: PropTypes.string,
};
