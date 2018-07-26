// @flow
import React from "react";
import styled from "styled-components";
import { Menu } from "@material-ui/icons";

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;

const HeaderBar = styled(Menu)``;

const HeaderLogo = styled.div``;

export default () => (
  <HeaderWrapper>
    <HeaderLogo>Logo</HeaderLogo>
    <HeaderBar />
  </HeaderWrapper>
);
