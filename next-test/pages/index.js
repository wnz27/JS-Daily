/* export default () => <div>Welcome to next.js!</div> */
import Head from "next/head";
import React from "react";
import Link from "next/link";

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
    Click{" "}
    <Link href="/about">
      <a>here</a>
    </Link>{" "}
    to read more
  </div>
);
