import ColorChipStyle from './ColorChip.style';

const CHIP_COLORS = [
  '--color-green_7AC555',
  '--color-purple_760DDE',
  '--color-orange_FFA500',
  '--color-blue_76A6EA',
  '--color-pink_E876EA',
];

const ColorChip = () => {
  return CHIP_COLORS.map((color, index) => <ColorChipStyle key={index} color={color} />);
};

export default ColorChip;
