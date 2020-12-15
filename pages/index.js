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
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css'
          integrity='sha512-+WF6UMXHki/uCy0vATJzyA9EmAcohIQuwpNz0qEO+5UeE5ibPejMRdFuARSrl1trs3skqie0rY/gNiolfaef5w=='
          crossorigin='anonymous'
        />
      </Head>

      <div>
        <Header />
        <Grid cars={state} />
      </div>
    </div>
  );
}
