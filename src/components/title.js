import React from "react";
import styled from "styled-components";

const MyName = styled.h1`
  margin: 0.5rem;
  padding: 0;
  font-size: 4rem;
  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  font-weight: normal;
  color: #e0dfdc;
  letter-spacing: 0.1rem;
  animation: zoomIn 2s, fadeIn 2s;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #848282, 0 3px 0 #838383, 0 5px 0 #838181,
    0 7px 0 #3d3c3c, 0 9px 0 #303030, 0 11px 0 #242424;
`;

const TitleContainer = styled.div`
  padding: 1rem 1rem;
  height: auto;
  background: #242424;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default () => (
  <TitleContainer>
    <MyName>Luca D'Emilio</MyName>
  </TitleContainer>
);
