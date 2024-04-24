import Image from 'next/image';
import Logo_large from '@/public/icons/Logo_large.svg';
import * as S from './LoginLogoBox.style';
import Link from 'next/link';

const LoginLogoBox = () => {
  return (
    <S.Container>
      <Link href='/'>
        <S.StyledImage src={Logo_large} alt='logo' width={200} height={279} priority />
        <S.LogoText>오늘도 만나서 반가워요!</S.LogoText>
      </Link>
    </S.Container>
  );
};

export default LoginLogoBox;
