import Image from 'next/image';
import * as S from './PlusChip.style';

const PlusChip = () => {
  return (
    <S.PlusChipStyle>
      <Image className='add-image' src='/assets/chips/add-chips.svg' alt='추가하기 이미지' width={16} height={16} />
    </S.PlusChipStyle>
  );
};

export default PlusChip;
