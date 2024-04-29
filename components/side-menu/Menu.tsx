import { Dashboard } from '@/hooks/useDashboards';
import * as S from './Menu.style';
import { MenuType } from './type';

interface Props {
  dashboard: Dashboard;
  selectedDashboardIndex: number;
  setSelectedDashboardIndex: React.Dispatch<React.SetStateAction<number>>;
  type: string;
  id: number;
}

const Menu = ({ dashboard, selectedDashboardIndex, setSelectedDashboardIndex, type, id }: Props) => {
  const handleOnDashboardSelect = () => {
    if (type === 'sideMenu') {
      setSelectedDashboardIndex(id);
    }
  };

  return (
    <S.Menu onClick={handleOnDashboardSelect} color={selectedDashboardIndex === id && type === 'sideMenu' ? 'var(--violet_100)' : 'none'}>
      <S.MenuContainer>
        <S.Point color={dashboard.color} />
        <S.MenuItemContainerStyle>
          {dashboard.createdByMe && <S.CrownIcon src='/icons/Crown.svg' alt='왕관 아이콘' width={18} height={14} />}
          <S.MenuItem displayStyle={type === 'sideMenu' ? 'none' : 'block'}>{dashboard.title}</S.MenuItem>
        </S.MenuItemContainerStyle>
      </S.MenuContainer>
    </S.Menu>
  );
};

export default Menu;
