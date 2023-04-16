import Head from "next/head";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";

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
        <AboutUs />
      </main>
    </>
  );
};

export default Home;
