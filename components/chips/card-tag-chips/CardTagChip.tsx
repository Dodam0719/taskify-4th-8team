import * as S from './CardTagChip.style';

interface CardTagChipProps {
  tagColor: string;
  tagTextColor: string;
  children?: string;
}

const CardTagChip = ({ tagColor, tagTextColor, children }: CardTagChipProps) => {
  return (
    <S.CardTagChip tagColor={tagColor} tagTextColor={tagTextColor}>
      <S.Tag>{children}</S.Tag>
    </S.CardTagChip>
  );
};

export default CardTagChip;
