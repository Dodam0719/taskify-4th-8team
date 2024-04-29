import * as S from './Column.style';
import Image from 'next/image';
import CardTagChips from '../chips/card-tag-chips/CardTagChips';
import PlusChip from '../chips/plus-chip/PlusChip';
import Button from '../button/Button';
import { Cardinfo } from './type';
import ModalTodo from '../Modal/ModalTodo';
import ModalTask from '../Modal/ModalTask';
import { useEffect, useState } from 'react';
import api from '@/pages/api/api';
import { Column } from '../chips/type';

interface CardProps {
  dashboardId: string;
  columninfo: Column;
  onCountChange: any;
}
const Card: React.FC<CardProps> = ({ dashboardId, columninfo, onCountChange }) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
  const [cardsInfo, setCardsInfo] = useState<Cardinfo>({ cursorId: 0, totalCount: 0, cards: [] });
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleTaskModal = (cardId: number) => {
    setSelectedCardId(cardId); // 클릭된 카드의 아이디 설정
    setIsTaskModalOpen(true);
  };

  const handleTodoModal = () => {
    setIsTodoModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsTodoModalOpen(false);
    setIsTaskModalOpen(false);
  };
  const handleNewCardSubmit = (data: { name: string }) => {
    // 할일 생성 생성 로직 추가
  };

  useEffect(() => {
    const fetchCardsInfo = async () => {
      if (dashboardId)
        try {
          const response = await api.get(`/cards?size=10&columnId=${columninfo.id}`);
          setCardsInfo(response.data);
          onCountChange(response.data.totalCount);
        } catch (error) {
          console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
        }
    };

    fetchCardsInfo();
  }, [dashboardId]);

  return (
    <S.CardListItemStyle>
      {isTodoModalOpen && (
        <ModalTodo
          dashboardId={dashboardId}
          columninfo={columninfo}
          todoTitle='할 일 생성'
          onSubmit={handleNewCardSubmit}
          onClose={handleCloseModal}
        />
      )}
      <Button variant='addTodo' onClick={handleTodoModal} $width='31.4rem' $height='4rem'>
        <PlusChip />
      </Button>
      {isTaskModalOpen && (
        <ModalTask CardId={selectedCardId} columninfo={columninfo} dashboardId={dashboardId} onClose={handleCloseModal} />
      )}
      {cardsInfo.cards.map((card) => (
        <S.CardStyle key={card.id} onClick={() => handleTaskModal(card.id)}>
          {card.imageUrl !== null && <S.CardImageStyle src={card.imageUrl} alt='카드 이미지' width={272} height={160} priority={false} />}
          <S.InfoContainerStyle>
            <S.CardItemTitleStyle>{card.title}</S.CardItemTitleStyle>
            <S.ContainerStyle>
              <CardTagChips tagList={card.tags} />
              <S.CardBottomStyle>
                <S.DateStyle>
                  <Image src='/icons/Calendar.svg' alt='달력 아이콘' width={18} height={18} priority={false} />
                  <div>
                    {card.updatedAt === card.createdAt
                      ? new Date(card.createdAt).toLocaleDateString('ko-KR')
                      : new Date(card.updatedAt).toLocaleDateString('ko-KR')}
                  </div>
                </S.DateStyle>
                <S.ProfileStyle>
                  {card.assignee.profileImageUrl ? (
                    <img src={card.assignee.profileImageUrl} alt={`Profile Image of ${card.assignee.nickname}`} />
                  ) : (
                    <span>{card.assignee.nickname.charAt(0)}</span>
                  )}
                </S.ProfileStyle>
              </S.CardBottomStyle>
            </S.ContainerStyle>
          </S.InfoContainerStyle>
        </S.CardStyle>
      ))}
    </S.CardListItemStyle>
  );
};

export default Card;
