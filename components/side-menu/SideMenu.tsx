import * as S from './SideMenu.style';
import Menu from './Menu';
import { Add } from '../Icons';

const COLOR = ['--green_100', '--purple_100', '--orange_100', '--blue_100', '--pink_100', '--green_100'];
const MENU_NAME = ['비브리지', '코드잇', '3분기 계획', '회의록', '중요 문서함', '가나다라마바아'];

const SideMenu = () => {
  return (
    <S.SideMenu>
      <S.LogoContainer href='/'>
        <S.LogoImage src='/images/Logo_Image.svg' alt='로고 이미지' width={29} height={33} />
        <S.LogoTitle src='/images/Logo_Title.svg' alt='로고 텍스트' width={80} height={22} />
      </S.LogoContainer>
      <S.Container>
        <S.Text>Dash Boards</S.Text>
        <Add $width='2rem' $height='2rem' />
      </S.Container>
      <S.ListContainer>
        {COLOR.map((color, index) => (
          <Menu key={index} color={color} menuName={MENU_NAME[index]} />
        ))}
      </S.ListContainer>
    </S.SideMenu>
  );
};

export default SideMenu;
