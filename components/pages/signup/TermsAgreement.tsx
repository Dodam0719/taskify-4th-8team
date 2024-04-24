import { useState } from 'react';
import * as S from './TermsAgreement.style';

const TermsAgreement = ({ isAgree, setIsAgree }: { isAgree: boolean; setIsAgree: Function }) => {
  const changeAgree = () => {
    setIsAgree(!isAgree);
  };

  return (
    <S.Container>
      <S.CheckBox type='checkbox' onChange={changeAgree} />
      <S.AgreeText>이용약관에 동의합니다.</S.AgreeText>
    </S.Container>
  );
};

export default TermsAgreement;
