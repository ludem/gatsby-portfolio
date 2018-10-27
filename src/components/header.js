import React from "react";
import Navigator from "./navigator";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
`;

const Sign = styled.h1`
  flex: 1;
`;

export default () => (
  <HeaderContainer>
    <Sign>ludem</Sign>
    <Navigator />
  </HeaderContainer>
);
