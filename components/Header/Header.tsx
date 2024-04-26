import Link from 'next/link';
import * as S from './Header.style';

const CustomHeader = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Link href='/'>
          <S.StyledLink>
            <S.ImageIcon src='/assets/icon/header.img.icon.svg' alt='main logo' />
            <S.ImageText src='/assets/icon/Taskify.text.icon.svg' alt='main title' />
          </S.StyledLink>
        </Link>

        <S.ButtonWrapper>
          <Link href='/login'>
            <S.Button>로그인</S.Button>
          </Link>
          <Link href='/signup'>
            <S.Button>회원가입</S.Button>
          </Link>
        </S.ButtonWrapper>
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default CustomHeader;
