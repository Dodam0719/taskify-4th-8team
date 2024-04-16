import Image from 'next/image';
import * as S from './ColorChip.style';

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
      <S.ColorChipStyle color={color} onClick={handleOnColorClick}>
        {selectedColorIndex === index && (
          <Image className='check-image' src='/assets/chips/check.svg' alt='체크 이미지' width={24} height={24} />
        )}
      </S.ColorChipStyle>
    </>
  );
};

export default ColorChip;
