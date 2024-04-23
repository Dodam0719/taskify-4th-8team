import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './mydashboard.style';
import NoInvitedDashboard from '@/components/table/no-invited-dashboard/NoInvitedDashboard';
import InviteDash from '@/components/table/invitedash/InviteDash';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';

const MyDashBoard = () => {
  return (
    <S.MyDashBoardStyle>
      <SideMenu />
      <S.MyDashBoardWrapperStyle>
        <S.ContainerStyle>
          <DashboardHeader isShow='none' />
          {/* <NoInvitedDashboard /> */}
          <InviteDash />
        </S.ContainerStyle>
      </S.MyDashBoardWrapperStyle>
    </S.MyDashBoardStyle>
  );
};

export default MyDashBoard;
