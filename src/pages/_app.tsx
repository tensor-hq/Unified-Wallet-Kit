import React from 'react';
import type { AppProps } from 'next/app';
import { CometKitProvider } from 'src/contexts/CometKitProvider';
import GlobalStyles from 'src/styles/GlobalStyles';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CometKitProvider
      passThroughWallet={null}
      config={{
        autoConnect: true,
        metadata: {
          uri: '',
          icon: '',
          name: '',
        },
      }}
    >
      <GlobalStyles />
      <Component className="App" {...pageProps} />
    </CometKitProvider>
  )
}