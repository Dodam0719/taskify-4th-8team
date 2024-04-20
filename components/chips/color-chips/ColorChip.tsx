import { ColorChipsType } from '../type';
import * as S from './ColorChip.style';

const ColorChip = ({ color, index, selectedColorIndex, setSelectedColorIndex }: ColorChipsType) => {
  const handleOnColorClick = () => {
    setSelectedColorIndex(index);
  };

  return (
    <>
      <S.ColorChip color={color} onClick={handleOnColorClick}>
        {selectedColorIndex === index && <S.CheckImage src='/assets/chips/check.svg' alt='체크 이미지' width={24} height={24} />}
      </S.ColorChip>
    </>
  );
};

export default ColorChip;
