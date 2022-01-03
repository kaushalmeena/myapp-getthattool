import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/DataConvert";
import { escapeSlash } from "./utils";

const SlashEscapePage: FunctionComponent = () => {
  return (
    <Page
      heading="Slash Escape"
      subHeading="Quickly escape special symbols in text with slashes"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/slash-unescape"
      convertFunction={escapeSlash}
    />
  );
};

export default SlashEscapePage;