"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { createConvertFunction } from "@/utils";
import { ConversionMap, SelectOptions, UnitMap } from "./constants";

const convertFunction = createConvertFunction(ConversionMap, UnitMap.GRAM);

export default function MassConverterPage() {
  return (
    <UnitConvertPage
      heading="Mass Converter"
      subHeading="Quickly convert mass between gram, ounce, pound etc."
      selectOptions={SelectOptions}
      fromDefaultValue={UnitMap.KILOGRAM}
      toDefaultValue={UnitMap.GRAM}
      convertFunction={convertFunction}
    />
  );
}
