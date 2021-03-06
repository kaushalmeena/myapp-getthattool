import Head from "next/head";
import React from "react";
import YAMLToCSVPage from "../screens/Tools/YAML/YAMLToCSV";

function YAMLToCSV() {
  return (
    <>
      <Head>
        <title key="title">Convert YAML to CSV - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts YAML to CSV."
        />
      </Head>
      <YAMLToCSVPage />
    </>
  );
}

export default YAMLToCSV;
