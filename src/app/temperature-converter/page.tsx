import TemperatureConverterPage from "@/screens/Tools/Converter/TemperatureConverter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temperature Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts temperature between celsius, fahrenheit and kelvin."
};

export default function TemperatureConverter() {
  return <TemperatureConverterPage />;
}
