import { useEffect, useState } from 'react';
import * as S from './DashboardHeader.style';

interface ProfileItem {
  color: string;
  initials: string;
}

const PROFILE: ProfileItem[] = [
  { color: '--green_100', initials: 'Y' },
  { color: '--purple_100', initials: 'C' },
  { color: '--orange_100', initials: 'K' },
  { color: '--blue_100', initials: 'J' },
  { color: '--pink_100', initials: 'H' },
  { color: '--green_100', initials: 'Q' },
  { color: '--green_100', initials: 'Q' },
  { color: '--green_100', initials: 'Q' },
  { color: '--green_100', initials: 'Q' },
];

function DashboardHeader() {
  const [isTabletView, setIsTabletView] = useState<boolean>(false);
  const ProfileArrayLength: number | null = isTabletView
    ? PROFILE.length > 2
      ? PROFILE.length - 2
      : null
    : PROFILE.length > 4
      ? PROFILE.length - 4
      : null;

  useEffect(() => {
    function handleResize() {
      setIsTabletView(window.innerWidth < 1280);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <S.DashboardHeader>
      <S.RecipientName>내 대시보드</S.RecipientName>
      <S.SettingButton>
        <img src='/assets/icon/setting_icon.svg' alt='관리 버튼이미지' />
        관리
      </S.SettingButton>
      <S.InviteButton>
        <img src='/assets/icon/invite_icon.svg' alt='초대 버튼이미지' />
        초대하기
      </S.InviteButton>
      <S.ProfileTestWrapper>
        {PROFILE.slice(0, 4).map((item, index) => (
          <S.TestProfile key={index} className={`profile-item-${index}`} color={item.color}>
            {item.initials}
          </S.TestProfile>
        ))}
        {ProfileArrayLength && (
          <S.LastTestProfile>
            <span>+</span>
            {ProfileArrayLength}
          </S.LastTestProfile>
        )}
      </S.ProfileTestWrapper>
      <S.ProfileWrapper>
        <S.ProfileInitials>B</S.ProfileInitials>
        <S.ProfileName>배유철</S.ProfileName>
      </S.ProfileWrapper>
    </S.DashboardHeader>
  );
}

export default DashboardHeader;
