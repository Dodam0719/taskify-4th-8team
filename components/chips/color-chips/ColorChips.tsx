import { useState } from 'react';
import ColorChip from './ColorChip';
import ColorChipsStyle from './ColorChips.style';

const CHIP_COLORS = [
  '--color-green_7AC555',
  '--color-purple_760DDE',
  '--color-orange_FFA500',
  '--color-blue_76A6EA',
  '--color-pink_E876EA',
];

const ColorChips = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <ColorChipsStyle>
      {CHIP_COLORS.map((color: string, index) => (
        <ColorChip
          key={index}
          color={color}
          index={index}
          selectedColorIndex={selectedColorIndex}
          setSelectedColorIndex={setSelectedColorIndex}
        />
      ))}
    </ColorChipsStyle>
  );
};

export default ColorChips;
