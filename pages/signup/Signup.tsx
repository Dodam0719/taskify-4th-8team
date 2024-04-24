import SignupInputs from '@/components/pages/signup/SignupInputs';
import SignupLogoBox from '@/components/pages/signup/SignupLogoBox';
import Button from '@/components/button/Button';
import GotoLogin from '@/components/pages/signup/GotoLogin';
import * as S from './Signup.style';
import TermsAgreement from '@/components/pages/signup/TermsAgreement';

const Signup = () => {
  return (
    <>
      <S.Container>
        <SignupLogoBox />
        <S.InputContainer>
          <SignupInputs />
          <TermsAgreement />
        </S.InputContainer>
        <Button variant='signup' $width='52rem' $height='5rem'>
          가입하기
        </Button>
        <GotoLogin />
      </S.Container>
    </>
  );
};

export default Signup;
