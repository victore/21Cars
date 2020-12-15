import { useState } from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Grid from "../Components/Grid";
import cars from "../Cars/index";

export default function Home() {
  const [state, SetState] = useState(cars);
  return (
    <div>
      <Head>
        <title>21cars - Car renting for new era</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Header />
        <Grid cars={state} />
      </div>
    </div>
  );
}
