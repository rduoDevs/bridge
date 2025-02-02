import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bridge</title>
        <meta
          name="description"
          content="Bridge is Supercool."
        />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
