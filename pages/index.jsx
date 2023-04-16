import Head from "next/head";

import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/WhoAreWe/AboutUs";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>Storm Roofing</title>
        <meta name="description" content="Storm Roofing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <AboutUs />

        {/* TODO: Remove this offset when galery is added */}
        <div className="h-96 bg-white"></div>
        {/*  */}

        <Contact />
      </main>
    </>
  );
};

export default Home;
