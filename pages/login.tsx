import LoginLogoBox from '@/components/pages/login/LoginLogoBox';
import GotoSignup from '@/components/pages/login/GotoSignup';
import LoginForm from '@/components/pages/login/LoginForm';
import * as S from '@/pages/login.style';

const Login = () => {
  return (
    <S.Container>
      <LoginLogoBox />
      <LoginForm />
      <GotoSignup />
    </S.Container>
  );
};

export default Login;
