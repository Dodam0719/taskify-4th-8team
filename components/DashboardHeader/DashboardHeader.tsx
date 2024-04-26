import { ReactNode, useEffect, useState } from 'react';
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
interface DashboardHeaderProps {
  isVisible: string;
  children: React.ReactNode;
}
const DashboardHeader = ({ isVisible, children }: DashboardHeaderProps) => {
  const [isTabletView, setIsTabletView] = useState<boolean>(false);
  const [additionalProfiles, setAdditionalProfiles] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setIsTabletView(window.innerWidth < 1280);
    }

    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isTabletView) {
      const additionalCount = PROFILE.length > 2 ? PROFILE.length - 2 : 0;
      setAdditionalProfiles(additionalCount);
    } else {
      const additionalCount = PROFILE.length > 4 ? PROFILE.length - 4 : 0;
      setAdditionalProfiles(additionalCount);
    }
  }, [isTabletView]);

  return (
    <S.DashboardHeader>
      <S.RecipientName>{children}</S.RecipientName>
      <S.DashboardHeaderWrapper isvisible={isVisible}>
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
          {additionalProfiles && (
            <S.LastTestProfile>
              <span>+</span>
              {additionalProfiles}
            </S.LastTestProfile>
          )}
        </S.ProfileTestWrapper>
      </S.DashboardHeaderWrapper>
      <S.ProfileWrapper isVisible={isVisible}>
        <S.ProfileInitials>B</S.ProfileInitials>
        <S.ProfileName>배유철</S.ProfileName>
      </S.ProfileWrapper>
    </S.DashboardHeader>
  );
};

export default DashboardHeader;
