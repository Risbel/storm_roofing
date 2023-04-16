import Head from "next/head";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Storm Roofing</title>
        <meta name="description" content="Storm Roofing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <Navbar />
        </header>
        <Hero />
      </main>
    </>
  );
};

export default Home;
