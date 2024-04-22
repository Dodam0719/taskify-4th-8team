import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './dashboard.style';
import Card from '@/components/card/Card';
import Button from '@/components/button/Button';
import PlusChip from '@/components/chips/plus-chip/PlusChip';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';

const Dashboard = () => {
  return (
    <S.DashboardStyle>
      <SideMenu />
      <S.WrapperStyle>
        {/* <DashboardHeader /> */}
        <S.NavigationStyle>비브리지</S.NavigationStyle>
        <S.CardListStyle>
          <Card>To do</Card>
          <Card>On Progress</Card>
          <Card>Done</Card>
          <S.ButtonStyle>
            <Button variant='addColumn' $width='35.4rem' $height='7rem'>
              <span>새로운 컬럼 추가하기</span>
              <PlusChip />
            </Button>
          </S.ButtonStyle>
          <Button variant='addColumn' $width='35.4rem' $height='7rem'>
            <span>새로운 컬럼 추가하기</span>
            <PlusChip />
          </Button>
        </S.CardListStyle>
      </S.WrapperStyle>
    </S.DashboardStyle>
  );
};

export default Dashboard;
