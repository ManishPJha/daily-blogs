// import Navbar from "@/components/header/navbar";
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
      {/* <Navbar /> */}
      <Main />
      <NextScript />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
      <div id="register-modal"></div>
    </Html>
  );
};

export default Document;
