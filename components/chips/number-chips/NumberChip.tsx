import NumberChipStyle from './NumberChip.style';

interface NumberChipType {
  children: number | string;
}

const NumberChip = ({ children }: NumberChipType) => {
  return <NumberChipStyle className='font-12-medium'>{children}</NumberChipStyle>;
};

export default NumberChip;
