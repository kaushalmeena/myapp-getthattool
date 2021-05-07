import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { minifyXML } from "./utils";

const MinifyXML: FunctionComponent = () => {
  return (
    <Page
      heading="Minify XML"
      subHeading="Quickly compress a XML file"
      fileExtension="xml"
      fileType="text/xml"
      convertFunction={minifyXML}
    />
  );
};

export default MinifyXML;