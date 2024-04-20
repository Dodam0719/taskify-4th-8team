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
        <S.ButtonStyle>수락</S.ButtonStyle>
        <S.ButtonStyle>거절</S.ButtonStyle>
      </S.ButtonContainerStyle>
    </S.InviteItemMobileStyle>
  );
};

export default InviteItemMobile;
