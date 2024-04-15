import CardTagChipStyle from './CardTagChip.style';

const CARD_TAG_NAME = ['프로젝트', '일반', '백엔드', '상'];
const CARD_TAG_COLOR = ['#F9EEE3', '#E7F7DB', '#F7DBF0', '#DBE6F7'];

const CardTagChip = () => {
  return CARD_TAG_NAME.map((tag, i) => (
    <CardTagChipStyle key={i} className='font-12-regular' tagColor={CARD_TAG_COLOR[i]}>
      {tag}
    </CardTagChipStyle>
  ));
};

export default CardTagChip;
