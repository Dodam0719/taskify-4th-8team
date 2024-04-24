import Image from 'next/image';
import Logo_large from '@/public/icons/Logo_large.svg';
import * as S from './SignupLogoBox.style';
import Link from 'next/link';

const SignupLogoBox = () => {
  return (
    <S.Container>
      <Link href='/'>
        <S.StyledImage src={Logo_large} alt='logo' width={200} height={279} priority />
        <S.LogoText>첫 방문을 환영합니다!</S.LogoText>
      </Link>
    </S.Container>
  );
};

export default SignupLogoBox;
