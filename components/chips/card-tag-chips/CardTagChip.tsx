import CardTagChipStyle from './CardTagChip.style';

interface CardTagChipProps {
  tagColor: string;
  tagTextColor: string;
  children?: string;
}

const CardTagChip = ({ tagColor, tagTextColor, children }: CardTagChipProps) => {
  return (
    <CardTagChipStyle className='font-12-regular' tagColor={tagColor} tagTextColor={tagTextColor}>
      {children}
    </CardTagChipStyle>
  );
};

export default CardTagChip;
