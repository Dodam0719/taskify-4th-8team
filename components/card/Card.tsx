import Image from 'next/image';
import CardTagChips from '../chips/card-tag-chips/CardTagChips';
import * as S from './Card.style';

const Card = () => {
  return (
    <S.Card>
      <S.CardImage src='/assets/card/card-image.png' alt='카드 이미지' width={272} height={160} />
      <S.Container>
        <S.CardTitle>새로운 일정 관리 Taskify</S.CardTitle>
        <S.InfoContainer>
          <CardTagChips />
          <S.CardBottomContainer>
            <S.CardDateContainer>
              <Image src='/assets/icon/calendar-today-icon.svg' alt='달력 아이콘' width={18} height={18} />
              <S.CardDate>2022.12.31</S.CardDate>
            </S.CardDateContainer>
            <S.CardProfileImage />
          </S.CardBottomContainer>
        </S.InfoContainer>
      </S.Container>
    </S.Card>
  );
};

export default Card;
