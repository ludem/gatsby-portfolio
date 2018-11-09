import React from "react";
import styled from "styled-components";

const MenuContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const MenuVoice = styled.li`
  margin: 0.2rem;
  list-style: none;
  font-size: 1.2rem;
`;

const MenuLink = styled.a`
  color: whitesmoke;
  text-decoration: none;
  :hover {
    border-bottom: 0.1rem solid whitesmoke;
  }
`;

export default () => (
  <MenuContainer>
    <MenuVoice>
      <MenuLink href="#top">home</MenuLink>
    </MenuVoice>
    <MenuVoice>
      <MenuLink href="#bio">bio</MenuLink>
    </MenuVoice>
    <MenuVoice>
      <MenuLink href="#portfolio">portfolio</MenuLink>
    </MenuVoice>
    <MenuVoice>
      <MenuLink href="#contacts">contacts</MenuLink>
    </MenuVoice>
  </MenuContainer>
);
