// @flow

import React, { Component } from "react";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Head from "next/head";
import styled from "styled-components";
import Store from "store";

import NProgress from "components/NProgress";
import Page from "components/common/Page";

const Heading = styled.h1`
  color: #458542;
`;

const Content = styled.div`
  height: 100px;
`;

type Props = {};

class Home extends Component<Props> {
  static getInitialProps({ store }) {
    // Get initial props for component
  }

  render() {
    return (
      <div>
        <Head>
          <title>Enlivit</title>
        </Head>
        <NProgress />
        <Page>
          <Heading>Home</Heading>
          <Content>Hey hey</Content>
          <Content>Hey hey</Content>
          <Content>Hey hey</Content>
          <Content>Hey hey</Content>
          <Content>Hey hey</Content>
          <Content>Hey hey</Content>
          <Content>Hey hey</Content>
          <Content>Hey hey</Content>
        </Page>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRedux(Store, mapStateToProps, mapDispatchToProps)(
  withReduxSaga(Home)
);
