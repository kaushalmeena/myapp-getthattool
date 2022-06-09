import { Button, H1, H3 } from "@blueprintjs/core";
import Link from "next/link";
import React from "react";
import { ButtonContainer, Container } from "./styles";

type ErrorPageProps = {
  heading: string;
  subHeading: string;
};

function ErrorPage({ heading, subHeading }: ErrorPageProps) {
  return (
    <Container>
      <H1>{heading}</H1>
      <H3>{subHeading}</H3>
      <ButtonContainer>
        <Link href="/">
          <Button large>Go to Home</Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
}

export default ErrorPage;