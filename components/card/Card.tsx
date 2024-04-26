import Image from 'next/image';
import CardTagChips from '../chips/card-tag-chips/CardTagChips';
import * as S from './Card.style';
import NumberChip from '../chips/number-chips/NumberChip';
import { Setting } from '../Icons';
import PlusChip from '../chips/plus-chip/PlusChip';
import Button from '../button/Button';
import { CardListType } from './type';
import { CardType } from '@/pages/api/dummyCardDataType';
import { useState } from 'react';
import ModalColumn from '../Modal/ModalColumn';
import ModalTodo from '../Modal/ModalTodo';
import ModalTask from '../Modal/ModalTask';

const Card = ({ children, cardList }: CardListType) => {
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSettingsModal = () => {
    setIsColumnModalOpen(true);
  };

  const handleTodoModal = () => {
    setIsTodoModalOpen(true);
  };

  const handleTaskModal = () => {
    setIsTaskModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsColumnModalOpen(false);
    setIsTodoModalOpen(false);
    setIsTaskModalOpen(false);
  };

  const handleDelete = () => {
    setIsColumnModalOpen(false);
    setShowAlert(true);
  };

  const handleNewCardSubmit = (data: { name: string }) => {
    // 할일 생성 생성 로직 추가
  };

  const handleColumnManageSubmit = (data: { name: string }) => {
    // 컬럼 관리 로직 추가
  };

  return (
    <S.CardWrapperStyle>
      <S.CardHeaderStyle>
        <S.CardHeaderTitleStyle>
          <S.PointStyle />
          <S.TitleStyle>{children}</S.TitleStyle>
          <NumberChip>{cardList.length}</NumberChip>
        </S.CardHeaderTitleStyle>
        {isColumnModalOpen && (
          <ModalColumn
            title='컬럼 관리'
            placeholder='Done'
            onSubmit={handleColumnManageSubmit}
            onClose={handleCloseModal}
            onDelete={handleDelete}
          />
        )}
        <Setting onClick={handleSettingsModal} $width='2.4rem' $height='2.4rem' />
      </S.CardHeaderStyle>
      <S.CardListItemStyle>
        {isTodoModalOpen && <ModalTodo todoTitle='할 일 생성' onSubmit={handleNewCardSubmit} onClose={handleCloseModal} />}
        <Button variant='addTodo' onClick={handleTodoModal} $width='100%' $height='4rem'>
          <PlusChip />
        </Button>
        {isTaskModalOpen && <ModalTask onClose={handleCloseModal} />}
        {cardList.map((card: CardType) => (
          <S.CardStyle key={card.id} onClick={handleTaskModal}>
            {card.imageUrl !== '' && <S.CardImageStyle src={card.imageUrl} alt='카드 이미지' width={272} height={160} />}
            <S.InfoContainerStyle>
              <S.CardItemTitleStyle>{card.title}</S.CardItemTitleStyle>
              <S.ContainerStyle>
                <CardTagChips tagList={card.tags} />
                <S.CardBottomStyle>
                  <S.DateStyle>
                    <Image src='/icons/Calendar.svg' alt='달력 아이콘' width={18} height={18} />
                    <div>
                      {card.updatedAt === card.createdAt
                        ? new Date(card.createdAt).toLocaleDateString('ko-KR')
                        : new Date(card.updatedAt).toLocaleDateString('ko-KR')}
                    </div>
                  </S.DateStyle>
                  <S.ProfileStyle />
                </S.CardBottomStyle>
              </S.ContainerStyle>
            </S.InfoContainerStyle>
          </S.CardStyle>
        ))}
      </S.CardListItemStyle>
    </S.CardWrapperStyle>
  );
};

export default Card;
