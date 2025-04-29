import '@/styles/globals.css';
import type { AppProps } from 'next/app'; // <-- Import AppProps types from Next.js

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
