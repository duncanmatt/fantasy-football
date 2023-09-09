import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import NextTopLoader from 'nextjs-toploader';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>FF Auxiliary</title>
        <meta name='description' content='Fantasy Football Draft News' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#f5f5f5'></meta>
      </Head>
      <NextTopLoader
        color='#1d70b8'
        shadow={false}
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing='ease'
        speed={200}
      />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
