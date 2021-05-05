import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { convertYAMLToJSON } from "./utils";

const YAMLToJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="YAML to JSON"
      subHeading="Quickly convert a YAML config to a JSON config"
      fileExtension="json"
      fileType="text/json"
      switchURL="/json-to-yaml"
      convertFunction={convertYAMLToJSON}
    />
  );
};

export default YAMLToJSONPage;
