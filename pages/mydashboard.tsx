import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './mydashboard.style';
import InviteDash from '@/components/table/invitedash/InviteDash';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import { useRouter } from 'next/router';

const MyDashBoard = () => {
  const router = useRouter();
  const { dashboardid } = router.query;

  return (
    <S.MyDashBoardStyle>
      <SideMenu />
      <S.MyDashBoardWrapperStyle>
        <S.ContainerStyle>
          <DashboardHeader isVisible='false' dashboardId={dashboardid}>
            내 대시보드
          </DashboardHeader>
          {/* <NoInvitedDashboard /> */}
          <InviteDash />
        </S.ContainerStyle>
      </S.MyDashBoardWrapperStyle>
    </S.MyDashBoardStyle>
  );
};

export default MyDashBoard;
