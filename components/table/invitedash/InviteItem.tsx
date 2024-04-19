import * as S from './InviteItem.style';

interface InviteItemType {
  name: string;
  inviter: string;
}

const InviteItem = ({ name, inviter }: InviteItemType) => {
  return (
    <S.InviteItemStyle>
      <S.ItemStyle>{name}</S.ItemStyle>
      <S.ItemStyle>{inviter}</S.ItemStyle>
      <S.ButtonContainerStyle>
        <S.ButtonStyle>수락</S.ButtonStyle>
        <S.ButtonStyle>거절</S.ButtonStyle>
      </S.ButtonContainerStyle>
    </S.InviteItemStyle>
  );
};

export default InviteItem;
