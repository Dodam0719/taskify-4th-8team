import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import FontStyle from '../styles/FontStyle';
import ModalTask from '@/components/Modal/ModalTask';
import LandingPage from './landingPage';
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ModalTask />
      <FontStyle />
    </>
  );
}
