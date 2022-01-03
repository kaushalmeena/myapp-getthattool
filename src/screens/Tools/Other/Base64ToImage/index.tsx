import { H1, H2 } from "@blueprintjs/core";
import React, { Component, ReactNode } from "react";
import { loadFile, saveImage } from "../../../../utils";
import InputSection from "../../../../shared/Page/DataConvert/InputSection";
import SwitchSection from "../../../../shared/Page/DataConvert/SwitchSection";
import { MainContainer, TopContainer } from "../../../../styles";
import OutputSection from "./OutputSection";

type Base64ToImageProps = {
  children?: ReactNode;
};

type Base64ToImageState = {
  input: string;
};

class Base64ToImage extends Component<Base64ToImageProps, Base64ToImageState> {
  constructor(props: Base64ToImageProps) {
    super(props);
    this.state = {
      input: ""
    };
  }

  setInput = (value: string): void => {
    this.setState({
      input: value
    });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setInput(event.target.value);
  };

  handleInputClear = (): void => {
    this.setInput("");
  };

  handleInputUpload = (): void => {
    loadFile().then((result) => this.setInput(result));
  };

  handleOutputDownload = (): void => {
    saveImage(this.state.input);
  };

  render(): JSX.Element {
    return (
      <>
        <TopContainer>
          <H1>Base64 to Image</H1>
          <H2>Quickly convert base64-encoded string to image</H2>
        </TopContainer>
        <MainContainer>
          <InputSection
            input={this.state.input}
            handleInputChange={this.handleInputChange}
            handleInputClear={this.handleInputClear}
            handleInputUpload={this.handleInputUpload}
          />
          <SwitchSection switchURL="/image-to-base64" />
          <OutputSection
            output={this.state.input}
            handleOutputDownload={this.handleOutputDownload}
          />
        </MainContainer>
      </>
    );
  }
}

export default Base64ToImage;