import { useEffect, useState } from 'react';
import * as S from './Table.style';
import TableHeader from './table-header/TableHeader';
import TableItem from './table-item/TableItem';
import { TableType, MemberInfo, InviteInfo } from './type';
import api from '@/pages/api/axios';

const USER_PROFILE_COLOR = ['#C4B1A2', '#9DD7ED', '#FDD446', '#FFC85A'];
// const USER_FIRST_NAME = ['J', 'K', 'C', 'Y'];
// const USER_NAME = ['장만철', '김태순', '최주협', '윤지현'];
// const USER_EMAIL = ['codeitA@codeit.com', 'codeitB@codeit.com', 'codeitC@codeit.com', 'codeitD@codeit.com'];

const Table = ({ title, userList }: TableType) => {
  const [memberInfo, setMemberInfo] = useState<MemberInfo>({ members: [], totalCount: 0 });
  const [inviteInfo, setInviteInfo] = useState<InviteInfo>({ invitations: [], totalCount: 0 });

  const getMemberInfo = async (id: number = 7073, page: number = 1, size: number = 20) => {
    try {
      const response = await api.get(`members`, { params: { dashboardId: id, page, size } });
      if (response.status === 200) {
        const memberData = response.data;
        setMemberInfo(memberData);
        console.log(memberInfo);
      }
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  const getInviteInfo = async (dashboardId: number = 7073, page: number = 1, size: number = 10) => {
    try {
      const response = await api.get(`dashboards/${dashboardId}/invitations`, { params: { page, size } });
      if (response.status === 200) {
        const inviteData = response.data;
        setInviteInfo(inviteData);
        console.log(inviteInfo);
      }
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  const deleteMembers = async (memberId: number) => {
    try {
      const response = await api.delete(`members/${memberId}`);
      if (response.status === 204) {
        console.log('멤버가 삭제되었습니다.');
        getMemberInfo();
      }
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  const cancelInvite = async (dashboardId: number = 7073, invitationId: number) => {
    try {
      const response = await api.delete(`dashboards/${dashboardId}/invitations/${invitationId}`);
      if (response.status === 204) {
        console.log('초대가 취소되었습니다.');
        getInviteInfo();
      }
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  // const memberList: string[] = memberInfo.members.map((members) => members.nickname);
  // const initialList: string[] = memberList.map((nickname: string) => nickname.charAt(0));
  // const memberIdList: number[] = memberInfo.members.map((members) => members.userId);
  // const isOwnerList: boolean[] = memberInfo.members.map((members) => members.isOwner);
  // const invitedEmailList: string[] = inviteInfo.invitations.map((invitations) => invitations.invitee.email);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * USER_PROFILE_COLOR.length);
    const randomColor = USER_PROFILE_COLOR[randomIndex];
    return randomColor;
  };

  useEffect(() => {
    getMemberInfo();
    getInviteInfo();
  }, []);

  return (
    <S.Table>
      <TableHeader title={title} userList={userList} />
      <S.UserList>
        {title === '구성원' &&
          memberInfo.members.map((member, i) => (
            <TableItem
              key={i}
              className='item'
              userProfileColor={getRandomColor()}
              userName={member.nickname}
              userFirstName={member.nickname.charAt(0)}
              title={title}
              memberId={member.id}
              deleteMember={deleteMembers}
              cancelInvite={cancelInvite}
            />
          ))}

        {title === '초대 내역' &&
          inviteInfo.invitations.map((user, i) => (
            <TableItem
              key={i}
              className='item'
              userProfileColor={getRandomColor()}
              title={title}
              email={user.invitee.email}
              dashboardId={user.dashboard.id}
              invitationId={user.id}
              deleteMember={deleteMembers}
              cancelInvite={cancelInvite}
            />
          ))}
      </S.UserList>
    </S.Table>
  );
};
export default Table;
