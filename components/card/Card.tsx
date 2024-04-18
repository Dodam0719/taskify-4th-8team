import Image from 'next/image';
import CardTagChips from '../chips/card-tag-chips/CardTagChips';
import * as S from './Card.style';

const Card = () => {
  return (
    <S.CardStyle>
      <Image className='card-image' src='/assets/card/card-image.png' alt='카드 이미지' width={272} height={160} />
      <div className='container'>
        <p className='font-16-medium card-title'>새로운 일정 관리 Taskify</p>
        <div className='info-container'>
          <CardTagChips />
          <div className='card-bottom-container'>
            <div className='card-date-container'>
              <Image className='card-calendar-image' src='/assets/icon/calendar-today-icon.svg' alt='달력 아이콘' width={18} height={18} />
              <span className='font-12-medium card-date'>2022.12.31</span>
            </div>
            <div className='card-profile-image' />
          </div>
        </div>
      </div>
    </S.CardStyle>
  );
};

export default Card;
