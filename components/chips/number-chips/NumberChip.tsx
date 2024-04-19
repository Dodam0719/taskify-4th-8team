import * as S from './NumberChip.style';

interface NumberChipType {
  children: number | string;
}

const NumberChip = ({ children }: NumberChipType) => {
  return <S.NumberChipStyle>{children}</S.NumberChipStyle>;
};

export default NumberChip;
