import { Button, Card } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import {
  ButtonContainer,
  CardImage,
  ImageIOContainer
} from "../../../../common/styles";

type OutputSectionProps = {
  output: string;
  handleOutputDownload: () => void;
};

const OutputSection: FunctionComponent<OutputSectionProps> = (
  props: OutputSectionProps
) => {
  return (
    <ImageIOContainer>
      <Card>
        <CardImage>
          {props.output ? <img alt="output-image" src={props.output} /> : null}
        </CardImage>
      </Card>
      <ButtonContainer>
        <Button
          large
          title="Download"
          icon="import"
          onClick={props.handleOutputDownload}
        />
      </ButtonContainer>
    </ImageIOContainer>
  );
};

export default OutputSection;