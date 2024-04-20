import Button from '@/components/button/Button';
import { InviteItemType } from '../type';
import * as S from './InviteItemMobile.style';

const InviteItemMobile = ({ name, inviter }: InviteItemType) => {
  return (
    <S.InviteItemMobileStyle>
      <S.NameLabelStyle>
        <S.ContainerStyle>
          <S.LabelStyle>이름</S.LabelStyle>
          <span>{name}</span>
        </S.ContainerStyle>
        <S.ContainerStyle>
          <S.LabelStyle>초대자</S.LabelStyle>
          <span>{inviter}</span>
        </S.ContainerStyle>
      </S.NameLabelStyle>
      <S.ButtonContainerStyle>
        <Button variant='accept'>수락</Button>
        <Button variant='reject'>거절</Button>
      </S.ButtonContainerStyle>
    </S.InviteItemMobileStyle>
  );
};

export default InviteItemMobile;
