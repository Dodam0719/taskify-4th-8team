import ProgressChipStyle from './ProgressChip.style';

interface ProgressChipType {
  children: string;
}

const ProgressChip = ({ children }: ProgressChipType) => {
  return (
    <div>
      <ProgressChipStyle className='font-12-medium'>
        <div className='point' />
        {children}
      </ProgressChipStyle>
    </div>
  );
};

export default ProgressChip;
