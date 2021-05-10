import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ISelectOption } from "../../../../common/interfaces";
import { IOContainer } from "../../common/styles";
import { SelectContainer } from "../styles";

type InputSectionProps = {
  input: string;
  from: string;
  selectOptions: ISelectOption[];
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFromSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const InputSection: FunctionComponent<InputSectionProps> = (
  props: InputSectionProps
) => {
  return (
    <IOContainer>
      <InputGroup
        large
        rightElement={<Tag minimal>{props.from}</Tag>}
        value={props.input}
        onChange={props.handleInputChange}
      />
      <SelectContainer>
        <HTMLSelect
          fill
          large
          options={props.selectOptions}
          value={props.from}
          onChange={props.handleFromSelectChange}
        />
      </SelectContainer>
    </IOContainer>
  );
};

export default InputSection;
