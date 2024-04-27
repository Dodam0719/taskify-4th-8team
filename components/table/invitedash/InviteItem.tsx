import Button from '@/components/button/Button';
import { InviteItemType } from '../type';
import * as S from './InviteItem.style';
import { apiCall } from '@/pages/api/api';

const InviteItem = ({ name, inviter, id, setInviteData }: InviteItemType) => {
  const handleClick = async (isAccepted: boolean) => {
    try {
      await apiCall('put', `https://sp-taskify-api.vercel.app/4-8/invitations/${id}`, {
        inviteAccepted: isAccepted,
      });
      const data = await apiCall('get', 'https://sp-taskify-api.vercel.app/4-8/invitations?size=10');
      setInviteData(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.InviteItemStyle>
      <S.ItemStyle>{name}</S.ItemStyle>
      <S.ItemStyle>{inviter}</S.ItemStyle>
      <S.ButtonContainerStyle>
        <Button variant='accept' $width='8.4rem' $height='3.2rem' onClick={() => handleClick(true)}>
          수락
        </Button>
        <Button variant='reject' $width='8.4rem' $height='3.2rem' onClick={() => handleClick(false)}>
          거절
        </Button>
      </S.ButtonContainerStyle>
    </S.InviteItemStyle>
  );
};

export default InviteItem;
