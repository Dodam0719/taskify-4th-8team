import { useState } from 'react';
import ColorChip from './ColorChip';
import * as S from './ColorChips.style';

export const CHIP_COLORS = ['--green_100', '--purple_100', '--orange_100', '--blue_100', '--pink_100'];

const ColorChips = ({ onColorSelect }: { onColorSelect: (color: string) => void }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <S.ColorChipsStyle>
      {CHIP_COLORS.map((color: string, index) => (
        <ColorChip
          key={index}
          color={color}
          index={index}
          selectedColorIndex={selectedColorIndex}
          setSelectedColorIndex={(index: number) => {
            setSelectedColorIndex(index);
            onColorSelect(CHIP_COLORS[index]);
          }}
        />
      ))}
    </S.ColorChipsStyle>
  );
};

export default ColorChips;
