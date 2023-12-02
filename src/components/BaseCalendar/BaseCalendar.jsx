/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BaseCalendarRow } from "../BaseCalendarRow";
import "./style.css";

export const BaseCalendar = ({
  className,
  monthClassName,
  monthYearClassName,
  text = "January 2021",
  baseCalendarRowCalendarDateStateAvailableClassName,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassNameOverride,
  baseCalendarRowCalendarDateStateAvailableClassNameOverride,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName,
  baseCalendarRowCalendarDateBaseCalendarDateLabelWrapperClassName,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassNameOverride,
  baseCalendarRowCalendarDateBaseCalendarDateLabelWrapperClassNameOverride,
  baseCalendarRowCalendarDateStateHoverClassName,
  baseCalendarRowCalendarDateStateHoverClassNameOverride,
  baseCalendarRowCalendarDateStateUnavailableClassName,
  baseCalendarRowCalendarDateBaseCalendarDateDivClassName,
  baseCalendarRowCalendarDateStateUnavailableClassNameOverride,
  baseCalendarRowCalendarDateBaseCalendarDateDivClassNameOverride,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName1,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName1,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName2,
  baseCalendarRowCalendarDateStateAdjacentMonthClassName,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName3,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName4,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName2,
  baseCalendarRowCalendarDateBaseCalendarDateText = "27",
  baseCalendarRowCalendarDateStateProp = "adjacent-month",
  baseCalendarRowCalendarDateStateAdjacentMonthClassNameOverride,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName3,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName4,
  baseCalendarRowCalendarDateBaseCalendarDateText1 = "31",
  baseCalendarRowCalendarDateBaseCalendarDateText2 = "29",
  baseCalendarRowCalendarDateStateProp1 = "adjacent-month",
  baseCalendarRowCalendarDateBaseCalendarDateText3 = "28",
  baseCalendarRowCalendarDateStateDayOfWeekClassName,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName5,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName5,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName6,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName6,
  baseCalendarRowCalendarDateStateDayOfWeekClassNameOverride,
  baseCalendarRowCalendarDateBaseCalendarDateText4 = "1",
  baseCalendarRowCalendarDateStateSelectedClassName,
  baseCalendarRowCalendarDateBaseCalendarDateText5 = "30",
  baseCalendarRowCalendarDateStateSelectedClassNameOverride,
  baseCalendarRowCalendarDateStateProp2 = "adjacent-month",
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName7,
  baseCalendarRowCalendarDateBaseCalendarDateWrapperClassName,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName7,
  baseCalendarRowCalendarDateStateProp3 = "adjacent-month",
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName8,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName8,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName9,
  baseCalendarRowCalendarDateBaseCalendarDateWrapperClassNameOverride,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName10,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName11,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName9,
  baseCalendarRowCalendarDateBaseCalendarDateText6 = "2",
  baseCalendarRowCalendarDateBaseCalendarDateText7 = "3",
  baseCalendarRowCalendarDateDivClassName,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName10,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName11,
  baseCalendarRowCalendarDateBaseCalendarDateText8 = "7",
  baseCalendarRowCalendarDateBaseCalendarDateText9 = "5",
  baseCalendarRowCalendarDateBaseCalendarDateText10 = "4",
  baseCalendarRowCalendarDateDivClassNameOverride,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName12,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName12,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName13,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName13,
  baseCalendarRowCalendarDateStateAvailableClassName1,
  baseCalendarRowCalendarDateBaseCalendarDateText11 = "8",
  baseCalendarRowCalendarDateStateAvailableClassName2,
  baseCalendarRowCalendarDateBaseCalendarDateText12 = "6",
  baseCalendarRowCalendarDateStateAvailableClassName3,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName14,
  baseCalendarRowCalendarDateStateAvailableClassName4,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName14,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName15,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName15,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName16,
  baseCalendarRowCalendarDateStateAvailableClassName5,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName17,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName18,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName16,
  baseCalendarRowCalendarDateBaseCalendarDateText13 = "9",
  baseCalendarRowCalendarDateBaseCalendarDateText14 = "10",
  baseCalendarRowCalendarDateStateAvailableClassName6,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName17,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName18,
  baseCalendarRowCalendarDateBaseCalendarDateText15 = "14",
  baseCalendarRowCalendarDateBaseCalendarDateText16 = "12",
  baseCalendarRowCalendarDateBaseCalendarDateText17 = "11",
  baseCalendarRowCalendarDateStateAvailableClassName7,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName19,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName19,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName20,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName20,
  baseCalendarRowCalendarDateStateAvailableClassName8,
  baseCalendarRowCalendarDateBaseCalendarDateText18 = "15",
  baseCalendarRowCalendarDateStateAvailableClassName9,
  baseCalendarRowCalendarDateBaseCalendarDateText19 = "13",
  baseCalendarRowCalendarDateStateAvailableClassName10,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName21,
  baseCalendarRowCalendarDateStateAvailableClassName11,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName21,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName22,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName22,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName23,
  baseCalendarRowCalendarDateStateAvailableClassName12,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName24,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName25,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName23,
  baseCalendarRowCalendarDateBaseCalendarDateText20 = "16",
  baseCalendarRowCalendarDateBaseCalendarDateText21 = "17",
  baseCalendarRowCalendarDateStateAvailableClassName13,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName24,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName25,
  baseCalendarRowCalendarDateBaseCalendarDateText22 = "21",
  baseCalendarRowCalendarDateBaseCalendarDateText23 = "19",
  baseCalendarRowCalendarDateBaseCalendarDateText24 = "18",
  baseCalendarRowCalendarDateStateAvailableClassName14,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName26,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName26,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName27,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName27,
  baseCalendarRowCalendarDateStateAvailableClassName15,
  baseCalendarRowCalendarDateBaseCalendarDateText25 = "22",
  baseCalendarRowCalendarDateStateAvailableClassName16,
  baseCalendarRowCalendarDateBaseCalendarDateText26 = "20",
  baseCalendarRowCalendarDateStateAvailableClassName17,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName28,
  baseCalendarRowCalendarDateStateAvailableClassName18,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName28,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName29,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName29,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName30,
  baseCalendarRowCalendarDateStateAvailableClassName19,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName31,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName32,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName30,
  baseCalendarRowCalendarDateBaseCalendarDateText27 = "23",
  baseCalendarRowCalendarDateBaseCalendarDateText28 = "24",
  baseCalendarRowCalendarDateStateProp4 = "available",
  baseCalendarRowCalendarDateStateAvailableClassName20,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName31,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName32,
  baseCalendarRowCalendarDateBaseCalendarDateText29 = "28",
  baseCalendarRowCalendarDateBaseCalendarDateText30 = "26",
  baseCalendarRowCalendarDateStateProp5 = "available",
  baseCalendarRowCalendarDateBaseCalendarDateText31 = "25",
  baseCalendarRowCalendarDateStateAvailableClassName21,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName33,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName33,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName34,
  baseCalendarRowCalendarDateStateProp6 = "available",
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName34,
  baseCalendarRowCalendarDateStateAvailableClassName22,
  baseCalendarRowCalendarDateStateProp7 = "available",
  baseCalendarRowCalendarDateBaseCalendarDateText32 = "29",
  baseCalendarRowCalendarDateStateAvailableClassName23,
  baseCalendarRowCalendarDateBaseCalendarDateText33 = "27",
  baseCalendarRowCalendarDateStateAvailableClassName24,
  baseCalendarRowCalendarDateStateProp8 = "available",
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName35,
  baseCalendarRowCalendarDateStateAvailableClassName25,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName35,
  baseCalendarRowCalendarDateStateProp9 = "available",
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName36,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName36,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName37,
  baseCalendarRowCalendarDateStateAvailableClassName26,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName38,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName39,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName37,
  baseCalendarRowCalendarDateBaseCalendarDateText34 = "30",
  baseCalendarRowCalendarDateBaseCalendarDateText35 = "31",
  baseCalendarRowCalendarDateStateAvailableClassName27,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName38,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName39,
  baseCalendarRowCalendarDateBaseCalendarDateText36 = "4",
  baseCalendarRowCalendarDateBaseCalendarDateText37 = "2",
  baseCalendarRowCalendarDateBaseCalendarDateText38 = "1",
  baseCalendarRowCalendarDateStateAvailableClassName28,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName40,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName40,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName41,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName41,
  baseCalendarRowCalendarDateStateAvailableClassName29,
  baseCalendarRowCalendarDateBaseCalendarDateText39 = "5",
  baseCalendarRowCalendarDateStateAvailableClassName30,
  baseCalendarRowCalendarDateBaseCalendarDateText40 = "3",
  baseCalendarRowCalendarDateStateAvailableClassName31,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName42,
  baseCalendarRowCalendarDateStateAvailableClassName32,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName42,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName43,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName43,
  baseCalendarRowCalendarDateStateProp10 = "available",
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName44,
  baseCalendarRowCalendarDateStateAvailableClassName33,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName45,
  baseCalendarRowCalendarDateBaseCalendarDateLabelClassName46,
  baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName44,
  baseCalendarRowCalendarDateBaseCalendarDateText41 = "6",
}) => {
  return (
    <div className={`base-calendar ${className}`}>
      <div className={`month ${monthClassName}`}>
        <div className={`month-year ${monthYearClassName}`}>{text}</div>
      </div>
      <div className="date-grid">
        <BaseCalendarRow
          calendarDateBaseCalendarDateBaseCalendarDateClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName2
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName1={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName2={
            baseCalendarRowCalendarDateBaseCalendarDateLabelWrapperClassNameOverride
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName3={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName1
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateLabelWrapperClassName
          }
          calendarDateBaseCalendarDateDivClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassNameOverride}
          calendarDateBaseCalendarDateDivClassNameOverride={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName4}
          calendarDateBaseCalendarDateLabelClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName2}
          calendarDateBaseCalendarDateLabelClassName1={baseCalendarRowCalendarDateBaseCalendarDateDivClassNameOverride}
          calendarDateBaseCalendarDateLabelClassName2={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName}
          calendarDateBaseCalendarDateLabelClassName3={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName1}
          calendarDateBaseCalendarDateLabelClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateLabelClassName3
          }
          calendarDateBaseCalendarDateLabelWrapperClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassNameOverride
          }
          calendarDateBaseCalendarDateLabelWrapperClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateDivClassName
          }
          calendarDateBaseCalendarDateText="M"
          calendarDateBaseCalendarDateText1="T"
          calendarDateBaseCalendarDateText2="W"
          calendarDateBaseCalendarDateText3="T"
          calendarDateBaseCalendarDateText4="F"
          calendarDateBaseCalendarDateText5="S"
          calendarDateBaseCalendarDateText6="S"
          calendarDateStateAdjacentMonthClassName={baseCalendarRowCalendarDateStateHoverClassNameOverride}
          calendarDateStateAvailableClassName={baseCalendarRowCalendarDateStateAdjacentMonthClassName}
          calendarDateStateAvailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassNameOverride}
          calendarDateStateHoverClassName={baseCalendarRowCalendarDateStateAvailableClassName}
          calendarDateStateHoverClassNameOverride={baseCalendarRowCalendarDateStateUnavailableClassName}
          calendarDateStateProp="day-of-week"
          calendarDateStateProp1="day-of-week"
          calendarDateStateProp2="day-of-week"
          calendarDateStateProp3="day-of-week"
          calendarDateStateProp4="day-of-week"
          calendarDateStateProp5="day-of-week"
          calendarDateStateProp6="day-of-week"
          calendarDateStateUnavailableClassName={baseCalendarRowCalendarDateStateHoverClassName}
          calendarDateStateUnavailableClassNameOverride={baseCalendarRowCalendarDateStateUnavailableClassNameOverride}
          className="base-calendar-row-instance"
        />
        <BaseCalendarRow
          calendarDateBaseCalendarDateBaseCalendarDateClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName9
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName1={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName3
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName2={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName6
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName3={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName8
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName5
          }
          calendarDateBaseCalendarDateDivClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName6}
          calendarDateBaseCalendarDateDivClassNameOverride={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName11}
          calendarDateBaseCalendarDateLabelClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName9}
          calendarDateBaseCalendarDateLabelClassName1={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName7}
          calendarDateBaseCalendarDateLabelClassName2={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName5}
          calendarDateBaseCalendarDateLabelClassName3={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName8}
          calendarDateBaseCalendarDateLabelClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateLabelClassName10
          }
          calendarDateBaseCalendarDateLabelWrapperClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName4
          }
          calendarDateBaseCalendarDateLabelWrapperClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName7
          }
          calendarDateBaseCalendarDateText={baseCalendarRowCalendarDateBaseCalendarDateText3}
          calendarDateBaseCalendarDateText1={baseCalendarRowCalendarDateBaseCalendarDateText2}
          calendarDateBaseCalendarDateText2={baseCalendarRowCalendarDateBaseCalendarDateText5}
          calendarDateBaseCalendarDateText3={baseCalendarRowCalendarDateBaseCalendarDateText1}
          calendarDateBaseCalendarDateText4={baseCalendarRowCalendarDateBaseCalendarDateText4}
          calendarDateBaseCalendarDateText5={baseCalendarRowCalendarDateBaseCalendarDateText6}
          calendarDateBaseCalendarDateText6={baseCalendarRowCalendarDateBaseCalendarDateText}
          calendarDateStateAdjacentMonthClassName={baseCalendarRowCalendarDateStateSelectedClassName}
          calendarDateStateAvailableClassName={baseCalendarRowCalendarDateBaseCalendarDateWrapperClassNameOverride}
          calendarDateStateAvailableClassNameOverride={baseCalendarRowCalendarDateStateDayOfWeekClassName}
          calendarDateStateHoverClassName={baseCalendarRowCalendarDateStateAdjacentMonthClassNameOverride}
          calendarDateStateHoverClassNameOverride={baseCalendarRowCalendarDateStateSelectedClassNameOverride}
          calendarDateStateProp="adjacent-month"
          calendarDateStateProp1={baseCalendarRowCalendarDateStateProp}
          calendarDateStateProp2={baseCalendarRowCalendarDateStateProp1}
          calendarDateStateProp3={baseCalendarRowCalendarDateStateProp2}
          calendarDateStateProp4={baseCalendarRowCalendarDateStateProp3}
          calendarDateStateProp5="available"
          calendarDateStateProp6="available"
          calendarDateStateUnavailableClassName={baseCalendarRowCalendarDateStateDayOfWeekClassNameOverride}
          calendarDateStateUnavailableClassNameOverride={baseCalendarRowCalendarDateBaseCalendarDateWrapperClassName}
          className="base-calendar-row-instance"
        />
        <BaseCalendarRow
          calendarDateBaseCalendarDateBaseCalendarDateClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName16
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName1={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName10
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName2={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName13
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName3={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName15
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName12
          }
          calendarDateBaseCalendarDateDivClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName13}
          calendarDateBaseCalendarDateDivClassNameOverride={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName18}
          calendarDateBaseCalendarDateLabelClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName16}
          calendarDateBaseCalendarDateLabelClassName1={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName14}
          calendarDateBaseCalendarDateLabelClassName2={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName12}
          calendarDateBaseCalendarDateLabelClassName3={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName15}
          calendarDateBaseCalendarDateLabelClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateLabelClassName17
          }
          calendarDateBaseCalendarDateLabelWrapperClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName11
          }
          calendarDateBaseCalendarDateLabelWrapperClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName14
          }
          calendarDateBaseCalendarDateText={baseCalendarRowCalendarDateBaseCalendarDateText10}
          calendarDateBaseCalendarDateText1={baseCalendarRowCalendarDateBaseCalendarDateText9}
          calendarDateBaseCalendarDateText2={baseCalendarRowCalendarDateBaseCalendarDateText12}
          calendarDateBaseCalendarDateText3={baseCalendarRowCalendarDateBaseCalendarDateText8}
          calendarDateBaseCalendarDateText4={baseCalendarRowCalendarDateBaseCalendarDateText11}
          calendarDateBaseCalendarDateText5={baseCalendarRowCalendarDateBaseCalendarDateText13}
          calendarDateBaseCalendarDateText6={baseCalendarRowCalendarDateBaseCalendarDateText7}
          calendarDateStateAdjacentMonthClassName={baseCalendarRowCalendarDateStateAvailableClassName2}
          calendarDateStateAvailableClassName={baseCalendarRowCalendarDateStateAvailableClassName5}
          calendarDateStateAvailableClassNameOverride={baseCalendarRowCalendarDateDivClassNameOverride}
          calendarDateStateHoverClassName={baseCalendarRowCalendarDateDivClassName}
          calendarDateStateHoverClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName3}
          calendarDateStateProp="available"
          calendarDateStateProp1="available"
          calendarDateStateProp2="available"
          calendarDateStateProp3="available"
          calendarDateStateProp4="available"
          calendarDateStateProp5="available"
          calendarDateStateProp6="available"
          calendarDateStateUnavailableClassName={baseCalendarRowCalendarDateStateAvailableClassName1}
          calendarDateStateUnavailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName4}
          className="base-calendar-row-instance"
        />
        <BaseCalendarRow
          calendarDateBaseCalendarDateBaseCalendarDateClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName23
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName1={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName17
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName2={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName20
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName3={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName22
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName19
          }
          calendarDateBaseCalendarDateDivClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName20}
          calendarDateBaseCalendarDateDivClassNameOverride={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName25}
          calendarDateBaseCalendarDateLabelClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName23}
          calendarDateBaseCalendarDateLabelClassName1={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName21}
          calendarDateBaseCalendarDateLabelClassName2={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName19}
          calendarDateBaseCalendarDateLabelClassName3={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName22}
          calendarDateBaseCalendarDateLabelClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateLabelClassName24
          }
          calendarDateBaseCalendarDateLabelWrapperClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName18
          }
          calendarDateBaseCalendarDateLabelWrapperClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName21
          }
          calendarDateBaseCalendarDateText={baseCalendarRowCalendarDateBaseCalendarDateText17}
          calendarDateBaseCalendarDateText1={baseCalendarRowCalendarDateBaseCalendarDateText16}
          calendarDateBaseCalendarDateText2={baseCalendarRowCalendarDateBaseCalendarDateText19}
          calendarDateBaseCalendarDateText3={baseCalendarRowCalendarDateBaseCalendarDateText15}
          calendarDateBaseCalendarDateText4={baseCalendarRowCalendarDateBaseCalendarDateText18}
          calendarDateBaseCalendarDateText5={baseCalendarRowCalendarDateBaseCalendarDateText20}
          calendarDateBaseCalendarDateText6={baseCalendarRowCalendarDateBaseCalendarDateText14}
          calendarDateStateAdjacentMonthClassName={baseCalendarRowCalendarDateStateAvailableClassName9}
          calendarDateStateAvailableClassName={baseCalendarRowCalendarDateStateAvailableClassName12}
          calendarDateStateAvailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName7}
          calendarDateStateHoverClassName={baseCalendarRowCalendarDateStateAvailableClassName6}
          calendarDateStateHoverClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName10}
          calendarDateStateProp="available"
          calendarDateStateProp1="available"
          calendarDateStateProp2="available"
          calendarDateStateProp3="available"
          calendarDateStateProp4="available"
          calendarDateStateProp5="available"
          calendarDateStateProp6="available"
          calendarDateStateUnavailableClassName={baseCalendarRowCalendarDateStateAvailableClassName8}
          calendarDateStateUnavailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName11}
          className="base-calendar-row-instance"
        />
        <BaseCalendarRow
          calendarDateBaseCalendarDateBaseCalendarDateClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName30
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName1={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName24
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName2={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName27
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName3={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName29
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName26
          }
          calendarDateBaseCalendarDateDivClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName27}
          calendarDateBaseCalendarDateDivClassNameOverride={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName32}
          calendarDateBaseCalendarDateLabelClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName30}
          calendarDateBaseCalendarDateLabelClassName1={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName28}
          calendarDateBaseCalendarDateLabelClassName2={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName26}
          calendarDateBaseCalendarDateLabelClassName3={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName29}
          calendarDateBaseCalendarDateLabelClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateLabelClassName31
          }
          calendarDateBaseCalendarDateLabelWrapperClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName25
          }
          calendarDateBaseCalendarDateLabelWrapperClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName28
          }
          calendarDateBaseCalendarDateText={baseCalendarRowCalendarDateBaseCalendarDateText24}
          calendarDateBaseCalendarDateText1={baseCalendarRowCalendarDateBaseCalendarDateText23}
          calendarDateBaseCalendarDateText2={baseCalendarRowCalendarDateBaseCalendarDateText26}
          calendarDateBaseCalendarDateText3={baseCalendarRowCalendarDateBaseCalendarDateText22}
          calendarDateBaseCalendarDateText4={baseCalendarRowCalendarDateBaseCalendarDateText25}
          calendarDateBaseCalendarDateText5={baseCalendarRowCalendarDateBaseCalendarDateText27}
          calendarDateBaseCalendarDateText6={baseCalendarRowCalendarDateBaseCalendarDateText21}
          calendarDateStateAdjacentMonthClassName={baseCalendarRowCalendarDateStateAvailableClassName16}
          calendarDateStateAvailableClassName={baseCalendarRowCalendarDateStateAvailableClassName19}
          calendarDateStateAvailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName14}
          calendarDateStateHoverClassName={baseCalendarRowCalendarDateStateAvailableClassName13}
          calendarDateStateHoverClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName17}
          calendarDateStateProp="available"
          calendarDateStateProp1="available"
          calendarDateStateProp2="available"
          calendarDateStateProp3="available"
          calendarDateStateProp4="available"
          calendarDateStateProp5="available"
          calendarDateStateProp6="available"
          calendarDateStateUnavailableClassName={baseCalendarRowCalendarDateStateAvailableClassName15}
          calendarDateStateUnavailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName18}
          className="base-calendar-row-instance"
        />
        <BaseCalendarRow
          calendarDateBaseCalendarDateBaseCalendarDateClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName37
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName1={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName31
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName2={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName34
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName3={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName36
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName33
          }
          calendarDateBaseCalendarDateDivClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName34}
          calendarDateBaseCalendarDateDivClassNameOverride={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName39}
          calendarDateBaseCalendarDateLabelClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName37}
          calendarDateBaseCalendarDateLabelClassName1={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName35}
          calendarDateBaseCalendarDateLabelClassName2={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName33}
          calendarDateBaseCalendarDateLabelClassName3={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName36}
          calendarDateBaseCalendarDateLabelClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateLabelClassName38
          }
          calendarDateBaseCalendarDateLabelWrapperClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName32
          }
          calendarDateBaseCalendarDateLabelWrapperClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName35
          }
          calendarDateBaseCalendarDateText={baseCalendarRowCalendarDateBaseCalendarDateText31}
          calendarDateBaseCalendarDateText1={baseCalendarRowCalendarDateBaseCalendarDateText30}
          calendarDateBaseCalendarDateText2={baseCalendarRowCalendarDateBaseCalendarDateText33}
          calendarDateBaseCalendarDateText3={baseCalendarRowCalendarDateBaseCalendarDateText29}
          calendarDateBaseCalendarDateText4={baseCalendarRowCalendarDateBaseCalendarDateText32}
          calendarDateBaseCalendarDateText5={baseCalendarRowCalendarDateBaseCalendarDateText34}
          calendarDateBaseCalendarDateText6={baseCalendarRowCalendarDateBaseCalendarDateText28}
          calendarDateStateAdjacentMonthClassName={baseCalendarRowCalendarDateStateAvailableClassName23}
          calendarDateStateAvailableClassName={baseCalendarRowCalendarDateStateAvailableClassName26}
          calendarDateStateAvailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName21}
          calendarDateStateHoverClassName={baseCalendarRowCalendarDateStateAvailableClassName20}
          calendarDateStateHoverClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName24}
          calendarDateStateProp="available"
          calendarDateStateProp1={baseCalendarRowCalendarDateStateProp4}
          calendarDateStateProp2={baseCalendarRowCalendarDateStateProp5}
          calendarDateStateProp3={baseCalendarRowCalendarDateStateProp8}
          calendarDateStateProp4={baseCalendarRowCalendarDateStateProp9}
          calendarDateStateProp5={baseCalendarRowCalendarDateStateProp7}
          calendarDateStateProp6={baseCalendarRowCalendarDateStateProp6}
          calendarDateStateUnavailableClassName={baseCalendarRowCalendarDateStateAvailableClassName22}
          calendarDateStateUnavailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName25}
          className="base-calendar-row-instance"
        />
        <BaseCalendarRow
          calendarDateBaseCalendarDateBaseCalendarDateClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName44
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName1={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName38
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName2={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName41
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassName3={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName43
          }
          calendarDateBaseCalendarDateBaseCalendarDateClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName40
          }
          calendarDateBaseCalendarDateDivClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName41}
          calendarDateBaseCalendarDateDivClassNameOverride={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName46}
          calendarDateBaseCalendarDateLabelClassName={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName44}
          calendarDateBaseCalendarDateLabelClassName1={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName42}
          calendarDateBaseCalendarDateLabelClassName2={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName40}
          calendarDateBaseCalendarDateLabelClassName3={baseCalendarRowCalendarDateBaseCalendarDateLabelClassName43}
          calendarDateBaseCalendarDateLabelClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateLabelClassName45
          }
          calendarDateBaseCalendarDateLabelWrapperClassName={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName39
          }
          calendarDateBaseCalendarDateLabelWrapperClassNameOverride={
            baseCalendarRowCalendarDateBaseCalendarDateBaseCalendarDateClassName42
          }
          calendarDateBaseCalendarDateText={baseCalendarRowCalendarDateBaseCalendarDateText38}
          calendarDateBaseCalendarDateText1={baseCalendarRowCalendarDateBaseCalendarDateText37}
          calendarDateBaseCalendarDateText2={baseCalendarRowCalendarDateBaseCalendarDateText40}
          calendarDateBaseCalendarDateText3={baseCalendarRowCalendarDateBaseCalendarDateText36}
          calendarDateBaseCalendarDateText4={baseCalendarRowCalendarDateBaseCalendarDateText39}
          calendarDateBaseCalendarDateText5={baseCalendarRowCalendarDateBaseCalendarDateText41}
          calendarDateBaseCalendarDateText6={baseCalendarRowCalendarDateBaseCalendarDateText35}
          calendarDateStateAdjacentMonthClassName={baseCalendarRowCalendarDateStateAvailableClassName30}
          calendarDateStateAvailableClassName={baseCalendarRowCalendarDateStateAvailableClassName33}
          calendarDateStateAvailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName28}
          calendarDateStateHoverClassName={baseCalendarRowCalendarDateStateAvailableClassName27}
          calendarDateStateHoverClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName31}
          calendarDateStateProp={baseCalendarRowCalendarDateStateProp10}
          calendarDateStateProp1="adjacent-month"
          calendarDateStateProp2="adjacent-month"
          calendarDateStateProp3="adjacent-month"
          calendarDateStateProp4="adjacent-month"
          calendarDateStateProp5="adjacent-month"
          calendarDateStateProp6="adjacent-month"
          calendarDateStateUnavailableClassName={baseCalendarRowCalendarDateStateAvailableClassName29}
          calendarDateStateUnavailableClassNameOverride={baseCalendarRowCalendarDateStateAvailableClassName32}
          className="base-calendar-row-instance"
        />
      </div>
    </div>
  );
};

