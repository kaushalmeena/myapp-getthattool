import { ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import MiddleContainer from "@/components/MiddleContainer";
import SwitchSection from "@/components/SwitchSection";
import TextAreaIOSection from "@/components/TextAreaIOSection";
import { ToastMessages } from "@/constants/toast";
import { loadFile, saveImage } from "@/utils";
import { OverlayToaster } from "@blueprintjs/core";
import { ChangeEvent, useRef, useState } from "react";
import ImageIOSection from "../../../../components/ImageIOSection";

export default function ConvertSection() {
  const [input, setInput] = useState("");
  const toasterRef = useRef<OverlayToaster>(null);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleInputClear = () => {
    setInput("");
  };

  const handleInputUpload = () => {
    loadFile()
      .then((data) => setInput(data))
      .catch(() => {
        toasterRef.current?.show({
          message: ToastMessages.IMAGE_UPLOAD_FAIL,
          intent: "danger",
          isCloseButtonShown: false
        });
      });
  };

  const handleImageError = () => {
    toasterRef.current?.show({
      message: ToastMessages.INVALID_IMAGE,
      intent: "danger",
      isCloseButtonShown: false
    });
  };

  const handleOutputDownload = () => {
    saveImage(input);
  };

  const inputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: "refresh",
      onClick: handleInputClear
    },
    {
      title: "Upload",
      icon: "export",
      onClick: handleInputUpload
    }
  ];

  const outputButtons: ButtonOption[] = [
    {
      title: "Download",
      icon: "import",
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
          <SwitchSection switchURL="/image-to-base64" />
        </MiddleContainer>
        <ImageIOSection
          buttons={outputButtons}
          value={input}
          handleImageError={handleImageError}
        />
      </ConvertContainer>
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
