import * as S from './TermsAgreement.style';

const TermsAgreement = () => {
  return (
    <S.Container>
      <S.CheckBox type='checkbox' />
      <S.AgreeText>이용약관에 동의합니다.</S.AgreeText>
    </S.Container>
  );
};

export default TermsAgreement;
