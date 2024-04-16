import CardTagChip from './CardTagChip';
import * as S from './CardTagChips.style';

const CARD_TAG_NAME = ['프로젝트', '일반', '백엔드', '상'];
const CARD_TAG_COLOR = ['#F9EEE3', '#E7F7DB', '#F7DBF0', '#DBE6F7'];
const CARD_TAG_TEXT_COLOR = ['#D58D49', '#86D549', '#D549B6', '#4981D5'];

const CardTagChips = () => {
  return (
    <S.CardTagChipsStyle>
      {CARD_TAG_NAME.map((tag, i) => (
        <CardTagChip key={i} tagColor={CARD_TAG_COLOR[i]} tagTextColor={CARD_TAG_TEXT_COLOR[i]}>
          {tag}
        </CardTagChip>
      ))}
    </S.CardTagChipsStyle>
  );
};

export default CardTagChips;
