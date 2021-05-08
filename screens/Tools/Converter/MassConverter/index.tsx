import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { massSelectOptions } from "./constants";
import { convertMass } from "./utils";

const MassConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Mass Converter"
      subHeading="Quickly convert mass between gram, ounce, pound etc."
      selectOptions={massSelectOptions}
      fromDefaultValue="kg"
      toDefaultValue="g"
      convertFunction={convertMass}
    />
  );
};

export default MassConverter;
