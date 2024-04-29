import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './dashboardid.style';
import Card from '@/components/card/Column';
import Button from '@/components/button/Button';
import PlusChip from '@/components/chips/plus-chip/PlusChip';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import { dummyCards } from '../api/dummyCard';
import { CardType } from '../api/dummyCardDataType';
import { useEffect, useState } from 'react';
import ModalColumn from '@/components/Modal/ModalColumn';
import { useRouter } from 'next/router';
import api from '../api/api';
import Column from '@/components/card/Column';
import { Columninfo } from '@/components/chips/type';

const columnIdToTitleMap: { [key: string]: string } = {
  '0': 'To do',
  '1': 'On Progress',
  '2': 'Done',
};

const cardLists: { [key: string]: CardType[] } = {};

const Dashboard = () => {
  const router = useRouter();
  const { dashboardid } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [columnsinfo, setColumnsInfo] = useState<Columninfo>({ result: '', data: [] });
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

  useEffect(() => {
    const fetchColumnsInfo = async () => {
      if (dashboardid)
        try {
          const response = await api.get(`/columns?dashboardId=${dashboardid}`);
          setColumnsInfo(response.data);
        } catch (error) {
          console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
        }
    };

    fetchColumnsInfo();
  }, [dashboardid]);

  return (
    <S.DashboardStyle>
      <SideMenu />
      <S.WrapperStyle>
        <DashboardHeader isVisible='true' dashboardId={dashboardid} />
        <S.CardListStyle>
          {columnsinfo.data.map((column) => (
            <Column key={column.id} column={column} dashboardId={dashboardid}></Column>
          ))}
          {isModalOpen && (
            <ModalColumn
              title='새 컬럼 생성'
              placeholder='새로운 프로젝트'
              onSubmit={handleNewColumnSubmit}
              onClose={handleCloseModal}
              dashboardId={dashboardid}
            />
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
