import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import FontStyle from '../styles/FontStyle';
import Provider from '@/QueryClientProvier';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <GlobalStyle />
      <FontStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
