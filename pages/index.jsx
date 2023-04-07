import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Storm Roofing</title>
        <meta name="description" content="Storm Roofing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <h1 className="text-3xl text-red-500">Welcome</h1>
      </main>
    </>
  );
}
