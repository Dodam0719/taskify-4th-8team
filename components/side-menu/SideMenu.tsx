import * as S from './SideMenu.style';
import Menu from './Menu';
import { Add } from '../Icons';
import { useEffect, useState } from 'react';
import ModalNewdash from '../Modal/ModalNewdash';
import { useResource } from '@/hooks/useResource';
import { BaseDashboard, Dashboard } from '@/hooks/useDashboards';
import useGetDashboards from '@/query/useGetDashboards';
import Link from 'next/link';

const COLOR = ['--green_100', '--purple_100', '--orange_100', '--blue_100', '--pink_100', '--green_100'];
const MENU_NAME = ['비브리지', '코드잇', '3분기 계획', '회의록', '중요 문서함', '가나다라마바아'];

export interface ResDashboards {
  dashboards: Dashboard[];
  totalCount: number;
  cursorId: null | string;
}

const SideMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDashboardIndex, setSelectedDashboardIndex] = useState(-1);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // const {
  //   data: resDashBoards,
  //   loading,
  //   error,
  //   fetchData,
  //   createData,
  // } = useResource<Dashboard, BaseDashboard, ResDashboards>('/dashboards/?navigationMethod=pagination');
  // if (!resDashBoards) return;
  // const dashboards = resDashBoards.dashboards;

  const { data, isPending, isError } = useGetDashboards();

  if (isPending) return <div>로딩중</div>;
  if (isError) return <div>데이터 패칭중 에러 발생</div>;

  const { dashboards } = data;

  if (!dashboards) return <div></div>;

  const myDashboards = dashboards.filter((dashboard) => dashboard.createdByMe);
  const inviteDashBoards = dashboards.filter((dashboard) => !dashboard.createdByMe);

  return (
    <S.SideMenu>
      <S.LogoContainer href='/'>
        <S.LogoImage src='/images/Logo_Image.svg' alt='로고 이미지' width={29} height={33} />
        <S.LogoTitle src='/images/Logo_Title.svg' alt='로고 텍스트' width={80} height={22} />
      </S.LogoContainer>
      <S.Container>
        <S.Text>Dash Boards</S.Text>
        <Add $width='2rem' $height='2rem' onClick={handleOpenModal} />
      </S.Container>
      <S.ListContainer>
        {myDashboards.map((dashboard) => (
          <Link href={`/dashboard/${dashboard.id}`} key={dashboard.id}>
            <Menu
              id={dashboard.id}
              dashboard={dashboard}
              selectedDashboardIndex={selectedDashboardIndex}
              setSelectedDashboardIndex={(index) => {
                setSelectedDashboardIndex(index);
              }}
              type='sideMenu'
            />
          </Link>
        ))}
        {inviteDashBoards.map((dashboard) => (
          <Link href={`/dashboard/${dashboard.id}`} key={dashboard.id}>
            <Menu
              id={dashboard.id}
              dashboard={dashboard}
              selectedDashboardIndex={selectedDashboardIndex}
              setSelectedDashboardIndex={(index) => {
                setSelectedDashboardIndex(index);
              }}
              type='sideMenu'
            />
          </Link>
        ))}
      </S.ListContainer>
      {isModalOpen && <ModalNewdash dashboards={dashboards} onClose={handleCloseModal} />}
    </S.SideMenu>
  );
};

export default SideMenu;
