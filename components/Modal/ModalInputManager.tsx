import { useEffect, useRef, useState } from 'react';
import * as S from './ModalInputManager.style';
import Image from 'next/image';
import useMembers, { Member } from '@/hooks/useMembers';

const ModalInputManager = () => {
  const { members, loading, error } = useMembers();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 선택된 멤버와 일치하는지 여부에 따라 멤버 목록을 필터링
  const filteredMembers = searchTerm
    ? members.filter((member) => member.nickname.toLowerCase().includes(searchTerm.toLowerCase()))
    : members;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (member: Member) => {
    setSelectedMember(member);
    setSearchTerm(member.nickname);
    setIsOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
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

  return (
    <S.ModalInputProgressWrapper ref={wrapperRef}>
      <S.ModalInputManagerTitle>담당자</S.ModalInputManagerTitle>
      <S.DropdownContainer onClick={toggleDropdown} isOpen={isOpen}>
        <S.DropdownHeader>
          {selectedMember && (
            <Image
              className='profile-image'
              src={selectedMember.profileImageUrl}
              alt='프로필 이미지'
              width={26}
              height={26}
              style={{ marginRight: '8px', borderRadius: '100%' }}
            />
          )}
          <S.DropdownInput type='text' value={searchTerm} onChange={handleSearchChange} placeholder='이름을 입력해 주세요' />
          <Image src='/assets/icon/arrow_drop_down_fill.svg' alt='드롭다운 화살표' width={26} height={26} />
        </S.DropdownHeader>
        {isOpen && (
          <S.DropdownList>
            {filteredMembers.map((member) => (
              <S.DropdownListItem key={member.id} onClick={() => handleSelect(member)}>
                <span className='check-image'>
                  {selectedMember && selectedMember.id === member.id && (
                    <Image src='/assets/chips/check_fill.svg' alt='체크 이미지' width={22} height={22} />
                  )}
                </span>
                <Image className='profile-image' src={member.profileImageUrl} alt='프로필 이미지' width={26} height={26} />
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
