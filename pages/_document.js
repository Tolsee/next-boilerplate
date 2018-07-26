import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import styled, { ServerStyleSheet, injectGlobal } from "styled-components";

// eslint-disable-next-line
injectGlobal`
  ::-webkit-scrollbar {
    width: 0.5em;
  }
 
  ::-webkit-scrollbar-track {
   width: 1em;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgba(38, 127, 186, 0.75);
    -webkit-border-radius: 2ex;
    -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75);
  }
`;

const Body = styled.body`
  margin: 0 !important;
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
          <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
          {this.props.styleTags}
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    );
  }
}
