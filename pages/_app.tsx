import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {

  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Head><title>Chilling Room</title></Head>
      </SessionProvider>
    </NextUIProvider>
  )
}
