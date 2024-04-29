import { Unsubscribe } from '@/components/Icons';
import * as S from './NoInvitedDashboard.style';

const Noinvited = () => {
  return (
    <S.UnsubscribeWrapper>
      <S.UnsubscribeTitle>초대받은 대시보드</S.UnsubscribeTitle>
      <S.UnsubscribeContainer>
        <Unsubscribe $width='10rem' $height='10rem' />
        <S.UnsubscribeText>아직 초대받은 대시보드가 없어요</S.UnsubscribeText>
      </S.UnsubscribeContainer>
    </S.UnsubscribeWrapper>
  );
};

export default Noinvited;
