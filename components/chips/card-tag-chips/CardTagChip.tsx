import { CardTagChipType } from '../type';
import * as S from './CardTagChip.style';

const CardTagChip = ({ tagColor, tagTextColor, children }: CardTagChipType) => {
  return (
    <S.CardTagChip $tagColor={tagColor} $tagTextColor={tagTextColor}>
      <S.Tag>{children}</S.Tag>
    </S.CardTagChip>
  );
};

export default CardTagChip;
