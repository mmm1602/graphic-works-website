import '@/styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { AppProps } from 'next/app'; // <-- Import AppProps types from Next.js
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights/>
    </>
  );
}
