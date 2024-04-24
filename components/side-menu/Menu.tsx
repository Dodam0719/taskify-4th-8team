import { Dashboard } from '@/hooks/useDashboards';
import * as S from './Menu.style';
import { MenuType } from './type';

interface Props {
  dashboard: Dashboard;
}

const Menu = ({ dashboard }: Props) => {
  return (
    <S.Menu>
      <S.MenuContainer>
        <S.Point color={dashboard.color} />
        <S.MenuItemContainerStyle>
          {/* 내가 만든 대시보드에만 달리게 조건 달아줘야 함 */}
          {dashboard.createdByMe && <S.CrownIcon src='/icons/Crown.svg' alt='왕관 아이콘' width={18} height={14} />}
          <S.MenuItem>{dashboard.title}</S.MenuItem>
        </S.MenuItemContainerStyle>
      </S.MenuContainer>
    </S.Menu>
  );
};

export default Menu;
