import Button from '@/components/button/Button';
import { InviteItemType } from '../type';
import * as S from './InviteItem.style';

const InviteItem = ({ name, inviter }: InviteItemType) => {
  return (
    <S.InviteItemStyle>
      <S.ItemStyle>{name}</S.ItemStyle>
      <S.ItemStyle>{inviter}</S.ItemStyle>
      <S.ButtonContainerStyle>
        <Button variant='accept'>수락</Button>
        <Button variant='reject'>거절</Button>
      </S.ButtonContainerStyle>
    </S.InviteItemStyle>
  );
};

export default InviteItem;
