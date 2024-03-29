import { copyText, loadFile, saveFile } from "@/utils";
import { OverlayToaster } from "@blueprintjs/core";
import { Duplicate, Export, Import, Refresh } from "@blueprintjs/icons";
import { ChangeEvent, useRef, useState } from "react";
import { ToastMessages } from "../../constants";
import { ButtonOption } from "../ButtonSection";
import ConvertContainer from "../ConvertContainer";
import MiddleContainer from "../MiddleContainer";
import SwitchSection from "../SwitchSection";
import TextAreaIOSection from "../TextAreaIOSection";

type ConvertSectionProps = {
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  convertFunction: (input: string) => string;
};

export default function ConvertSection({
  fileExtension,
  fileType,
  switchURL,
  convertFunction
}: ConvertSectionProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const toasterRef = useRef<OverlayToaster>(null);

  const changeInput = (value: string) => {
    setInput(value);
    setOutput(getOutput(value));
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    changeInput(event.target.value);
  };

  const handleInputClear = () => {
    setInput("");
    setOutput("");
  };

  const handleInputUpload = () => {
    loadFile()
      .then((value) => {
        changeInput(value);
      })
      .catch(() => {
        toasterRef.current?.show({
          message: ToastMessages.FILE_UPLOAD_FAIL,
          intent: "danger",
          isCloseButtonShown: false
        });
      });
  };

  const handleOutputCopy = () => {
    copyText(output).then(
      () =>
        toasterRef.current?.show({
          message: ToastMessages.COPY_SUCCESS,
          intent: "primary",
          isCloseButtonShown: false
        })
    );
  };

  const handleOutputDownload = () => {
    saveFile(output, fileExtension, fileType);
  };

  const getOutput = (value: string) => {
    let output = "";
    try {
      output = convertFunction(value);
    } catch (err) {
      output = String(err) ?? "Invalid input detected";
    }
    return output;
  };

  const inputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: <Refresh />,
      onClick: handleInputClear
    },
    {
      title: "Upload",
      icon: <Export />,
      onClick: handleInputUpload
    }
  ];

  const outputButtons: ButtonOption[] = [
    {
      title: "Copy",
      icon: <Duplicate />,
      onClick: handleOutputCopy
    },
    {
      title: "Download",
      icon: <Import />,
      onClick: handleOutputDownload
    }
  ];

  return (
    <>
      <ConvertContainer>
        <TextAreaIOSection
          buttons={inputButtons}
          value={input}
          handleValueChange={handleInputChange}
        />
        <MiddleContainer>
          {!!switchURL && <SwitchSection switchURL={switchURL} />}
        </MiddleContainer>
        <TextAreaIOSection buttons={outputButtons} value={output} />
      </ConvertContainer>
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
