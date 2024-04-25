import { Unsubscribe } from '@/components/Icons';
import Button from '@/components/button/Button';
import PlusChip from '@/components/chips/plus-chip/PlusChip';
import * as S from './NoInvitedDashboard.style';
import { useEffect, useState } from 'react';
import ModalNewdash from '@/components/Modal/ModalNewdash';
import useDashboards from '@/hooks/useDashboards';

const NoInvitedDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { dashboards, addDashboard, loadDashboards } = useDashboards();

  useEffect(() => {
    loadDashboards();
  }, [loadDashboards]);

  return (
    <S.DashBoardWrapper>
      <Button variant='addDashboard' $width='33.2rem' $height='7rem' onClick={handleOpenModal}>
        <span>새로운 대시 보드</span>
        <PlusChip />
      </Button>
      <S.UnsubscribeWrapper>
        <S.UnsubscribeTitle>초대받은 대시보드</S.UnsubscribeTitle>
        <S.UnsubscribeContainer>
          <Unsubscribe $width='10rem' $height='10rem' />
          <S.UnsubscribeText>아직 초대받은 대시보드가 없어요</S.UnsubscribeText>
        </S.UnsubscribeContainer>
      </S.UnsubscribeWrapper>
      {isModalOpen && <ModalNewdash dashboards={dashboards} onSubmit={addDashboard} onClose={handleCloseModal} />}
    </S.DashBoardWrapper>
  );
};

export default NoInvitedDashboard;
