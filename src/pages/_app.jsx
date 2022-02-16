import React, { useEffect, useState } from "react";
import "src/styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [state] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
