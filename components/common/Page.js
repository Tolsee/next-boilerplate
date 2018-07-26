// @flow
import React from "react";
import styled from "styled-components";

import Header from "./Header";

const PageWrapper = styled.div``;

type Props = {
  children: ?React.Node
};

export default ({ children, ...props }: Props) => (
  <React.Fragment>
    <Header />
    <PageWrapper {...props}>{children}</PageWrapper>
  </React.Fragment>
);
