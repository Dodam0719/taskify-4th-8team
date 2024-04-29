import Button from '@/components/button/Button';
import { TableItemType, MemberInfo } from '../type';
import * as S from './TableItem.style';
import api from '@/pages/api/axios';

const TableItem = ({
  userProfileColor,
  userName,
  userFirstName,
  title,
  email,
  memberId,
  memberInfo,
  setMemberInfo,
  inviteInfo,
  dashboardId,
  invitationId,
  setInviteInfo,
  deleteMember,
  cancelInvite,
}: TableItemType) => {
  // const buttonText: string = title === '구성원' ? '삭제' : '취소';

  return (
    <S.TableItem>
      {title === '구성원' && (
        <>
          <S.UserContainer>
            <S.Profile userProfileColor={userProfileColor}>{userFirstName}</S.Profile>
            <S.USER>{userName}</S.USER>
          </S.UserContainer>
          <Button variant='delete' $width={'8.4rem'} $height={'3.2rem'} onClick={() => memberId && deleteMember(memberId)}>
            삭제
          </Button>
        </>
      )}

      {title === '초대 내역' && (
        <>
          <S.USER>{email}</S.USER>
          <Button
            variant='delete'
            $width={'8.4rem'}
            $height={'3.2rem'}
            onClick={() => dashboardId && invitationId && cancelInvite(dashboardId, invitationId)}>
            취소
          </Button>
        </>
      )}
    </S.TableItem>
  );
};

export default TableItem;
