import * as S from './NumberChip.style';

interface NumberChipType {
  children: number | string;
}

const NumberChip = ({ children }: NumberChipType) => {
  return <S.NumberChipStyle className='font-12-medium'>{children}</S.NumberChipStyle>;
};

export default NumberChip;
