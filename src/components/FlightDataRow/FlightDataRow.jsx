/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DataRowCombined } from "../DataRowCombined";
import { HawaiianAirlines } from "../HawaiianAirlines";
import "./style.css";

export const FlightDataRow = ({
  stateProp,
  className,
  visible = true,
  dataRowCombinedDataRowPrimaryText = "7:00AM - 4:15PM",
  dataRowCombinedDataRowPrimaryDivClassName,
  dataRowCombinedDataRowPrimaryDivClassNameOverride,
  dataRowCombinedDataRowSecondaryText = "2h 45m in HNL",
  dataRowCombinedDataRowPrimaryDataRowPrimaryClassName,
  dataRowCombinedDataRowPrimaryText1 = "$624",
  dataRowCombinedDataRowSecondaryDivClassName,
  dataRowCombinedDataRowSecondaryText1 = "value",
  dataRowCombinedDataRowSecondaryDivClassNameOverride,
  dataRowCombinedDataRowPrimaryDivClassName1,
  dataRowCombinedDataRowPrimaryDivClassName2,
  dataRowCombinedDataRowSecondaryDataRowSecondaryClassName,
  dataRowCombinedDataRowPrimaryText2 = "1 stop",
  dataRowCombinedDataRowSecondaryText2 = "round trip",
  dataRowCombinedDataRowCombinedClassName,
  dataRowCombinedDataRowPrimaryText3 = "16h 45m",
  dataRowCombinedDataRowSecondaryHasDiv,
  dataRowCombinedDataRowSecondaryDivClassName1,
  dataRowCombinedDataRowSecondaryDivClassName2,
  dataRowCombinedDataRowSecondaryText3 = "Hawaiian Airlines",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`flight-data-row ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {visible && <HawaiianAirlines className="hawaiian-airlines-instance" />}

      <DataRowCombined
        className={dataRowCombinedDataRowCombinedClassName}
        dataRowPrimaryDataRowPrimaryClassName={dataRowCombinedDataRowPrimaryDataRowPrimaryClassName}
        dataRowPrimaryDivClassName={dataRowCombinedDataRowPrimaryDivClassName2}
        dataRowPrimaryDivClassName1={dataRowCombinedDataRowPrimaryDivClassNameOverride}
        dataRowPrimaryDivClassName2={dataRowCombinedDataRowPrimaryDivClassName}
        dataRowPrimaryDivClassNameOverride={dataRowCombinedDataRowPrimaryDivClassName1}
        dataRowPrimaryText={dataRowCombinedDataRowPrimaryText1}
        dataRowPrimaryText1={dataRowCombinedDataRowPrimaryText2}
        dataRowPrimaryText2={dataRowCombinedDataRowPrimaryText3}
        dataRowPrimaryText3={dataRowCombinedDataRowPrimaryText}
        dataRowSecondaryDataRowSecondaryClassName={dataRowCombinedDataRowSecondaryDataRowSecondaryClassName}
        dataRowSecondaryDivClassName={dataRowCombinedDataRowSecondaryDivClassName1}
        dataRowSecondaryDivClassName1={dataRowCombinedDataRowSecondaryDivClassName}
        dataRowSecondaryDivClassName2={dataRowCombinedDataRowSecondaryDivClassName2}
        dataRowSecondaryDivClassNameOverride={dataRowCombinedDataRowSecondaryDivClassNameOverride}
        dataRowSecondaryHasDiv={dataRowCombinedDataRowSecondaryHasDiv}
        dataRowSecondaryText={dataRowCombinedDataRowSecondaryText}
        dataRowSecondaryText1={dataRowCombinedDataRowSecondaryText1}
        dataRowSecondaryText2={dataRowCombinedDataRowSecondaryText2}
        dataRowSecondaryText3={dataRowCombinedDataRowSecondaryText3}
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default") {
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
          state: "default",
        };

      case "click":
        return {
          state: "selected",
        };
    }
  }

  if (state.state === "selected") {
    switch (action) {
      case "click":
        return {
          state: "default",
        };
    }
  }

  return state;
}

FlightDataRow.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "selected", "default"]),
  visible: PropTypes.bool,
  dataRowCombinedDataRowPrimaryText: PropTypes.string,
  dataRowCombinedDataRowSecondaryText: PropTypes.string,
  dataRowCombinedDataRowPrimaryText1: PropTypes.string,
  dataRowCombinedDataRowSecondaryText1: PropTypes.string,
  dataRowCombinedDataRowPrimaryText2: PropTypes.string,
  dataRowCombinedDataRowSecondaryText2: PropTypes.string,
  dataRowCombinedDataRowPrimaryText3: PropTypes.string,
  dataRowCombinedDataRowSecondaryHasDiv: PropTypes.bool,
  dataRowCombinedDataRowSecondaryText3: PropTypes.string,
};
