import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { decodeURL } from "./utils";

const URLDecodePage: FunctionComponent = () => {
  return (
    <Page
      heading="URL Decode"
      subHeading="Quickly URL-unescape text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/url-encode"
      convertFunc={decodeURL}
    />
  );
};

export default URLDecodePage;