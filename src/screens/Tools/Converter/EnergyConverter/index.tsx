import React from "react";
import Page from "../../../../shared/Pages/UnitConvert";
import { EnergySelectOptions, EnergyUnits } from "./constants";
import { convertEnergy } from "./utils";

function EnergyConverter() {
  return (
    <Page
      heading="Energy Converter"
      subHeading="Quickly convert energy between joule, calorie, electronvolt etc."
      selectOptions={EnergySelectOptions}
      fromDefaultValue={EnergyUnits.KILOJOULE}
      toDefaultValue={EnergyUnits.JOULE}
      convertFunction={convertEnergy}
    />
  );
}

export default EnergyConverter;
