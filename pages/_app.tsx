import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import FontStyle from '../styles/FontStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <FontStyle />
    </>
  );
}
