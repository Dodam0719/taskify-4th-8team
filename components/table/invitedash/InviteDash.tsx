import { Search } from '@/components/Icons';
import * as S from './InviteDash.style';
import InviteItem from './InviteItem';
import InviteItemMobile from './InviteItemMobile';

const INVITE_ITEM = [
  ['프로덕트 디자인', '손동희'],
  ['새로운 기획 문서', '안귀영'],
  ['유닛 A', '장혁'],
  ['유닛 B', '강나무'],
  ['유닛 C', '김태현'],
  ['유닛 D', '정혜진'],
];

const InviteDash = () => {
  return (
    <S.InviteDashStyle>
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
    </S.InviteDashStyle>
  );
};

export default InviteDash;
