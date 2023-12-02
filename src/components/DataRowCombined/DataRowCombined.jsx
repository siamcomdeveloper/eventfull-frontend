/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DataRowPrimary } from "../DataRowPrimary";
import { DataRowSecondary } from "../DataRowSecondary";
import "./style.css";

export const DataRowCombined = ({
  className,
  dataRowPrimaryText = "label 4 right",
  dataRowPrimaryDivClassName,
  dataRowPrimaryDivClassNameOverride,
  dataRowPrimaryDataRowPrimaryClassName,
  dataRowPrimaryDivClassName1,
  dataRowPrimaryText1 = "label 3 right",
  dataRowPrimaryText2 = "label 1",
  dataRowPrimaryDivClassName2,
  dataRowPrimaryText3 = "label 2",
  dataRowSecondaryText = "value",
  dataRowSecondaryHasDiv,
  dataRowSecondaryText1 = "value",
  dataRowSecondaryDivClassName,
  dataRowSecondaryDivClassNameOverride,
  dataRowSecondaryDataRowSecondaryClassName,
  dataRowSecondaryText2 = "value",
  dataRowSecondaryDivClassName1,
  dataRowSecondaryText3 = "value",
  dataRowSecondaryDivClassName2,
}) => {
  return (
    <div className={`data-row-combined ${className}`}>
      <DataRowPrimary
        className={dataRowPrimaryDataRowPrimaryClassName}
        divClassName={dataRowPrimaryDivClassName}
        divClassName1={dataRowPrimaryDivClassName2}
        divClassName2={dataRowPrimaryDivClassNameOverride}
        divClassNameOverride={dataRowPrimaryDivClassName1}
        text={dataRowPrimaryText2}
        text1={dataRowPrimaryText3}
        text2={dataRowPrimaryText1}
        text3={dataRowPrimaryText}
      />
      <DataRowSecondary
        className={dataRowSecondaryDataRowSecondaryClassName}
        divClassName={dataRowSecondaryDivClassNameOverride}
        divClassName1={dataRowSecondaryDivClassName1}
        divClassName2={dataRowSecondaryDivClassName2}
        divClassNameOverride={dataRowSecondaryDivClassName}
        hasDiv={dataRowSecondaryHasDiv}
        text={dataRowSecondaryText1}
        text1={dataRowSecondaryText}
        text2={dataRowSecondaryText2}
        text3={dataRowSecondaryText3}
      />
    </div>
  );
};

DataRowCombined.propTypes = {
  dataRowPrimaryText: PropTypes.string,
  dataRowPrimaryText1: PropTypes.string,
  dataRowPrimaryText2: PropTypes.string,
  dataRowPrimaryText3: PropTypes.string,
  dataRowSecondaryText: PropTypes.string,
  dataRowSecondaryHasDiv: PropTypes.bool,
  dataRowSecondaryText1: PropTypes.string,
  dataRowSecondaryText2: PropTypes.string,
  dataRowSecondaryText3: PropTypes.string,
};
