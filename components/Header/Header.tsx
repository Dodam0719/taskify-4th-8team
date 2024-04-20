import React from 'react';
import * as S from './Header.style';

const CustomHeader = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        {/* 링크추가예정 */}
        <S.StyledLink>
          <S.ImageIcon src='/header.img.icon.svg' alt='main logo' />
          <S.ImageText src='/Taskify.text.icon.svg' alt='main title' />
        </S.StyledLink>
        <S.ButtonWrapper>
          {/* 링크추가예정 */}
          <S.Button>로그인</S.Button>
          <S.Button>회원가입</S.Button>
        </S.ButtonWrapper>
      </S.HeaderWrapper>
    </S.Header>
  );
};
export default CustomHeader;
