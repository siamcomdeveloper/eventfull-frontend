/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { BaseCheckbox } from "../BaseCheckbox";
import "./style.css";

export const Checkbox = ({ stateProp, active, label, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "unselected",
    active: active || true,
    label: label || false,
  });

  return (
    <div
      className={`checkbox label-${state.label} ${state.state} active-${state.active} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {!state.label && ["mixed", "selected"].includes(state.state) && (
        <BaseCheckbox className={`${!state.active ? "class-3" : "class-4"}`} />
      )}

      {state.label && (
        <>
          <div
            className="div"
            onClick={() => {
              dispatch("click_538");
            }}
          >
            {["mixed", "selected"].includes(state.state) && (
              <BaseCheckbox className={`${!state.active ? "class-3" : "class-4"}`} />
            )}
          </div>
          <div className="text-wrapper">label</div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.active === true && state.label === false && state.state === "unselected") {
    switch (action) {
      case "click":
        return {
          active: true,
          label: false,
          state: "selected",
        };
    }
  }

  if (state.active === true && state.label === false && state.state === "selected") {
    switch (action) {
      case "click":
        return {
          active: true,
          label: false,
          state: "unselected",
        };
    }
  }

  if (state.active === true && state.label === true && state.state === "unselected") {
    switch (action) {
      case "click":
        return {
          active: true,
          label: true,
          state: "selected",
        };

      case "click_538":
        return {
          active: true,
          label: false,
          state: "selected",
        };
    }
  }

  if (state.active === true && state.label === true && state.state === "selected") {
    switch (action) {
      case "click":
        return {
          active: true,
          label: true,
          state: "unselected",
        };

      case "click_538":
        return {
          active: true,
          label: false,
          state: "unselected",
        };
    }
  }

  return state;
}

Checkbox.propTypes = {
  stateProp: PropTypes.oneOf(["mixed", "selected", "unselected"]),
  active: PropTypes.bool,
  label: PropTypes.bool,
};
