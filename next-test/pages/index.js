/* export default () => <div>Welcome to next.js!</div> */
import Head from "next/head";
import React from "react";
import Link from "next/link";

import NavigationItem from "./navigationItem";
import NewBannerItem from "./newBannerItem";
import SerialDetailItem from "./serialDetailItem";
import PopularCombinationItem from "./popularCombinationItem";
import InfoItem from "./infoItem";

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
    <NavigationItem />
    <NewBannerItem />
    <SerialDetailItem />
    <PopularCombinationItem />
    <InfoItem />
    Click{" "}
    <Link href="/about">
      <a>here</a>
    </Link>{" "}
    to read more
  </div>
);
