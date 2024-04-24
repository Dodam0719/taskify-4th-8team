import { useEffect, useRef, useState } from 'react';
import CardTagChips from '../chips/card-tag-chips/CardTagChips';
import ProgressChipList from '../chips/progress-chips/ProgressChipList';
import ModalBackground from './ModalBackground';
import ModalInputComment from './ModalInputComment';
import * as S from './ModalTask.style';
import ModalTools from './ModalTools';
import { CardType } from '@/pages/api/dummyCardDataType';
interface ModalTaskProps {
  onClose: () => void;
  width?: string;
  height?: string;
  tabletWidth?: string;
  tabletHeight?: string;
  mobileWidth?: string;
  mobileHeight?: string;
  // tagList: CardType[];
}
const ModalTask = ({ onClose, width, height, tabletWidth, tabletHeight, mobileWidth, mobileHeight }: ModalTaskProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const KebobChoiceRef = useRef<HTMLImageElement>(null);

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
          <h1>새로운 일정 관리 Taskify</h1>
          <img onClick={handleSetIsOpen} ref={KebobChoiceRef} className='kebob' src='/assets/icon/kebob_icon.svg' alt='케밥 버튼이미지' />
          {!isHidden && <ModalTools hidden={isHidden} />}
          <img className='close' src='/assets/icon/close_icon.svg' alt='종료 버튼이미지' />
        </S.ModalTaskHeader>
        <S.ModalTaskBox>
          <S.ResponsiblePerson>
            <h3>담당자</h3>
            <div>
              <text>B</text>
              <p>배유철</p>
            </div>
          </S.ResponsiblePerson>
          <S.Deadline>
            <h3>마감일</h3>
            <p>2022.12.30 19:00</p>
          </S.Deadline>
        </S.ModalTaskBox>
        <S.ModalTaskChips>
          <S.ProgressChip>
            <div />
            <span>To Do</span>
          </S.ProgressChip>
          <S.CardChips>{/* <CardTagChips /> */}</S.CardChips>
        </S.ModalTaskChips>
        <S.ModalTaskText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nibh arcu, quis consequat ante cursus eget. Cras
          mattis, nulla non laoreet porttitor, diam justo laoreet eros, vel aliquet diam elit at leo.
        </S.ModalTaskText>
        <S.ModalTaskImg src='/assets/card/card-image.png' alt='테스크 이미지' />
        <ModalInputComment />
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
