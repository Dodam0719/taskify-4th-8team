import Image from 'next/image';
import * as S from './SideMenu.style';
import Menu from './Menu';

const COLOR = ['--green_100', '--purple_100', '--orange_100', '--blue_100', '--pink_100'];
const MENU_NAME = ['비브리지', '코드잇', '3분기 계획', '회의록', '중요 문서함'];

const SideMenu = () => {
  return (
    <S.SideMenuStyle>
      <section className='logo-container'>
        <Image className='logo-image' src='/assets/sidemenu/logo-image.svg' alt='로고 이미지' width={29} height={33} />
        <Image className='logo-title' src='/assets/sidemenu/logo-title.svg' alt='로고 텍스트' width={80} height={22} />
      </section>
      <section className='container'>
        <span className='font-12-bold text'>Dash Boards</span>
        <Image src='/assets/icon/add-icon.svg' alt='추가 아이콘' width={20} height={20} />
      </section>
      <section className='list-container'>
        {COLOR.map((color, index) => (
          <Menu key={index} color={color} menuName={MENU_NAME[index]} />
        ))}
      </section>
    </S.SideMenuStyle>
  );
};

export default SideMenu;