BaseCalendar.propTypes = {
  text: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText: PropTypes.string,
  baseCalendarRowCalendarDateStateProp: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText1: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText2: PropTypes.string,
  baseCalendarRowCalendarDateStateProp1: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText3: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText4: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText5: PropTypes.string,
  baseCalendarRowCalendarDateStateProp2: PropTypes.string,
  baseCalendarRowCalendarDateStateProp3: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText6: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText7: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText8: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText9: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText10: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText11: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText12: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText13: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText14: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText15: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText16: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText17: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText18: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText19: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText20: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText21: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText22: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText23: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText24: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText25: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText26: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText27: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText28: PropTypes.string,
  baseCalendarRowCalendarDateStateProp4: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText29: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText30: PropTypes.string,
  baseCalendarRowCalendarDateStateProp5: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText31: PropTypes.string,
  baseCalendarRowCalendarDateStateProp6: PropTypes.string,
  baseCalendarRowCalendarDateStateProp7: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText32: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText33: PropTypes.string,
  baseCalendarRowCalendarDateStateProp8: PropTypes.string,
  baseCalendarRowCalendarDateStateProp9: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText34: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText35: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText36: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText37: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText38: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText39: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText40: PropTypes.string,
  baseCalendarRowCalendarDateStateProp10: PropTypes.string,
  baseCalendarRowCalendarDateBaseCalendarDateText41: PropTypes.string,
};
