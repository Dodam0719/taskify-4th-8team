import { useEffect, useRef, useState } from 'react';
import * as S from './ModalInputManager.style';
import Image from 'next/image';
import useMembers, { Member } from '@/hooks/useMembers';
import api from '@/pages/api/api';

interface ModalInputManagerProp {
  onSelectedMemberChange: (selectedMember: Member) => void;
  dashboardId: string;
}
const ModalInputManager = ({ onSelectedMemberChange, dashboardId }: ModalInputManagerProp) => {
  const { loading, error } = useMembers();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member>();
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [membersinfo, setMembersInfo] = useState<{ members: Member[]; totalCount: number }>({ members: [], totalCount: 0 });

  // const filteredMembers = searchTerm
  //   ? members.filter((member) => member.nickname.toLowerCase().includes(searchTerm.toLowerCase()))
  //   : members;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (member: Member) => {
    setSelectedMember(member);
    setSearchTerm(member.nickname);
    setIsOpen(false);
    onSelectedMemberChange(member);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleBlur = () => {
    if (!isOpen && selectedMember && searchTerm !== selectedMember.nickname) {
      setSearchTerm(selectedMember.nickname);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 멤버 목록 로딩 중이거나 에러가 발생했는지 여부에 따라 UI를 조정
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading members.</div>;
  useEffect(() => {
    const fetchMembersInfo = async () => {
      if (dashboardId)
        try {
          const response = await api.get(`members?page=1&size=20&dashboardId=${dashboardId}`);
          setMembersInfo(response.data);
        } catch (error) {
          console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
        }
    };

    fetchMembersInfo();
  }, []);

  return (
    <S.ModalInputProgressWrapper ref={wrapperRef}>
      <S.ModalInputManagerTitle>담당자</S.ModalInputManagerTitle>
      <S.DropdownContainer onClick={toggleDropdown} $isopen={isOpen}>
        <S.DropdownHeader>
          {selectedMember &&
            (selectedMember.profileImageUrl ? (
              <Image
                className='profile-image'
                src={selectedMember.profileImageUrl}
                alt='프로필 이미지'
                width={26}
                height={26}
                style={{ marginRight: '0.8rem', borderRadius: '100%' }}
              />
            ) : (
              <S.selectedMemberInitials>{selectedMember.nickname.charAt(0)}</S.selectedMemberInitials>
            ))}
          <S.DropdownInput
            type='text'
            value={searchTerm}
            onChange={handleSearchChange}
            onBlur={handleBlur}
            placeholder='이름을 입력해 주세요'
          />
          <Image src='/assets/icon/arrow_drop_down_fill.svg' alt='드롭다운 화살표' width={26} height={26} />
        </S.DropdownHeader>
        {isOpen && (
          <S.DropdownList>
            {membersinfo.members.map((member) => (
              <S.DropdownListItem key={member.id} onClick={() => handleSelect(member)}>
                <span className='check-image'>
                  {selectedMember && selectedMember.id === member.id && (
                    <Image src='/assets/icon/check_fill.svg' alt='체크 이미지' width={22} height={22} />
                  )}
                </span>
                {member.profileImageUrl ? (
                  <Image className='profile-image' src={member.profileImageUrl} alt='프로필 이미지' width={26} height={26} />
                ) : (
                  <S.MemberInitials>{member.nickname.charAt(0)}</S.MemberInitials>
                )}
                {member.nickname}
              </S.DropdownListItem>
            ))}
          </S.DropdownList>
        )}
      </S.DropdownContainer>
    </S.ModalInputProgressWrapper>
  );
};

export default ModalInputManager;
