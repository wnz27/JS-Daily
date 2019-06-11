/* export default () => <div>Welcome to next.js!</div> */
import Head from "next/head";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

import NavigationItem from "./navigationItem";
import NewBannerItem from "./newBannerItem";
import SerialDetailItem from "./serialDetailItem";
import PopularCombinationItem from "./popularCombinationItem";
import InfoItem from "./infoItem";

const Div = styled.div`
  background: url("../static/bg.jpg");
  background-size: 100%;
  height: 3100px;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Div>
        <Head>
          <title>Zhumu Jewerlry</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
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
      </Div>
    );
  }
}
