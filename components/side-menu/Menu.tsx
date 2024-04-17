import Image from 'next/image';
import * as S from './Menu.style';

interface MenuType {
  color: string;
  menuName: string;
}

const Menu = ({ color, menuName }: MenuType) => {
  return (
    <S.MenuStyle color={color}>
      <div className='menu-container'>
        <div className='point' />
        <span className='font-18-medium menu'>{menuName}</span>
      </div>
      {/* 내가 만든 대시보드에만 달리게 조건 달아줘야 함 */}
      <Image className='crown-icon' src='/assets/icon/crown_icon.svg' alt='왕관 아이콘' width={18} height={14} />
    </S.MenuStyle>
  );
};

export default Menu;
