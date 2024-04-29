import { useForm } from 'react-hook-form';
import * as S from './ModalInputTitle.style';

interface TitleData {
  title: string;
}

interface ModalInputTitleProps {
  onTitleChange?: (title: string) => void; // 수정
  onDescriptionChange?: (title: string) => void;
  title: string;
  height?: string;
  isTextarea?: boolean;
}

const ModalInputTitle: React.FC<ModalInputTitleProps> = ({ onTitleChange, onDescriptionChange, title, height, isTextarea = false }) => {
  const { register } = useForm<TitleData>();
  const InputOrTextarea: React.ElementType = isTextarea ? S.ModalInputTitleTextarea : S.ModalInputTitleInput;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onTitleChange) {
      onTitleChange(value);
    }
    if (onDescriptionChange) {
      onDescriptionChange(value);
    }
  };

  return (
    <S.ModalInputTitleWrapper>
      <S.ModalInputTitleLabel htmlFor='title'>
        {title}
        <S.ModalInputTitleLabelStar> *</S.ModalInputTitleLabelStar>
      </S.ModalInputTitleLabel>
      <InputOrTextarea {...register('title')} placeholder={`${title}을 입력해 주세요`} customHeight={height} onChange={handleInputChange} />
    </S.ModalInputTitleWrapper>
  );
};

export default ModalInputTitle;
