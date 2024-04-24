import * as S from './GotoSignup.style';

const GotoSignup = () => {
  return (
    <>
      <S.Text>
        회원이 아니신가요? <S.StyledLink href={'/signup'}>회원가입하기</S.StyledLink>
      </S.Text>
    </>
  );
};

export default GotoSignup;
