import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { encodeBase64 } from "./utils";

const Base64EncodePage: FunctionComponent = () => {
  return (
    <Page
      heading="Base64 Encode"
      subHeading="Quickly encode text to base64"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/base64-decode"
      convertFunc={encodeBase64}
    />
  );
};

export default Base64EncodePage;
