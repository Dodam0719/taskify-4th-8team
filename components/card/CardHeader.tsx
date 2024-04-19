import Image from 'next/image';
import NumberChip from '../chips/number-chips/NumberChip';
import * as S from './CardHeader.style';

interface CardListStyle {
  children: string;
}

const CardHeader = ({ children }: CardListStyle) => {
  // settings Icon에 연결 할 이벤트 핸들러
  const handleOnIconClick = () => {};

  return (
    <S.CardHeader>
      <S.TitleContainer>
        <S.Point />
        <S.CardListTitle>{children}</S.CardListTitle>
        <NumberChip>1</NumberChip>
      </S.TitleContainer>
      <Image src='/assets/icon/settings-icon.svg' alt='환경 설정 아이콘' width={24} height={24} onClick={handleOnIconClick} />
    </S.CardHeader>
  );
};

export default CardHeader;
