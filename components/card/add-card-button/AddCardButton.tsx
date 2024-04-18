import PlusChip from '@/components/chips/plus-chip/PlusChip';
import * as S from './AddCardButton.style';
import Link from 'next/link';

const AddCardButton = () => {
  return (
    // 해당하는 컬럼 할 일 생성 모달 연결
    <S.AddCardButtonStyle>
      <PlusChip />
    </S.AddCardButtonStyle>
  );
};

export default AddCardButton;
