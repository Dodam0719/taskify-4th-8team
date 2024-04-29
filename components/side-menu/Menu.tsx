import { Dashboard } from '@/hooks/useDashboards';
import * as S from './Menu.style';
import { MenuType } from './type';
import router, { useRouter } from 'next/router';

interface Props {
  dashboard: Dashboard;
  index: number;
  selectedDashboardIndex: number;
  setSelectedDashboardIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Menu = ({ dashboard, index, selectedDashboardIndex, setSelectedDashboardIndex, onClick }: Props) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    const queryString = `${id}`;
    router.push(`/dashboard/${queryString}`);
  };
  const handleOnDashboardSelect = () => {
    setSelectedDashboardIndex(index);
    handleClick(dashboard.id);
    console.log(index);
  };

  return (
    <S.Menu onClick={handleOnDashboardSelect} color={selectedDashboardIndex === index ? 'var(--violet_100)' : 'none'}>
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
