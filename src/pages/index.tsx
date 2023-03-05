import { type NextPage } from "next";
import Head from "next/head";
import Demos from "~/components/Demos";
import Hero from "~/components/hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>E learning</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Demos /> */}
        {/* Hero */}
        <Hero />
      </main>
    </>
  );
};

export default Home;
