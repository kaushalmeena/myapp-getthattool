import { ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import MiddleContainer from "@/components/MiddleContainer";
import TextAreaIOSection from "@/components/TextAreaIOSection";
import { loadFile } from "@/utils";
import { ChangeEvent, useState } from "react";
import OutputSection from "./OutputSection";
import { getLeftAndRightOutput } from "./utils";
import { Change } from "diff";

export default function DiffSection() {
  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");
  const [leftOutput, setLeftOutput] = useState<Change[]>([]);
  const [rightOutput, setRightOutput] = useState<Change[]>([]);

  const handleLeftInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value } = event.target;
    const [leftOutput, rightOutput] = getLeftAndRightOutput(value, rightInput);
    setLeftInput(value);
    setLeftOutput(leftOutput);
    setRightOutput(rightOutput);
  };

  const handleRightInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value } = event.target;
    const [leftOutput, rightOutput] = getLeftAndRightOutput(leftInput, value);
    setRightInput(value);
    setLeftOutput(leftOutput);
    setRightOutput(rightOutput);
  };

  const handleLeftInputClear = (): void => {
    setLeftInput("");
    setLeftOutput([]);
    setRightOutput([]);
  };

  const handleRightInputClear = (): void => {
    setRightInput("");
    setLeftOutput([]);
    setRightOutput([]);
  };

  const handleLeftInputUpload = (): void => {
    loadFile().then((data) => setLeftInput(data));
  };

  const handleRightInputUpload = (): void => {
    loadFile().then((data) => setRightInput(data));
  };

  const leftInputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: "refresh",
      onClick: handleLeftInputClear
    },
    {
      title: "Upload",
      icon: "export",
      onClick: handleLeftInputUpload
    }
  ];

  const rightInputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: "refresh",
      onClick: handleRightInputClear
    },
    {
      title: "Upload",
      icon: "export",
      onClick: handleRightInputUpload
    }
  ];

  return (
    <>
      <ConvertContainer>
        <TextAreaIOSection
          buttons={leftInputButtons}
          value={leftInput}
          handleValueChange={handleLeftInputChange}
        />
        <MiddleContainer />
        <TextAreaIOSection
          buttons={rightInputButtons}
          value={rightInput}
          handleValueChange={handleRightInputChange}
        />
      </ConvertContainer>
      {leftOutput.length && rightOutput.length && (
        <ConvertContainer>
          <OutputSection output={leftOutput} />
          <MiddleContainer />
          <OutputSection output={rightOutput} />
        </ConvertContainer>
      )}
    </>
  );
}
