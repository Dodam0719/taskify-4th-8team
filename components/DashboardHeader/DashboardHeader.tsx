import { ReactNode, useEffect, useState } from 'react';
import * as S from './DashboardHeader.style';
import Link from 'next/link';
import ModalInvite from '../Modal/ModalInvite';
import api from '@/pages/api/api';
import randomColor from 'randomcolor';
import { MembersInfo } from '../card/type';

interface DashboardHeaderProps {
  isVisible: string;
  children?: React.ReactNode;
  dashboardId?: any;
}
interface dashboardInfo {
  id: number;
  title: string;
  color: string;
  createdAt?: string;
  updatedAt?: string;
  userId?: number;
  createdByMe?: boolean;
}

interface profileInfo {
  id?: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

const DashboardHeader = ({ isVisible, children, dashboardId }: DashboardHeaderProps) => {
  const [isTabletView, setIsTabletView] = useState<boolean>(false);
  const [additionalProfiles, setAdditionalProfiles] = useState<number | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dashboardInfo, setDashboardInfo] = useState<any>({});
  const [member, setMember] = useState<MembersInfo>({ members: [], totalCount: 0 });
  const [profileInfo, setProfileInfo] = useState<profileInfo>({
    id: '',
    email: '',
    nickname: '',
    profileImageUrl: '',
    createdAt: '',
    updatedAt: '',
  });
  const [color, setColor] = useState<string>();

  useEffect(() => {
    setColor(randomColor());
  }, []);

  useEffect(() => {
    const fetchDashboardInfo = async () => {
      if (dashboardId)
        try {
          const response = await api.get(`/dashboards/${dashboardId}`);
          setDashboardInfo(response.data);
        } catch (error) {
          console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
        }
    };

    fetchDashboardInfo();
  }, [dashboardId]);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await api.get('/users/me');
        setProfileInfo(response.data);
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
      }
    };

    fetchProfileInfo();
  }, []);

  useEffect(() => {
    const fetchDashboardInfo = async () => {
      if (dashboardId)
        try {
          const response = await api.get(`/dashboards/${dashboardId}`);
          setDashboardInfo(response.data);
        } catch (error) {
          console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
        }
    };

    fetchDashboardInfo();
  }, [dashboardId]);

  useEffect(() => {
    const fetchDashboardMemberInfo = async () => {
      if (dashboardId)
        try {
          const response = await api.get(`/members?page=1&size=20&dashboardId=${dashboardId}`);
          setMember(response.data);
        } catch (error) {
          console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
        }
    };

    fetchDashboardMemberInfo();
  }, [dashboardId]);

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
      const additionalCount = member.members.length > 2 ? member.members.length - 2 : null;
      setAdditionalProfiles(additionalCount);
    } else {
      const additionalCount = member.members.length > 4 ? member.members.length - 4 : null;
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
      <S.RecipientName>{dashboardInfo.title || children}</S.RecipientName>
      <S.DashboardHeaderWrapper $isvisible={isVisible}>
        <Link href={`/dashboard/${dashboardId}/edit`}>
          <S.SettingButton>
            <img src='/assets/icon/setting_icon.svg' alt='관리 버튼이미지' />
            관리
          </S.SettingButton>
        </Link>
        {isModalOpen && (
          <ModalInvite dashboardId={dashboardId} title='초대하기' placeholder='' onSubmit={handleInviteSubmit} onClose={handleCloseModal} />
        )}
        <S.InviteButton onClick={handleInviteModal}>
          <img src='/assets/icon/invite_icon.svg' alt='초대 버튼이미지' />
          초대하기
        </S.InviteButton>
        <S.ProfileTestWrapper>
          {member.members.slice(0, 4).map((item: any, index: any) => (
            <S.TestProfile key={index} className={`profile-item-${index}`} color={color}>
              {item.nickname.charAt(0)}
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
      <S.ProfileWrapper $isvisible={isVisible}>
        <S.ProfileInitials color={color}>{profileInfo.nickname.charAt(0)}</S.ProfileInitials>
        <S.ProfileName>{profileInfo.nickname}</S.ProfileName>
      </S.ProfileWrapper>
    </S.DashboardHeader>
  );
};

export default DashboardHeader;
