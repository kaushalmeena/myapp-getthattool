import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { colorSelectOptions } from "./constants";
import { convertColor } from "./utils";

const ColorConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Color Converter"
      subHeading="Quickly convert a colors between HEX, RGB and HSL formats"
      selectOptions={colorSelectOptions}
      toDefaultValue="hex"
      fromDefaultValue="rgb"
      convertFunction={convertColor}
    />
  );
};

export default ColorConverter;