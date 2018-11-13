import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default ({ children }) => (
  <FlexColumnDiv>
    <Header />
    {children}
    <Footer />
  </FlexColumnDiv>
);
