import { Button, TextArea } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ButtonContainer, TextIOContainer } from "../../../../styles";

type OutputSectionProps = {
  output: string;
  handleOutputCopy: () => void;
  handleOutputDownload: () => void;
};

const OutputSection: FunctionComponent<OutputSectionProps> = (
  props: OutputSectionProps
) => {
  return (
    <TextIOContainer>
      <TextArea readOnly fill rows={16} value={props.output} />
      <ButtonContainer>
        <Button
          large
          title="Copy"
          icon="duplicate"
          onClick={props.handleOutputCopy}
        />
        <Button
          large
          title="Download"
          icon="import"
          onClick={props.handleOutputDownload}
        />
      </ButtonContainer>
    </TextIOContainer>
  );
};

export default OutputSection;