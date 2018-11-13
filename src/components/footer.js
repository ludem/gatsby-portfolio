import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #242424;
  text-align: center;
  color: whitesmoke;
`;

export default () => (
  <StyledFooter>
    <p>Copyright © Luca D'Emilio 2017</p>
  </StyledFooter>
);
