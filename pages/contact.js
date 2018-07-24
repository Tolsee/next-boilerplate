// @flow

import React, { Component } from "react";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Head from "next/head";
import styled from "styled-components";
import Store from "store";
import NProgress from "components/NProgress";

const H1 = styled.h1`
  color: #458542;
`;

type Props = {};

class Contact extends Component<Props> {
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
        <H1>Contact</H1>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRedux(Store, mapStateToProps, mapDispatchToProps)(
  withReduxSaga(Contact)
);
