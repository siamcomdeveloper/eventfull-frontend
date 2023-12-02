/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CalendarDate } from "../CalendarDate";
import "./style.css";

export const BaseCalendarRow = ({
  className,
  calendarDateStateProp = "available",
  calendarDateStateAvailableClassName,
  calendarDateBaseCalendarDateBaseCalendarDateClassName,
  calendarDateBaseCalendarDateLabelClassName,
  calendarDateStateProp1 = "available",
  calendarDateStateAvailableClassNameOverride,
  calendarDateBaseCalendarDateText = "1",
  calendarDateBaseCalendarDateBaseCalendarDateClassNameOverride,
  calendarDateBaseCalendarDateLabelClassNameOverride,
  calendarDateStateProp2 = "available",
  calendarDateStateHoverClassName,
  calendarDateBaseCalendarDateText1 = "1",
  calendarDateBaseCalendarDateLabelWrapperClassName,
  calendarDateBaseCalendarDateDivClassName,
  calendarDateStateProp3 = "available",
  calendarDateStateHoverClassNameOverride,
  calendarDateBaseCalendarDateText2 = "1",
  calendarDateBaseCalendarDateLabelWrapperClassNameOverride,
  calendarDateBaseCalendarDateDivClassNameOverride,
  calendarDateStateProp4 = "available",
  calendarDateStateUnavailableClassName,
  calendarDateBaseCalendarDateText3 = "1",
  calendarDateBaseCalendarDateBaseCalendarDateClassName1,
  calendarDateBaseCalendarDateLabelClassName1,
  calendarDateStateProp5 = "available",
  calendarDateStateUnavailableClassNameOverride,
  calendarDateBaseCalendarDateText4 = "1",
  calendarDateBaseCalendarDateBaseCalendarDateClassName2,
  calendarDateBaseCalendarDateLabelClassName2,
  calendarDateStateProp6 = "available",
  calendarDateStateAdjacentMonthClassName,
  calendarDateBaseCalendarDateText5 = "1",
  calendarDateBaseCalendarDateBaseCalendarDateClassName3,
  calendarDateBaseCalendarDateLabelClassName3,
  calendarDateBaseCalendarDateText6 = "1",
}) => {
  return (
    <div className={`base-calendar-row ${className}`}>
      <CalendarDate
        baseCalendarDateBaseCalendarDateClassName={calendarDateBaseCalendarDateBaseCalendarDateClassName}
        baseCalendarDateLabelClassName={calendarDateBaseCalendarDateLabelClassName}
        baseCalendarDateText={calendarDateBaseCalendarDateText6}
        className={calendarDateStateAvailableClassName}
        stateProp={calendarDateStateProp}
      />
      <CalendarDate
        baseCalendarDateBaseCalendarDateClassName={calendarDateBaseCalendarDateBaseCalendarDateClassNameOverride}
        baseCalendarDateLabelClassName={calendarDateBaseCalendarDateLabelClassNameOverride}
        baseCalendarDateText={calendarDateBaseCalendarDateText}
        className={calendarDateStateAvailableClassNameOverride}
        stateProp={calendarDateStateProp1}
      />
      <CalendarDate
        baseCalendarDateBaseCalendarDateClassName={calendarDateBaseCalendarDateLabelWrapperClassName}
        baseCalendarDateLabelClassName={calendarDateBaseCalendarDateDivClassName}
        baseCalendarDateText={calendarDateBaseCalendarDateText1}
        className={calendarDateStateHoverClassName}
        stateProp={calendarDateStateProp2}
      />
      <CalendarDate
        baseCalendarDateBaseCalendarDateClassName={calendarDateBaseCalendarDateLabelWrapperClassNameOverride}
        baseCalendarDateLabelClassName={calendarDateBaseCalendarDateDivClassNameOverride}
        baseCalendarDateText={calendarDateBaseCalendarDateText2}
        className={calendarDateStateHoverClassNameOverride}
        stateProp={calendarDateStateProp3}
      />
      <CalendarDate
        baseCalendarDateBaseCalendarDateClassName={calendarDateBaseCalendarDateBaseCalendarDateClassName1}
        baseCalendarDateLabelClassName={calendarDateBaseCalendarDateLabelClassName1}
        baseCalendarDateText={calendarDateBaseCalendarDateText3}
        className={calendarDateStateUnavailableClassName}
        stateProp={calendarDateStateProp4}
      />
      <CalendarDate
        baseCalendarDateBaseCalendarDateClassName={calendarDateBaseCalendarDateBaseCalendarDateClassName2}
        baseCalendarDateLabelClassName={calendarDateBaseCalendarDateLabelClassName2}
        baseCalendarDateText={calendarDateBaseCalendarDateText4}
        className={calendarDateStateUnavailableClassNameOverride}
        stateProp={calendarDateStateProp5}
      />
      <CalendarDate
        baseCalendarDateBaseCalendarDateClassName={calendarDateBaseCalendarDateBaseCalendarDateClassName3}
        baseCalendarDateLabelClassName={calendarDateBaseCalendarDateLabelClassName3}
        baseCalendarDateText={calendarDateBaseCalendarDateText5}
        className={calendarDateStateAdjacentMonthClassName}
        stateProp={calendarDateStateProp6}
      />
    </div>
  );
};

BaseCalendarRow.propTypes = {
  calendarDateStateProp: PropTypes.string,
  calendarDateStateProp1: PropTypes.string,
  calendarDateBaseCalendarDateText: PropTypes.string,
  calendarDateStateProp2: PropTypes.string,
  calendarDateBaseCalendarDateText1: PropTypes.string,
  calendarDateStateProp3: PropTypes.string,
  calendarDateBaseCalendarDateText2: PropTypes.string,
  calendarDateStateProp4: PropTypes.string,
  calendarDateBaseCalendarDateText3: PropTypes.string,
  calendarDateStateProp5: PropTypes.string,
  calendarDateBaseCalendarDateText4: PropTypes.string,
  calendarDateStateProp6: PropTypes.string,
  calendarDateBaseCalendarDateText5: PropTypes.string,
  calendarDateBaseCalendarDateText6: PropTypes.string,
};
