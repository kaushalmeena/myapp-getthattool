import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertXMLToJSON } from "./utils";

const XMLToJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="XML to JSON"
      subHeading="Quickly convert an XML document to a JSON document"
      fileExtension="json"
      fileType="text/json"
      switchURL="/json-to-xml"
      convertFunction={convertXMLToJSON}
    />
  );
};

export default XMLToJSONPage;