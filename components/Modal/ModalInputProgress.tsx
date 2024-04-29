import { useEffect, useRef, useState } from 'react';
import * as S from './ModalInputProgress.style';
import ProgressChip from '../chips/progress-chips/ProgressChip';
import Image from 'next/image';
import { Column, Columninfo } from '../chips/type';
import api from '@/pages/api/api';

interface ModalInputProgressProps {
  columninfo: Column;
  dashboardId: string;
}
const ModalInputProgress = ({ columninfo, dashboardId }: ModalInputProgressProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progressInfo, setProgressInfo] = useState<Columninfo>({ result: '', data: [] });
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchProgresInfo = async () => {
      try {
        const response = await api.get(`columns?dashboardId=${dashboardId}`);
        setProgressInfo(response.data);
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
      }
    };

    fetchProgresInfo();
  }, []);
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

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (title: string, index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <S.ModalInputProgressWrapper ref={wrapperRef}>
      <S.ModalInputProgressTitle>상태</S.ModalInputProgressTitle>
      <S.DropdownContainer onClick={toggleDropdown} isOpen={isOpen}>
        <S.DropdownHeader>
          <ProgressChip>{progressInfo?.data && progressInfo.data[selectedIndex]?.title}</ProgressChip>
          <Image src='/assets/icon/arrow_drop_down_fill.svg' alt='드롭다운 화살표' width={26} height={26} />
        </S.DropdownHeader>
        {isOpen && (
          <S.DropdownList>
            {progressInfo.data.map((data, index) => (
              <S.DropdownListItem key={index} onClick={() => handleSelect(data.title, index)}>
                <span className='check-image'>
                  {selectedIndex === index && <Image src='/assets/icon/check_fill.svg' alt='체크' width={24} height={24} />}
                </span>
                {data.title}
              </S.DropdownListItem>
            ))}
          </S.DropdownList>
        )}
      </S.DropdownContainer>
    </S.ModalInputProgressWrapper>
  );
};
export default ModalInputProgress;
