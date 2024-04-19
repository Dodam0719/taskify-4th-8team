import * as S from './ProgressChip.style';

interface ProgressChipType {
  children: string;
}

const ProgressChip = ({ children }: ProgressChipType) => {
  return (
    <div>
      <S.ProgressChip>
        <S.Point />
        <S.Text>{children}</S.Text>
      </S.ProgressChip>
    </div>
  );
};

export default ProgressChip;
