import * as S from './CardTagChip.style';

interface CardTagChipProps {
  tagColor: string;
  tagTextColor: string;
  children?: string;
}

const CardTagChip = ({ tagColor, tagTextColor, children }: CardTagChipProps) => {
  return (
    <S.CardTagChipStyle className='font-12-regular' tagColor={tagColor} tagTextColor={tagTextColor}>
      {children}
    </S.CardTagChipStyle>
  );
};

export default CardTagChip;
