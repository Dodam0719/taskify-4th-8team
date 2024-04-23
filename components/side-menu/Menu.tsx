import * as S from './Menu.style';
import { MenuType } from './type';

const Menu = ({ color, menuName }: MenuType) => {
  return (
    <S.Menu>
      <S.MenuContainer>
        <S.Point color={color} />
        <S.MenuItemContainerStyle>
          {/* 내가 만든 대시보드에만 달리게 조건 달아줘야 함 */}
          <S.CrownIcon src='/icons/Crown.svg' alt='왕관 아이콘' width={18} height={14} />
          <S.MenuItem>{menuName}</S.MenuItem>
        </S.MenuItemContainerStyle>
      </S.MenuContainer>
    </S.Menu>
  );
};

export default Menu;
