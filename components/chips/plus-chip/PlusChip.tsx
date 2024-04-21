import * as S from './PlusChip.style';

const PlusChip = () => {
  return (
    <S.PlusChipContainer>
      <S.AddImage src='/icons/Add_Chip.svg' alt='추가하기 이미지' width={16} height={16} />
    </S.PlusChipContainer>
  );
};

export default PlusChip;
