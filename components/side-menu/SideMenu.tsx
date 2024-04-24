import * as S from './SideMenu.style';
import Menu from './Menu';
import { Add } from '../Icons';
import useDashboards from '@/hooks/useDashboards';
import { useEffect, useState } from 'react';
import ModalNewdash from '../Modal/ModalNewdash';

const COLOR = ['--green_100', '--purple_100', '--orange_100', '--blue_100', '--pink_100', '--green_100'];
const MENU_NAME = ['비브리지', '코드잇', '3분기 계획', '회의록', '중요 문서함', '가나다라마바아'];

const SideMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { dashboards, addDashboard, loadDashboards } = useDashboards();

  useEffect(() => {
    loadDashboards();
  }, [loadDashboards]);
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
          <Menu key={dashboard.id} dashboard={dashboard} />
        ))}
        {inviteDashBoards.map((dashboard) => (
          <Menu key={dashboard.id} dashboard={dashboard} />
        ))}
      </S.ListContainer>
      {isModalOpen && <ModalNewdash dashboards={dashboards} onSubmit={addDashboard} onClose={handleCloseModal} />}
    </S.SideMenu>
  );
};

export default SideMenu;
