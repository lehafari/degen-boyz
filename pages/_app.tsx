import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import { darkTheme } from '../themes';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const WalletProvider = dynamic(
    () => import('../context/ClientWalletProvider'),
    {
      ssr: false,
    }
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
        <NextUIProvider theme={darkTheme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
