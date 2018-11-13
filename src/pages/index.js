import React from "react";

import Layout from "../components/layout";
import Title from "../components/title";
import styled from "styled-components";

const MainContent = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  min-height: calc(100% - 3rem);
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export default () => (
  <div>
    <Layout />
    <MainContent>
      <Title />
    </MainContent>
  </div>
);
