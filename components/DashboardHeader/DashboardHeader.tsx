import { ReactNode, useEffect, useState } from 'react';
import * as S from './DashboardHeader.style';
import Link from 'next/link';
import ModalInvite from '../Modal/ModalInvite';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleInviteModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInviteSubmit = (data: { name: string }) => {
    // 새 컬럼 생성 로직 추가
  };

  return (
    <S.DashboardHeader>
      <S.RecipientName>{children}</S.RecipientName>
      <S.DashboardHeaderWrapper isvisible={isVisible}>
        <Link href='/dashboard/dashboardid/edit'>
          <S.SettingButton>
            <img src='/assets/icon/setting_icon.svg' alt='관리 버튼이미지' />
            관리
          </S.SettingButton>
        </Link>
        {isModalOpen && <ModalInvite title='초대하기' placeholder='' onSubmit={handleInviteSubmit} onClose={handleCloseModal} />}
        <S.InviteButton onClick={handleInviteModal}>
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
