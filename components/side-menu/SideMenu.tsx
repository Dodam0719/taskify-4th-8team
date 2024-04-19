import Image from 'next/image';
import * as S from './SideMenu.style';
import Menu from './Menu';

const COLOR = ['--green_100', '--purple_100', '--orange_100', '--blue_100', '--pink_100'];
const MENU_NAME = ['비브리지', '코드잇', '3분기 계획', '회의록', '중요 문서함'];

const SideMenu = () => {
  return (
    <S.SideMenu>
      <S.LogoContainer>
        <S.LogoImage src='/assets/sidemenu/logo-image.svg' alt='로고 이미지' width={29} height={33} />
        <S.LogoTitle src='/assets/sidemenu/logo-title.svg' alt='로고 텍스트' width={80} height={22} />
      </S.LogoContainer>
      <S.Container>
        <S.Text>Dash Boards</S.Text>
        <Image src='/assets/icon/add-icon.svg' alt='추가 아이콘' width={20} height={20} />
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
