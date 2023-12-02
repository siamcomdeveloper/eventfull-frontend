/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { EighteenArrowright47 } from "../../icons/EighteenArrowright47";
import { EighteenPlus15 } from "../../icons/EighteenPlus15";
import { Icon18Minus3 } from "../../icons/Icon18Minus3";
import "./style.css";

export const Button = ({
  type,
  size,
  stateProp,
  icon,
  iconOnly,
  className,
  buttonPrimaryIconClassName,
  text = "label",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary",
    size: size || "medium",
    state: stateProp || "default",
    icon: icon || false,
    iconOnly: iconOnly || false,
  });

  return (
    <button
      className={`button ${state.size} icon-only-${state.iconOnly} ${state.type} icon-${state.icon} ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {(!state.icon || (state.iconOnly && state.type === "secondary")) && (
        <div className={`label ${buttonPrimaryIconClassName}`}>
          {!state.iconOnly && <>{text}</>}

          {state.iconOnly && ["default", "hover", "inactive"].includes(state.state) && (
            <EighteenPlus15
              className={`${state.size === "small" ? "class" : state.size === "extra-small" ? "class-2" : "class-3"}`}
              color={state.state === "inactive" ? "#7C8DB0" : "#605DEC"}
            />
          )}

          {state.state === "destructive" && state.icon && (
            <Icon18Minus3
              className={`${state.size === "small" ? "class" : state.size === "extra-small" ? "class-2" : "class-3"}`}
            />
          )}
        </div>
      )}

      {!state.iconOnly && state.icon && (
        <>
          <div className="text-wrapper">{text}</div>
          <EighteenArrowright47
            className="element-arrowright"
            color={
              state.type === "primary" && ["default", "destructive", "hover"].includes(state.state)
                ? "#FAFAFA"
                : state.state === "inactive"
                ? "#7C8DB0"
                : state.state === "hover" && state.type === "tertiary"
                ? "#1513A0"
                : state.state === "destructive" && ["secondary", "tertiary"].includes(state.type)
                ? "#EB5757"
                : "#605DEC"
            }
          />
        </>
      )}

      {((state.iconOnly && state.state === "default" && state.type === "tertiary") ||
        (state.iconOnly && state.state === "hover" && state.type === "tertiary") ||
        (state.iconOnly && state.state === "inactive" && state.type === "tertiary") ||
        (state.iconOnly && state.type === "primary")) && (
        <EighteenPlus15
          className={`${state.size === "small" ? "class" : state.size === "extra-small" ? "class-2" : "class-3"}`}
          color={
            state.state === "inactive"
              ? "#7C8DB0"
              : state.type === "tertiary" && ["default", "hover"].includes(state.state)
              ? "#605DEC"
              : "#F6F6FE"
          }
        />
      )}

      {state.iconOnly && state.state === "destructive" && state.type === "tertiary" && (
        <Icon18Minus3
          className={`${state.size === "small" ? "class" : state.size === "extra-small" ? "class-2" : "class-3"}`}
        />
      )}
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["large", "extra-small", "medium", "small"]),
  stateProp: PropTypes.oneOf(["destructive", "hover", "inactive", "default"]),
  icon: PropTypes.bool,
  iconOnly: PropTypes.bool,
  text: PropTypes.string,
};
