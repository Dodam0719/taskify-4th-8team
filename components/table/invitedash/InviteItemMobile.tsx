import Button from '@/components/button/Button';
import { InviteItemType } from '../type';
import * as S from './InviteItemMobile.style';
import { apiCall } from '@/pages/api/api';

const InviteItemMobile = ({ name, inviter, id, setInviteData }: InviteItemType) => {
  const handleClick = async (isAccepted: boolean) => {
    try {
      await apiCall('put', `https://sp-taskify-api.vercel.app/4-8/invitations/${dashboardid}`, {
        inviteAccepted: isAccepted,
      });
      const data = await apiCall('get', 'https://sp-taskify-api.vercel.app/4-8/invitations?size=10');
      setInviteData(data);
    } catch (e) {
      console.error(e);
    }
  };

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
        <Button variant='accept' $width='50%' $height='50%' onClick={() => handleClick(true)}>
          수락
        </Button>
        <Button variant='reject' $width='50%' $height='50%' onClick={() => handleClick(true)}>
          거절
        </Button>
      </S.ButtonContainerStyle>
    </S.InviteItemMobileStyle>
  );
};

export default InviteItemMobile;
