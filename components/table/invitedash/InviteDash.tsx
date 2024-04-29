import { Arrow_forward, Arrow_forward_disabled, Search } from '@/components/Icons';
import * as S from './InviteDash.style';
import InviteItem from './InviteItem';
import InviteItemMobile from './InviteItemMobile';
import Button from '@/components/button/Button';
import PlusChip from '@/components/chips/plus-chip/PlusChip';
import useDashboards from '@/hooks/useDashboards';
import { useEffect, useState } from 'react';
import Menu from '@/components/side-menu/Menu';
import ModalNewdash from '@/components/Modal/ModalNewdash';
import useGetDashboards from '@/query/useGetDashboards';
import { useRouter } from 'next/router';

const INVITE_ITEM = [
  ['프로덕트 디자인', '손동희'],
  ['새로운 기획 문서', '안귀영'],
  ['유닛 A', '장혁'],
  ['유닛 B', '강나무'],
  ['유닛 C', '김태현'],
  ['유닛 D', '정혜진'],
];

const InviteDash = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleClick = (id: number) => {
    const queryString = `${id}`;
    router.push(`/dashboard/${queryString}`);
  };
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { data, isPending, isError } = useGetDashboards();

  if (isPending) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;

  const { dashboards } = data;

  const myDashboards = dashboards.filter((dashboard) => dashboard.createdByMe);
  const inviteDashBoards = dashboards.filter((dashboard) => !dashboard.createdByMe);

  return (
    <S.InviteDashStyle>
      <S.ButtonContainerStyle>
        <Button variant='addDashboard' $width='33.2rem' $height='7rem' onClick={handleOpenModal}>
          <span>새로운 대시 보드</span>
          <PlusChip />
        </Button>
        {myDashboards.map((dashboard) => (
          <Button onClick={() => handleClick(dashboard.id)} variant='dashboard' $width='33.2rem' $height='7rem'>
            <div>
              <S.ButtonColorPointStyle color={dashboard.color} />
              <Menu key={dashboard.id} dashboard={dashboard} />
            </div>
            <Arrow_forward $width='1.8rem' $height='1.8rem' />
          </Button>
        ))}
        {inviteDashBoards.map((dashboard) => (
          <Menu key={dashboard.id} dashboard={dashboard} />
        ))}
      </S.ButtonContainerStyle>
      <S.PageNationContainer>
        <span>1 페이지 중 1</span>
        <S.ArrowContainer>
          <S.ArrowBackPage src='/icons/Arrow_forward_Disabled.svg' alt='이전 페이지로' width={40} height={40} />
          <S.ArrowNextPage src='/icons/Arrow_forward.svg' alt='다음 페이지로' width={40} height={40} />
        </S.ArrowContainer>
      </S.PageNationContainer>
      <S.InviteDashListStyle>
        <S.InviteDashContainerStyle>
          <S.TitleStyle>초대받은 대시보드</S.TitleStyle>
          <S.SearchFormStyle>
            <S.SearchInputStyle placeholder='검색' />
            <Search />
          </S.SearchFormStyle>
        </S.InviteDashContainerStyle>
        <S.ListHeaderStyle>
          <S.ListHeaderItemStyle>이름</S.ListHeaderItemStyle>
          <S.ListHeaderItemStyle>초대자</S.ListHeaderItemStyle>
          <S.ListHeaderItemStyle>수락 여부</S.ListHeaderItemStyle>
        </S.ListHeaderStyle>
        <S.ListStyle>
          {INVITE_ITEM.map((item, i) => (
            <InviteItem key={i} name={item[0]} inviter={item[1]} />
          ))}
        </S.ListStyle>
        <S.ListMobileStyle>
          {INVITE_ITEM.map((item, i) => (
            <InviteItemMobile key={i} name={item[0]} inviter={item[1]} />
          ))}
        </S.ListMobileStyle>
      </S.InviteDashListStyle>
      {isModalOpen && <ModalNewdash dashboards={dashboards} onClose={handleCloseModal} />}
    </S.InviteDashStyle>
  );
};

export default InviteDash;
