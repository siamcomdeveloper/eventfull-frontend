/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DataRowDivider } from "../DataRowDivider";
import { FlightDataRow } from "../FlightDataRow";
import "./style.css";

export const TableFlightList = ({
  className,
  flightDataRowDataRowCombinedDataRowPrimaryText = "Banff Hotel",
  flightDataRowDataRowCombinedDataRowSecondaryHasDiv,
  flightDataRowDataRowCombinedDataRowPrimaryText1 = "Pending",
  flightDataRowDataRowCombinedDataRowPrimaryDivClassName,
  flightDataRowDataRowCombinedDataRowSecondaryVisible,
  flightDataRowDataRowCombinedDataRowPrimaryText2 = "Confirmed",
  flightDataRowDataRowCombinedDataRowSecondaryText = "Book a new one",
  flightDataRowDataRowCombinedDataRowPrimaryText3 = "Deer Floral",
  flightDataRowDataRowCombinedDataRowSecondaryHasDiv1,
}) => {
  return (
    <div className={`table-flight-list ${className}`}>
      <FlightDataRow
        className="design-component-instance-node"
        dataRowCombinedDataRowCombinedClassName="flight-data-row-6"
        dataRowCombinedDataRowPrimaryDataRowPrimaryClassName="flight-data-row-2"
        dataRowCombinedDataRowPrimaryDivClassName="flight-data-row-instance"
        dataRowCombinedDataRowPrimaryDivClassName1="flight-data-row-4"
        dataRowCombinedDataRowPrimaryDivClassName2="flight-data-row-5"
        dataRowCombinedDataRowPrimaryDivClassNameOverride="flight-data-row-instance"
        dataRowCombinedDataRowPrimaryText="Oct 24th, 2023"
        dataRowCombinedDataRowPrimaryText1={flightDataRowDataRowCombinedDataRowPrimaryText1}
        dataRowCombinedDataRowPrimaryText2="7:35 AM - 12:15 PM"
        dataRowCombinedDataRowPrimaryText3={flightDataRowDataRowCombinedDataRowPrimaryText}
        dataRowCombinedDataRowSecondaryDataRowSecondaryClassName="flight-data-row-2"
        dataRowCombinedDataRowSecondaryDivClassName="flight-data-row-instance"
        dataRowCombinedDataRowSecondaryDivClassName1="flight-data-row-instance"
        dataRowCombinedDataRowSecondaryDivClassName2="flight-data-row-instance"
        dataRowCombinedDataRowSecondaryDivClassNameOverride="flight-data-row-3"
        dataRowCombinedDataRowSecondaryHasDiv={flightDataRowDataRowCombinedDataRowSecondaryHasDiv}
        dataRowCombinedDataRowSecondaryText=""
        dataRowCombinedDataRowSecondaryText1=""
        dataRowCombinedDataRowSecondaryText2="View Details"
        dataRowCombinedDataRowSecondaryText3="Venue"
        stateProp="default"
        visible={false}
      />
      <DataRowDivider className="data-row-divider-instance" dividerClassName="data-row-divider-2" />
      <FlightDataRow
        className="design-component-instance-node"
        dataRowCombinedDataRowCombinedClassName="flight-data-row-6"
        dataRowCombinedDataRowPrimaryDataRowPrimaryClassName="flight-data-row-2"
        dataRowCombinedDataRowPrimaryDivClassName="flight-data-row-instance"
        dataRowCombinedDataRowPrimaryDivClassName1={flightDataRowDataRowCombinedDataRowPrimaryDivClassName}
        dataRowCombinedDataRowPrimaryDivClassName2="flight-data-row-5"
        dataRowCombinedDataRowPrimaryDivClassNameOverride="flight-data-row-instance"
        dataRowCombinedDataRowPrimaryText="Oct 24th, 2023"
        dataRowCombinedDataRowPrimaryText1={flightDataRowDataRowCombinedDataRowPrimaryText2}
        dataRowCombinedDataRowPrimaryText2="7:35 AM - 12:15 PM"
        dataRowCombinedDataRowPrimaryText3="Connie Zheng"
        dataRowCombinedDataRowSecondaryDataRowSecondaryClassName="flight-data-row-2"
        dataRowCombinedDataRowSecondaryDivClassName="flight-data-row-instance"
        dataRowCombinedDataRowSecondaryDivClassName1="flight-data-row-instance"
        dataRowCombinedDataRowSecondaryDivClassName2="flight-data-row-instance"
        dataRowCombinedDataRowSecondaryDivClassNameOverride="flight-data-row-3"
        dataRowCombinedDataRowSecondaryHasDiv={flightDataRowDataRowCombinedDataRowSecondaryVisible}
        dataRowCombinedDataRowSecondaryText=""
        dataRowCombinedDataRowSecondaryText1="value"
        dataRowCombinedDataRowSecondaryText2="View Details"
        dataRowCombinedDataRowSecondaryText3="Event Planner"
        stateProp="default"
        visible={false}
      />
      <DataRowDivider className="data-row-divider-instance" dividerClassName="data-row-divider-2" />
      <FlightDataRow
        className="design-component-instance-node"
        dataRowCombinedDataRowCombinedClassName="flight-data-row-6"
        dataRowCombinedDataRowPrimaryDataRowPrimaryClassName="flight-data-row-2"
        dataRowCombinedDataRowPrimaryDivClassName="flight-data-row-instance"
        dataRowCombinedDataRowPrimaryDivClassName1="flight-data-row-7"
        dataRowCombinedDataRowPrimaryDivClassName2="flight-data-row-8"
        dataRowCombinedDataRowPrimaryDivClassNameOverride="flight-data-row-instance"
        dataRowCombinedDataRowPrimaryText="Oct 24th - Oct 25th, 2023"
        dataRowCombinedDataRowPrimaryText1="Canceled"
        dataRowCombinedDataRowPrimaryText2="7:35 AM - 12:15 PM"
        dataRowCombinedDataRowPrimaryText3={flightDataRowDataRowCombinedDataRowPrimaryText3}
        dataRowCombinedDataRowSecondaryDataRowSecondaryClassName="flight-data-row-2"
        dataRowCombinedDataRowSecondaryDivClassName="flight-data-row-instance"
        dataRowCombinedDataRowSecondaryDivClassName1="flight-data-row-instance"
        dataRowCombinedDataRowSecondaryDivClassName2="flight-data-row-instance"
        dataRowCombinedDataRowSecondaryDivClassNameOverride="flight-data-row-3"
        dataRowCombinedDataRowSecondaryHasDiv={flightDataRowDataRowCombinedDataRowSecondaryHasDiv1}
        dataRowCombinedDataRowSecondaryText=""
        dataRowCombinedDataRowSecondaryText1="value"
        dataRowCombinedDataRowSecondaryText2={flightDataRowDataRowCombinedDataRowSecondaryText}
        dataRowCombinedDataRowSecondaryText3="Decoration"
        stateProp="default"
        visible={false}
      />
    </div>
  );
};

TableFlightList.propTypes = {
  flightDataRowDataRowCombinedDataRowPrimaryText: PropTypes.string,
  flightDataRowDataRowCombinedDataRowSecondaryHasDiv: PropTypes.bool,
  flightDataRowDataRowCombinedDataRowPrimaryText1: PropTypes.string,
  flightDataRowDataRowCombinedDataRowSecondaryVisible: PropTypes.bool,
  flightDataRowDataRowCombinedDataRowPrimaryText2: PropTypes.string,
  flightDataRowDataRowCombinedDataRowSecondaryText: PropTypes.string,
  flightDataRowDataRowCombinedDataRowPrimaryText3: PropTypes.string,
  flightDataRowDataRowCombinedDataRowSecondaryHasDiv1: PropTypes.bool,
};
