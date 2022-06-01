import { H1, H2, Icon } from "@blueprintjs/core";
import React, { Component } from "react";
import { SelectOption } from "../../../types";
import { MainContainer, MiddleContainer, TopContainer } from "../../../styles";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

type UnitConvertProps = {
  heading: string;
  subHeading: string;
  selectOptions: SelectOption[];
  fromDefaultValue: string;
  toDefaultValue: string;
  convertFunction: (input: string, from: string, to: string) => string;
};

type UnitConvertState = {
  input: string;
  from: string;
  to: string;
  output: string;
};

class UnitConvert extends Component<UnitConvertProps, UnitConvertState> {
  constructor(props: UnitConvertProps) {
    super(props);
    this.state = {
      input: "",
      from: props.fromDefaultValue,
      to: props.toDefaultValue,
      output: ""
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    this.setState((prevState) => ({
      input: value,
      output: this.getOutput(value, prevState.from, prevState.to)
    }));
  };

  handleFromSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = event.target;
    this.setState((prevState) => ({
      from: value,
      input: prevState.output
        ? this.getOutput(prevState.output, prevState.to, value)
        : prevState.input
    }));
  };

  handleOutputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    this.setState((prevState) => ({
      output: value,
      input: this.getOutput(value, prevState.to, prevState.from)
    }));
  };

  handleToSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = event.target;
    this.setState((prevState) => ({
      to: value,
      output: prevState.input
        ? this.getOutput(prevState.input, prevState.from, value)
        : prevState.output
    }));
  };

  getOutput = (input: string, from: string, to: string): string => {
    const { convertFunction } = this.props;
    let output = "";
    try {
      output = convertFunction(input, from, to);
    } catch (err) {
      output = "Invalid input detected.";
    }
    return output;
  };

  render() {
    const { heading, subHeading, selectOptions } = this.props;
    const { input, from, to, output } = this.state;
    return (
      <>
        <TopContainer>
          <H1>{heading}</H1>
          <H2>{subHeading}</H2>
        </TopContainer>
        <MainContainer>
          <InputSection
            input={input}
            from={from}
            selectOptions={selectOptions}
            handleInputChange={this.handleInputChange}
            handleFromSelectChange={this.handleFromSelectChange}
          />
          <MiddleContainer>
            <Icon icon="equals" iconSize={28} />
          </MiddleContainer>
          <OutputSection
            output={output}
            to={to}
            selectOptions={selectOptions}
            handleOutputChange={this.handleOutputChange}
            handleToSelectChange={this.handleToSelectChange}
          />
        </MainContainer>
      </>
    );
  }
}

export default UnitConvert;
