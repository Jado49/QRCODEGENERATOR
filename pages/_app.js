// _app.js

import '../styles/globals.css'; // Import global styles here
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>QRCody</title>
        {/* Additional meta tags, stylesheets, or scripts */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
