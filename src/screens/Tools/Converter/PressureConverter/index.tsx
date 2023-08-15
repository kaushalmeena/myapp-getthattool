"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { ConversionMap, SelectOptions, UnitMap } from "./constants";
import { createConvertFunction } from "@/utils";

const convertFunction = createConvertFunction(ConversionMap, UnitMap.PASCAL);

export default function PressureConverterPage() {
  return (
    <UnitConvertPage
      heading="Pressure Converter"
      subHeading="Quickly convert pressure between bar, pascal, torr etc."
      selectOptions={SelectOptions}
      fromDefaultValue={UnitMap.BAR}
      toDefaultValue={UnitMap.PASCAL}
      convertFunction={convertFunction}
    />
  );
}
