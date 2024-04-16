import ProgressChip from './ProgressChip';
import * as S from './ProgressChipList.style';

const PROGRESS_STATE = ['To Do', 'On Progress', 'Done'];

const ProgressChipList = () => {
  return (
    <S.ProgressChipListStyle>
      {PROGRESS_STATE.map((progress, i) => (
        <ProgressChip key={i}>{progress}</ProgressChip>
      ))}
    </S.ProgressChipListStyle>
  );
};

export default ProgressChipList;
