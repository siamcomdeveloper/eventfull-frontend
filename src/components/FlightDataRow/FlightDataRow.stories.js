import { FlightDataRow } from ".";

export default {
  title: "Components/FlightDataRow",
  component: FlightDataRow,
  argTypes: {
    stateProp: {
      options: ["hover", "selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    className: {},
    visible: true,
    dataRowCombinedDataRowPrimaryText: "7:00AM - 4:15PM",
    dataRowCombinedDataRowPrimaryDivClassName: {},
    dataRowCombinedDataRowPrimaryDivClassNameOverride: {},
    dataRowCombinedDataRowSecondaryText: "2h 45m in HNL",
    dataRowCombinedDataRowPrimaryDataRowPrimaryClassName: {},
    dataRowCombinedDataRowPrimaryText1: "$624",
    dataRowCombinedDataRowSecondaryDivClassName: {},
    dataRowCombinedDataRowSecondaryText1: "value",
    dataRowCombinedDataRowSecondaryDivClassNameOverride: {},
    dataRowCombinedDataRowPrimaryDivClassName1: {},
    dataRowCombinedDataRowPrimaryDivClassName2: {},
    dataRowCombinedDataRowSecondaryDataRowSecondaryClassName: {},
    dataRowCombinedDataRowPrimaryText2: "1 stop",
    dataRowCombinedDataRowSecondaryText2: "round trip",
    dataRowCombinedDataRowCombinedClassName: {},
    dataRowCombinedDataRowPrimaryText3: "16h 45m",
    dataRowCombinedDataRowSecondaryHasDiv: true,
    dataRowCombinedDataRowSecondaryDivClassName1: {},
    dataRowCombinedDataRowSecondaryDivClassName2: {},
    dataRowCombinedDataRowSecondaryText3: "Hawaiian Airlines",
  },
};
