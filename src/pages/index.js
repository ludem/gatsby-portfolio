import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import styled from "styled-components";
import Portfolio from "../components/portfolio";
import Bio from "../components/bio";

const MainContent = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;

export default () => (
  <React.Fragment>
    <Layout>
      <MainContent>
        <Title />
        <Portfolio />
        <Bio />
      </MainContent>
    </Layout>
  </React.Fragment>
);
