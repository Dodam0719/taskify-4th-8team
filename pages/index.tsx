import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import '../styles/GlobalStyle';
import '../styles/FontStyle';
import Button from '../components/button/Button';

export default function Home() {
  return (
    <>
      <Button variant={'addDashboard'}>로그인</Button>
    </>
  );
}
