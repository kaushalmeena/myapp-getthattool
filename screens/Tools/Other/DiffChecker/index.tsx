import { H1, H2 } from "@blueprintjs/core";
import React, { Component, ReactNode } from "react";
import { loadFile } from "../../../../utils";
import InputSection from "../../../common/Page/DataConvert/InputSection";
import {
  MainContainer,
  MiddleContainer,
  TopContainer
} from "../../../common/styles";
import OutputSection from "./OutputSection";
import { getDiffOutput } from "./utils";

type DiffCheckerProps = {
  children?: ReactNode;
};

type DiffCheckerState = {
  leftInput: string;
  rightInput: string;
  leftOutput: string[][];
  rightOutput: string[][];
};

class DiffChecker extends Component<DiffCheckerProps, DiffCheckerState> {
  constructor(props: DiffCheckerProps) {
    super(props);
    this.state = {
      leftInput: "",
      rightInput: "",
      leftOutput: null,
      rightOutput: null
    };
  }

  setLeftInput = (value: string): void => {
    this.setState({
      leftInput: value
    });
  };

  setRightInput = (value: string): void => {
    this.setState({
      rightInput: value
    });
  };

  handleLeftInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const value = event.target.value;
    this.setState((prevState) => {
      const [leftOutput, rightOutput] = this.getOutput(
        value,
        prevState.rightInput
      );
      return {
        leftInput: value,
        leftOutput,
        rightOutput
      };
    });
  };

  handleRightInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const value = event.target.value;
    this.setState((prevState) => {
      const [leftOutput, rightOutput] = this.getOutput(
        value,
        prevState.leftInput
      );
      return {
        rightInput: value,
        leftOutput,
        rightOutput
      };
    });
  };

  handleLeftInputClear = (): void => {
    this.setLeftInput("");
  };

  handleRightInputClear = (): void => {
    this.setRightInput("");
  };

  handleLeftInputUpload = (): void => {
    loadFile().then((result) => this.setLeftInput(result));
  };

  handleRightInputUpload = (): void => {
    loadFile().then((result) => this.setRightInput(result));
  };

  getOutput = (
    original: string,
    modified: string
  ): [string[][], string[][]] => {
    let LOutput = null;
    let ROutput = null;
    if (original && modified) {
      const output = getDiffOutput(original, modified);
      LOutput = output.filter((item) => item[0] === "N" || item[0] === "G");
      ROutput = output.filter((item) => item[0] === "N" || item[0] === "R");
    }
    return [LOutput, ROutput];
  };

  render(): JSX.Element {
    return (
      <>
        <TopContainer>
          <H1>Diff-Checker</H1>
          <H2>Quickly compare two set of text to find differences</H2>
        </TopContainer>
        <MainContainer>
          <InputSection
            input={this.state.leftInput}
            handleInputChange={this.handleLeftInputChange}
            handleInputClear={this.handleLeftInputClear}
            handleInputUpload={this.handleLeftInputUpload}
          />
          <MiddleContainer />
          <InputSection
            input={this.state.rightInput}
            handleInputChange={this.handleRightInputChange}
            handleInputClear={this.handleRightInputClear}
            handleInputUpload={this.handleRightInputUpload}
          />
        </MainContainer>
        {this.state.leftOutput && this.state.rightOutput ? (
          <MainContainer>
            <OutputSection output={this.state.leftOutput} />
            <MiddleContainer />
            <OutputSection output={this.state.rightOutput} />
          </MainContainer>
        ) : null}
      </>
    );
  }
}

export default DiffChecker;
