// src/app/_app.tsx
import Head from 'next/head';

function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="My portfolio site" />
                <meta name="author" content="Mykyta" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
