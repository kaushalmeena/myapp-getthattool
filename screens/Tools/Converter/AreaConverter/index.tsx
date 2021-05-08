import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { areaSelectOptions } from "./constants";
import { convertArea } from "./utils";

const AreaConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Area Converter"
      subHeading="Quickly convert area between sq. meter, sq mile, sq. foot etc. etc."
      selectOptions={areaSelectOptions}
      fromDefaultValue="km²"
      toDefaultValue="m²"
      convertFunction={convertArea}
    />
  );
};

export default AreaConverter;