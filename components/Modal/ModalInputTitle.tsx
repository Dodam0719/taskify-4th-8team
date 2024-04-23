import { useForm } from 'react-hook-form';
import * as S from './ModalInputTitle.style';

interface TitleData {
  title: string;
}

const ModalInputTitle: React.FC = () => {
  const { register } = useForm<TitleData>();

  return (
    <S.ModalInputTitleWrapper>
      <S.ModalInputTitleLabel htmlFor='title'>
        제목<S.ModalInputTitleLabelStar> *</S.ModalInputTitleLabelStar>
      </S.ModalInputTitleLabel>
      <S.ModalInputTitleInput {...register('title')} placeholder='제목을 입력해 주세요' />
    </S.ModalInputTitleWrapper>
  );
};

export default ModalInputTitle;
