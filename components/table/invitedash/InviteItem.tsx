import Button from '@/components/button/Button';
import { InviteItemType } from '../type';
import * as S from './InviteItem.style';

const InviteItem = ({ name, inviter }: InviteItemType) => {
  return (
    <S.InviteItemStyle>
      <S.ItemStyle>{name}</S.ItemStyle>
      <S.ItemStyle>{inviter}</S.ItemStyle>
      <S.ButtonContainerStyle>
        <Button variant='accept' $width='8.4rem' $height='3.2rem'>
          수락
        </Button>
        <Button variant='reject' $width='8.4rem' $height='3.2rem'>
          거절
        </Button>
      </S.ButtonContainerStyle>
    </S.InviteItemStyle>
  );
};

export default InviteItem;
