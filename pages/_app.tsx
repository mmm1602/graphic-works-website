import '@/styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <title>GraphicWorks | Building Brands</title>
      </Head>

      

      {/* Page Content */}
      <div className="relative z-10 min-h-screen">
        <Component {...pageProps} />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
}