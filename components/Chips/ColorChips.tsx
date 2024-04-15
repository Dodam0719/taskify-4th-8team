import ColorChipStyle from './ColorChip.style';
import ColorChipsStyle from './ColorChips.style';

const CHIP_COLORS = [
  '--color-green_7AC555',
  '--color-purple_760DDE',
  '--color-orange_FFA500',
  '--color-blue_76A6EA',
  '--color-pink_E876EA',
];

const ColorChips = () => {
  return (
    <ColorChipsStyle>
      {CHIP_COLORS.map((color, index) => (
        <ColorChipStyle key={index} color={color} />
      ))}
    </ColorChipsStyle>
  );
};

export default ColorChips;
