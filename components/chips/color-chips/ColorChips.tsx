import { useState } from 'react';
import ColorChip from './ColorChip';
import * as S from './ColorChips.style';

const CHIP_COLORS = ['--green_100', '--purple_100', '--orange_100', '--blue_100', '--pink_100'];

const ColorChips = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <S.ColorChipsStyle>
      {CHIP_COLORS.map((color: string, index) => (
        <ColorChip
          key={index}
          color={color}
          index={index}
          selectedColorIndex={selectedColorIndex}
          setSelectedColorIndex={setSelectedColorIndex}
        />
      ))}
    </S.ColorChipsStyle>
  );
};

export default ColorChips;
