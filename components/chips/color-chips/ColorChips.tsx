import { useEffect, useState } from 'react';
import ColorChip from './ColorChip';
import * as S from './ColorChips.style';
import useColorFromCSSVariable from '@/hooks/useColorFromCSSVariable';

export const CHIP_COLORS = ['--green_100', '--purple_100', '--orange_100', '--blue_100', '--pink_100'];

const ColorChips = ({ onColorSelect }: { onColorSelect: (color: string) => void }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const selectedColor = useColorFromCSSVariable(CHIP_COLORS[selectedColorIndex]);

  useEffect(() => {
    onColorSelect(selectedColor);
  }, [selectedColor, onColorSelect]);

  return (
    <S.ColorChipsStyle>
      {CHIP_COLORS.map((color: string, index) => (
        <ColorChip
          key={index}
          color={color}
          index={index}
          selectedColorIndex={selectedColorIndex}
          setSelectedColorIndex={(index) => {
            setSelectedColorIndex(index);
          }}
        />
      ))}
    </S.ColorChipsStyle>
  );
};

export default ColorChips;
