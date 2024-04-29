import React from 'react';
import * as S from './Footer.style';
import Link from 'next/link';
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
          <Link href='http://www.codeit.kr/'>
            <S.Image src='/assets/icon/email_icon.svg' alt='이메일 아이콘' />
          </Link>
          <Link href='https://www.facebook.com/'>
            <S.Image src='/assets/icon/facebook_icon.svg' alt='페이스북 아이콘' />
          </Link>
          <Link href='https://www.instagram.com/'>
            <S.Image src='/assets/icon/instagram_icon.svg' alt='인스타그램 아이콘' />
          </Link>
        </S.FooterRight>
      </S.FooterWrapper>
    </S.Footer>
  );
};
export default CustomFooter;
