import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './dashboardid.style';
import Card from '@/components/card/Card';
import Button from '@/components/button/Button';
import PlusChip from '@/components/chips/plus-chip/PlusChip';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import { dummyCards } from '../api/dummyCard';
import { CardType } from '../api/dummyCardDataType';
import { useState } from 'react';
import ModalColumn from '@/components/Modal/ModalColumn';
import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';

const columnIdToTitleMap: { [key: string]: string } = {
  '0': 'To do',
  '1': 'On Progress',
  '2': 'Done',
};

const cardLists: { [key: string]: CardType[] } = {};

const Dashboard = () => {
  const router = useRouter();
  const { dashboardId } = router.query;
  console.log(dashboardId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewColumnModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNewColumnSubmit = (data: { name: string }) => {
    // 새 컬럼 생성 로직 추가
  };

  Object.keys(columnIdToTitleMap).forEach((columnId) => {
    cardLists[columnId] = dummyCards[0].cards.filter((card) => card.columnId === parseInt(columnId));
  });

  return (
    <S.DashboardStyle>
      <SideMenu />
      <S.WrapperStyle>
        <DashboardHeader isVisible='true' children='' />
        <S.CardListStyle>
          {Object.entries(cardLists).map(([columnId, cardList]) => (
            <Card key={columnId} cardList={cardList}>
              {columnIdToTitleMap[columnId]}
            </Card>
          ))}
          {isModalOpen && (
            <ModalColumn title='새 컬럼 생성' placeholder='새로운 프로젝트' onSubmit={handleNewColumnSubmit} onClose={handleCloseModal} />
          )}
          <S.ButtonStyle>
            <Button variant='addColumn' onClick={handleNewColumnModal} $width='35.4rem' $height='7rem'>
              <span>새로운 컬럼 추가하기</span>
              <PlusChip />
            </Button>
          </S.ButtonStyle>
          <Button variant='addColumn' onClick={handleNewColumnModal} $width='35.4rem' $height='7rem'>
            <span>새로운 컬럼 추가하기</span>
            <PlusChip />
          </Button>
        </S.CardListStyle>
      </S.WrapperStyle>
    </S.DashboardStyle>
  );
};

export default Dashboard;
