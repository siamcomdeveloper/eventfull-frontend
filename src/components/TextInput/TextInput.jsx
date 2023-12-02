/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BaseTextInput } from "../BaseTextInput";
import { ElementEyeShowVisible } from "../ElementEyeShowVisible";
import "./style.css";

export const TextInput = ({
  state,
  icon,
  placeholder,
  helperText,
  className,
  baseTextInputDivClassName,
  baseTextInputText = "Placeholder",
  text = "Helper text",
}) => {
  return (
    <div className={`text-input ${className}`}>
      {((icon === "left" && state === "default") ||
        (icon === "left" && state === "focused") ||
        (icon === "none" && state === "default") ||
        (icon === "none" && state === "focused")) && (
        <BaseTextInput
          className={`${state === "focused" ? "class-4" : "class-5"}`}
          divClassName={baseTextInputDivClassName}
          text={baseTextInputText}
          visible={icon === "none" ? false : undefined}
        />
      )}

      {icon === "right" && ["default", "focused"].includes(state) && (
        <div className={`base-text-input-2 state-1-${state}`}>
          <div className={`label-2 placeholder-${placeholder} state-2-${state}`}>
            {placeholder && <>Placeholder</>}

            {!placeholder && <>Filled</>}
          </div>
          <ElementEyeShowVisible />
        </div>
      )}

      {helperText && ["default", "focused"].includes(state) && (
        <div className="helper-text">
          <div className="helper-text-2">{text}</div>
        </div>
      )}

      {state === "error" && (
        <img
          className="img"
          alt="Base text input"
          src={
            icon === "none" && placeholder && !helperText
              ? "/img/base-text-input-1.svg"
              : icon === "right" && placeholder && !helperText
              ? "/img/base-text-input-4.svg"
              : !placeholder && icon === "left" && !helperText
              ? "/img/base-text-input-6.svg"
              : icon === "none" && !placeholder && !helperText
              ? "/img/base-text-input-7.svg"
              : !placeholder && !helperText && icon === "right"
              ? "/img/base-text-input-10.svg"
              : icon === "left" && placeholder && helperText
              ? "/img/base-text-input-2.svg"
              : placeholder && icon === "none" && helperText
              ? "/img/base-text-input-3.svg"
              : icon === "right" && placeholder && helperText
              ? "/img/base-text-input-5.svg"
              : !placeholder && icon === "left" && helperText
              ? "/img/base-text-input-8.svg"
              : !placeholder && icon === "none" && helperText
              ? "/img/base-text-input-9.svg"
              : icon === "right" && !placeholder && helperText
              ? "/img/base-text-input-11.svg"
              : "/img/base-text-input.svg"
          }
        />
      )}

      {state === "error" && helperText && (
        <div className="helper-text">
          <div className="helper-text-3">{text}</div>
        </div>
      )}
    </div>
  );
};

TextInput.propTypes = {
  state: PropTypes.oneOf(["focused", "error", "default"]),
  icon: PropTypes.oneOf(["none", "right", "left"]),
  placeholder: PropTypes.bool,
  helperText: PropTypes.bool,
  baseTextInputText: PropTypes.string,
  text: PropTypes.string,
};
