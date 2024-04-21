import { NumberChipType } from '../type';
import * as S from './NumberChip.style';

const NumberChip = ({ children }: NumberChipType) => {
  return <S.NumberChipStyle>{children}</S.NumberChipStyle>;
};

export default NumberChip;
