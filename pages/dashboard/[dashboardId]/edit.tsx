import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './edit.style';
import DashboardNewName from '@/components/dashboard-edit/DashboardNewName';
import { Arrow_forward } from '@/components/Icons';
import Table from '@/components/table/Table';
import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';

const DashboardEdit = () => {
  const router = useRouter();
  const { dashboardId } = router.query;
  console.log(dashboardId);

  return (
    <S.DashboardEditStyle>
      <SideMenu />
      <S.DashboardWrapperStyle>
        <DashboardHeader isVisible='true' children='' />
        <S.DashboardMainStyle>
          <S.DashboardBackStyle>
            <Arrow_forward $width='2rem' $height='2rem' />
            <p>돌아가기</p>
          </S.DashboardBackStyle>
          <S.DashboardBoardListStyle>
            <DashboardNewName>비브리지</DashboardNewName>
            <Table title='구성원' userList='이름' />
            <Table title='초대 내역' userList='이메일' />
          </S.DashboardBoardListStyle>
        </S.DashboardMainStyle>
      </S.DashboardWrapperStyle>
    </S.DashboardEditStyle>
  );
};

export default DashboardEdit;
