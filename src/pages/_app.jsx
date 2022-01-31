import 'src/styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp