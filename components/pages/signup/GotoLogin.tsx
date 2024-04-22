import Link from 'next/link';
import * as S from './GotoLogin.style';

const GotoLogin = () => {
  return (
    <>
      <S.Text>
        이미 가입하셨나요? <S.StyledLink href={`/`}>로그인 하기</S.StyledLink>
      </S.Text>
    </>
  );
};

export default GotoLogin;
