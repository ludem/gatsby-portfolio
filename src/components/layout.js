import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
  }
`;

const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Body = styled.div`
  flex-grow: 1;
`;

export default ({ children }) => (
  <FlexColumnDiv>
    <GlobalStyle />
    <Header />
    <Body>{children}</Body>
    <Footer />
  </FlexColumnDiv>
);
