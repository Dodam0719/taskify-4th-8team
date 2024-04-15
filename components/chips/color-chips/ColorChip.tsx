import Image from 'next/image';
import ColorChipStyle from './ColorChip.style';
import { useState } from 'react';

interface ColorChipsType {
  color: string;
  index: number;
  selectedColorIndex: number;
  setSelectedColorIndex: (index: number) => void;
}

const ColorChip = ({ color, index, selectedColorIndex, setSelectedColorIndex }: ColorChipsType) => {
  const handleOnColorClick = () => {
    setSelectedColorIndex(index);
  };

  return (
    <>
      <ColorChipStyle color={color} onClick={handleOnColorClick}>
        {selectedColorIndex === index && (
          <Image className='check-image' src='/assets/chips/check.svg' alt='체크 이미지' width={24} height={24} />
        )}
      </ColorChipStyle>
    </>
  );
};

export default ColorChip;
