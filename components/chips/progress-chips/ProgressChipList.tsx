import ProgressChip from './ProgressChip';
import ProgressChipListStyle from './ProgressChipList.style';

const PROGRESS_STATE = ['To Do', 'On Progress', 'Done'];

const ProgressChipList = () => {
  return (
    <ProgressChipListStyle>
      {PROGRESS_STATE.map((progress, i) => (
        <ProgressChip key={i}>{progress}</ProgressChip>
      ))}
    </ProgressChipListStyle>
  );
};

export default ProgressChipList;
