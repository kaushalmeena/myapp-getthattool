import Head from "next/head";
import React from "react";
import CSVToXMLPage from "../screens/Tools/CSV/CSVToXML";

function CSVToXML() {
  return (
    <>
      <Head>
        <title key="title">Convert CSV to XML - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts CSV to XML."
        />
      </Head>
      <CSVToXMLPage />
    </>
  );
}

export default CSVToXML;
