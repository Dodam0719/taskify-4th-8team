import { useEffect, useRef, useState } from 'react';
import CardTagChips from '../chips/card-tag-chips/CardTagChips';
import ProgressChipList from '../chips/progress-chips/ProgressChipList';
import ModalBackground from './ModalBackground';
import ModalInputComment from './ModalInputComment';
import * as S from './ModalTask.style';
import ModalTools from './ModalTools';
import { CardType } from '@/pages/api/dummyCardDataType';
import { Cardinfo } from '../card/type';
import api from '@/pages/api/api';
import { Cards } from '../table/type';
import { Column } from '../chips/type';
interface ModalTaskProps {
  onClose: () => void;
  width?: string;
  height?: string;
  tabletWidth?: string;
  tabletHeight?: string;
  mobileWidth?: string;
  mobileHeight?: string;
  CardId: number | null;
  columninfo: Column;
  // tagList: CardType[];
}

const ModalTask = ({
  CardId,
  columninfo,
  onClose,
  width,
  height,
  tabletWidth,
  tabletHeight,
  mobileWidth,
  mobileHeight,
}: ModalTaskProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const KebobChoiceRef = useRef<HTMLImageElement>(null);
  const [cardsInfo, setCardsInfo] = useState<Cards>({});

  const handleSetIsOpen = () => {
    setIsHidden(!isHidden);
  };
  const handleClickOutside = (event: any) => {
    if (KebobChoiceRef.current && !KebobChoiceRef.current.contains(event.target)) {
      setIsHidden(true);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [KebobChoiceRef]);

  const cardLists: { [key: string]: CardType[] } = {};

  useEffect(() => {
    const fetchCardsInfo = async () => {
      try {
        const response = await api.get(`/cards/${CardId}`);
        setCardsInfo(response.data);
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
      }
    };

    fetchCardsInfo();
  }, []);
  return (
    <ModalBackground
      onClose={onClose}
      width='73rem'
      height='76.3rem'
      tabletWidth='68rem'
      tabletHeight='77rem'
      mobileWidth='32.7rem'
      mobileHeight='70rem'>
      <S.ModalTask>
        <S.ModalTaskHeader>
          <h1>{cardsInfo.title}</h1>
          <img onClick={handleSetIsOpen} ref={KebobChoiceRef} className='kebob' src='/assets/icon/kebob_icon.svg' alt='케밥 버튼이미지' />
          {!isHidden && <ModalTools hidden={isHidden} />}
          <img className='close' src='/assets/icon/close_icon.svg' alt='종료 버튼이미지' />
        </S.ModalTaskHeader>
        <S.ModalTaskBox>
          <S.ResponsiblePerson>
            <h3>담당자</h3>
            <div>
              {cardsInfo.assignee ? (
                <>
                  <text>{cardsInfo.assignee.nickname.charAt(0)}</text>
                  <p>{cardsInfo.assignee.nickname}</p>
                </>
              ) : (
                <span>No assignee</span>
              )}
            </div>
          </S.ResponsiblePerson>
          <S.Deadline>
            <h3>마감일</h3>
            <p>{cardsInfo.dueDate}</p>
          </S.Deadline>
        </S.ModalTaskBox>
        <S.ModalTaskChips>
          <S.ProgressChip>
            <div />
            <span>{columninfo.title}</span>
          </S.ProgressChip>
          <S.CardChips>{cardsInfo.tags}</S.CardChips>
        </S.ModalTaskChips>
        <S.ModalTaskText>{cardsInfo.description}</S.ModalTaskText>
        {cardsInfo.imageUrl && <S.ModalTaskImg src={cardsInfo.imageUrl} alt='테스크 이미지' />} <ModalInputComment />
        <S.ModalTaskComment>
          <S.CommentTitle>
            <text>C</text>
            <h2>정만철</h2>
            <p>2022.12.27.14:00</p>
          </S.CommentTitle>
          <S.Comment>
            <p>오늘안에 CCC까지 만들 수 있을까요?</p>
          </S.Comment>
          <S.Edit>
            <p>수정</p>
            <p>삭제</p>
          </S.Edit>
        </S.ModalTaskComment>
      </S.ModalTask>
    </ModalBackground>
  );
};
export default ModalTask;
