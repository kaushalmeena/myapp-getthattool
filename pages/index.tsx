import Head from "next/head";
import React, { FunctionComponent } from "react";
import HomePage from "../screens/Home";

const Home: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">
        GetThatTool - One place for all the tool you could want
      </title>
      <meta
        key="description"
        name="description"
        content="GetThatTool is webapp that lets you have all common tools like, convertors, calculators at one place."
      />
    </Head>
    <HomePage />
  </>
);

export default Home;
