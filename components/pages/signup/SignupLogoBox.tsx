import Image from 'next/image';
import Logo_large from '@/public/icons/Logo_large.svg';
import * as S from './SignupLogoBox.style';

const SignupLogoBox = () => {
  return (
    <S.Container>
      <S.StyledImage src={Logo_large} alt='logo' width={200} height={279} />
      <S.LogoText>첫 방문을 환영합니다!</S.LogoText>
    </S.Container>
  );
};

export default SignupLogoBox;
