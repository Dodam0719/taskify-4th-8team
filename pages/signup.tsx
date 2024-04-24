import SignupLogoBox from '@/components/pages/signup/SignupLogoBox';
import GotoLogin from '@/components/pages/signup/GotoLogin';
import SignupForm from '@/components/pages/signup/SignupForm';
import * as S from '@/pages/signup.style';

const Signup = () => {
  return (
    <>
      <S.Container>
        <SignupLogoBox />
        <SignupForm />
        <GotoLogin />
      </S.Container>
    </>
  );
};

export default Signup;
