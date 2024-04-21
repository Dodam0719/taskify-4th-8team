import { useForm } from 'react-hook-form';
import * as S from './ModalInputTitle.style';

interface TitleData {
  title: string;
}

interface ModalInputTitleProps {
  title: string;
  height?: string;
  isTextarea?: boolean;
}

const ModalInputTitle: React.FC<ModalInputTitleProps> = ({ title, height, isTextarea = false }) => {
  const { register } = useForm<TitleData>();
  const InputOrTextarea: React.ElementType = isTextarea ? S.ModalInputTitleTextarea : S.ModalInputTitleInput;

  return (
    <S.ModalInputTitleWrapper>
      <S.ModalInputTitleLabel htmlFor='title'>
        {title}
        <S.ModalInputTitleLabelStar> *</S.ModalInputTitleLabelStar>
      </S.ModalInputTitleLabel>
      <InputOrTextarea {...register('title')} placeholder={`${title}을 입력해 주세요`} customHeight={height} />
    </S.ModalInputTitleWrapper>
  );
};

export default ModalInputTitle;
