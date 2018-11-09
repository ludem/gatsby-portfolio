import React from "react";
import Navigator from "./navigator";
import styled from "styled-components";
import { BACKGROUND_COLOR } from "../utils/css-constants";

const HeaderContainer = styled.div`
  display: flex;
  background: ${BACKGROUND_COLOR};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  box-shadow: 0 0px 4px 2px #999;
  color: whitesmoke;
`;

const Sign = styled.h1`
  flex: 1;
  font-family: "Nothing You Could Do";
`;

export default () => (
  <HeaderContainer>
    <Sign>ludem</Sign>
    <Navigator />
  </HeaderContainer>
);
