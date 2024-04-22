import LoginInputs from '@/components/pages/login/LoginInputs';
import LoginLogoBox from '@/components/pages/login/LoginLogoBox';
import GotoSignup from '@/components/pages/login/GotoSignup';
import Button from '@/components/button/Button';
import * as S from './index.style';

const Login = () => {
  return (
    <S.Container>
      <LoginLogoBox />
      <LoginInputs />
      <Button variant='login' $width='52rem' $height='5rem'>
        로그인
      </Button>
      <GotoSignup />
    </S.Container>
  );
};

export default Login;
