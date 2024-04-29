import { Arrow_forward, Search } from '@/components/Icons';
import * as S from './InviteDash.style';
import InviteItem from './InviteItem';
import InviteItemMobile from './InviteItemMobile';
import Button from '@/components/button/Button';
import PlusChip from '@/components/chips/plus-chip/PlusChip';
import { useEffect, useState } from 'react';
import Menu from '@/components/side-menu/Menu';
import ModalNewdash from '@/components/Modal/ModalNewdash';
import useGetDashboards from '@/query/useGetDashboards';
import { useRouter } from 'next/router';
import { apiCall } from '@/pages/api/api';
import Noinvited from '../no-invited-dashboard/NoInvited';
import Link from 'next/link';
import { BaseDashboard } from '@/hooks/useDashboards';

const INVITE_ITEM = [
  ['프로덕트 디자인', '손동희'],
  ['새로운 기획 문서', '안귀영'],
  ['유닛 A', '장혁'],
  ['유닛 B', '강나무'],
  ['유닛 C', '김태현'],
  ['유닛 D', '정혜진'],
];
export interface ResInviteData {
  cursorId: number;
  invitations: InviteData[];
}

export interface InviteData {
  id: number;
  inviter: Invite;
  teamId: string;
  dashboard: BaseDashboard;
  invitee: Invite;
  inviteAccepted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Invite {
  nickname: string;
  email: string;
  id: number;
}

const InviteDash = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [selectedDashboardIndex, setSelectedDashboardIndex] = useState(-1);
  const [inviteData, setInviteData] = useState<ResInviteData>();
  const [searchInput, setSearchInput] = useState('');

  const handleClick = (id: number) => {
    const queryString = `${id}`;
    router.push(`/dashboard/${queryString}`);
  };
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { data, isPending, isError } = useGetDashboards();

  useEffect(() => {
    const fetch = async () => {
      const data: ResInviteData = await apiCall('get', 'https://sp-taskify-api.vercel.app/4-8/invitations?size=10');
      setInviteData(data);
    };
    fetch();
  }, []);

  if (isPending) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;

  const { dashboards } = data;

  const myDashboards = dashboards.filter((dashboard) => dashboard.createdByMe);
  const inviteDashBoards = dashboards.filter((dashboard) => !dashboard.createdByMe);

  // 검색 결과 필터링
  const filteredInvitations = inviteData?.invitations.filter((item) =>
    item.dashboard.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <S.InviteDashStyle>
      <S.ButtonContainerStyle>
        <Button variant='addDashboard' $width='33.2rem' $height='7rem' onClick={handleOpenModal}>
          <span>새로운 대시 보드</span>
          <PlusChip />
        </Button>
        {myDashboards.map((dashboard) => (
          <Link href={`/dashboard/${dashboard.id}`} key={dashboard.id}>
            <Button onClick={() => handleClick(dashboard.id)} variant='dashboard' $width='33.2rem' $height='7rem'>
              <div>
                <S.ButtonColorPointStyle color={dashboard.color} />
                <Menu
                  id={dashboard.id}
                  dashboard={dashboard}
                  selectedDashboardIndex={selectedDashboardIndex}
                  setSelectedDashboardIndex={(index) => {
                    setSelectedDashboardIndex(index);
                  }}
                  type='button'
                />
              </div>

              <Arrow_forward $width='1.8rem' $height='1.8rem' />
            </Button>
          </Link>
        ))}
        {inviteDashBoards.map((dashboard) => (
          <Link href={`/dashboard/${dashboard.id}`} key={dashboard.id}>
            <Button variant='dashboard' $width='33.2rem' $height='7rem'>
              <div>
                <S.ButtonColorPointStyle color={dashboard.color} />
                <Menu
                  id={dashboard.id}
                  dashboard={dashboard}
                  selectedDashboardIndex={selectedDashboardIndex}
                  setSelectedDashboardIndex={(index) => {
                    setSelectedDashboardIndex(index);
                  }}
                  type='button'
                />
              </div>
              <Arrow_forward $width='1.8rem' $height='1.8rem' />
            </Button>
          </Link>
        ))}
      </S.ButtonContainerStyle>
      <S.PageNationContainer>
        <span>1 페이지 중 1</span>
        <S.ArrowContainer>
          <S.ArrowBackPage src='/icons/Arrow_forward_Disabled.svg' alt='이전 페이지로' width={40} height={40} />
          <S.ArrowNextPage src='/icons/Arrow_forward.svg' alt='다음 페이지로' width={40} height={40} />
        </S.ArrowContainer>
      </S.PageNationContainer>
      {inviteData?.invitations.length === 0 ? (
        <Noinvited />
      ) : (
        <S.InviteDashListStyle>
          <S.InviteDashContainerStyle>
            <S.TitleStyle>초대받은 대시보드</S.TitleStyle>
            <S.SearchFormStyle>
              <S.SearchInputStyle placeholder='검색' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
              <Search />
            </S.SearchFormStyle>
          </S.InviteDashContainerStyle>
          <S.ListHeaderStyle>
            <S.ListHeaderItemStyle>이름</S.ListHeaderItemStyle>
            <S.ListHeaderItemStyle>초대자</S.ListHeaderItemStyle>
            <S.ListHeaderItemStyle>수락 여부</S.ListHeaderItemStyle>
          </S.ListHeaderStyle>
          <S.ListStyle>
            {filteredInvitations?.map((item) => (
              <InviteItem
                key={item.id}
                id={item.id}
                name={item.dashboard.title}
                inviter={item.inviter.nickname}
                setInviteData={setInviteData}
              />
            ))}
          </S.ListStyle>
          <S.ListMobileStyle>
            {filteredInvitations?.map((item) => (
              <InviteItemMobile
                key={item.id}
                id={item.id}
                name={item.dashboard.title}
                inviter={item.inviter.nickname}
                setInviteData={setInviteData}
              />
            ))}
          </S.ListMobileStyle>
        </S.InviteDashListStyle>
      )}
      {isModalOpen && <ModalNewdash dashboards={dashboards} onClose={handleCloseModal} />}
    </S.InviteDashStyle>
  );
};

export default InviteDash;
