import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './dashboardid.style';
import Card from '@/components/card/Card';
import Button from '@/components/button/Button';
import PlusChip from '@/components/chips/plus-chip/PlusChip';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import { dummyCards } from '../api/dummyCard';
import { CardType } from '../api/dummyCardDataType';

const columnIdToTitleMap: { [key: string]: string } = {
  '0': 'To do',
  '1': 'On Progress',
  '2': 'Done',
};

const Dashboard = () => {
  const cardLists: { [key: string]: CardType[] } = {};

  Object.keys(columnIdToTitleMap).forEach((columnId) => {
    cardLists[columnId] = dummyCards[0].cards.filter((card) => card.columnId === parseInt(columnId));
  });

  return (
    <S.DashboardStyle>
      <SideMenu />
      <S.WrapperStyle>
        <DashboardHeader isShow='show' />
        <S.CardListStyle>
          {Object.entries(cardLists).map(([columnId, cardList]) => (
            <Card key={columnId} cardList={cardList}>
              {columnIdToTitleMap[columnId]}
            </Card>
          ))}
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
