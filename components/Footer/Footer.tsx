import React from 'react';
import * as S from './Footer.style';
const CustomFooter = () => {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <S.FooterText>©codeit - 2023</S.FooterText>
        <S.FooterMidle>
          <S.FooterText>Privacy policy</S.FooterText>
          <S.FooterText>FAQ</S.FooterText>
        </S.FooterMidle>
        <S.FooterRight>
          <S.Image src='/email_icon.svg' alt='이메일 아이콘' />
          <S.Image src='/facebook_icon.svg' alt='페이스북 아이콘' />
          <S.Image src='/instagram_icon.svg' alt='인스타그램 아이콘' />
        </S.FooterRight>
      </S.FooterWrapper>
    </S.Footer>
  );
};
export default CustomFooter;
