/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { BaseCalendarDate } from "../BaseCalendarDate";
import "./style.css";

export const CalendarDate = ({
  stateProp,
  className,
  baseCalendarDateBaseCalendarDateClassName,
  baseCalendarDateLabelClassName,
  baseCalendarDateText = "S",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "available",
  });

  return (
    <div
      className={`calendar-date ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <BaseCalendarDate
        className={baseCalendarDateBaseCalendarDateClassName}
        labelClassName={baseCalendarDateLabelClassName}
        text={baseCalendarDateText}
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "available") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
        };
    }
  }

  if (state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "adjacent-month",
        };

      case "click":
        return {
          state: "selected",
        };
    }
  }

  if (state.state === "adjacent-month") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
        };
    }
  }

  return state;
}

CalendarDate.propTypes = {
  stateProp: PropTypes.oneOf(["day-of-week", "available", "selected", "adjacent-month", "unavailable", "hover"]),
  baseCalendarDateText: PropTypes.string,
};
