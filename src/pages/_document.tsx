import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Main />
      <NextScript />
      <div id="register-modal"></div>
    </Html>
  );
};

export default Document;
