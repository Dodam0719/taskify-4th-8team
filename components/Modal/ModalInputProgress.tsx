import { useEffect, useRef, useState } from 'react';
import * as S from './ModalInputProgress.style';
import ProgressChip from '../chips/progress-chips/ProgressChip';
import Image from 'next/image';

const PROGRESS_STATE = ['To Do', 'On Progress', 'Done'];

const ModalInputProgress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(PROGRESS_STATE[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const handleSelect = (state: string, index: number) => {
    setSelected(state);
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <S.ModalInputProgressWrapper ref={wrapperRef}>
      <p className='font-18-medium'>상태</p>
      <S.DropdownContainer onClick={toggleDropdown} isOpen={isOpen}>
        <S.DropdownHeader>
          <ProgressChip>{selected}</ProgressChip>
          <Image src='/assets/icon/arrow_drop_down_fill.svg' alt='드롭다운 화살표' width={26} height={26} />
        </S.DropdownHeader>
        {isOpen && (
          <S.DropdownList>
            {PROGRESS_STATE.map((state, index) => (
              <S.DropdownListItem key={index} onClick={() => handleSelect(state, index)}>
                <span className='check-image'>
                  {selectedIndex === index && <Image src='/assets/chips/check_fill.svg' alt='체크 이미지' width={22} height={22} />}
                </span>
                <ProgressChip>{state}</ProgressChip>
              </S.DropdownListItem>
            ))}
          </S.DropdownList>
        )}
      </S.DropdownContainer>
    </S.ModalInputProgressWrapper>
  );
};

export default ModalInputProgress;
