import * as S from './PlusChip.style';

const PlusChip = () => {
  return (
    <S.PlusChip>
      <S.AddImage src='/assets/chips/add-chips.svg' alt='추가하기 이미지' width={16} height={16} />
    </S.PlusChip>
  );
};

export default PlusChip;
