import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import FontStyle from '../styles/FontStyle';
import { Facebook, Crown, Unsubscribe } from '@/components/Icons';
import Button from '@/components/button/Button';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <FontStyle />
      <Facebook />
      <Crown />
      <Unsubscribe />
    </>
  );
}
