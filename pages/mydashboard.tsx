import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './mydashboard.style';
import NoInvitedDashboard from '@/components/table/no-invited-dashboard/NoInvitedDashboard';
import InviteDash from '@/components/table/invitedash/InviteDash';

const MyDashBoard = () => {
  return (
    <S.MyDashBoardStyle>
      <SideMenu />
      {/* <NoInvitedDashboard /> */}
      <InviteDash />
    </S.MyDashBoardStyle>
  );
};

export default MyDashBoard;
