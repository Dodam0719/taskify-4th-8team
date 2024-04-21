import * as S from './ModalNewTodo.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import ModalInputTitle from './ModalInputTitle';
import ModalInputProgress from './ModalInputProgress';
import ModalInputManager from './ModalInputManager';
import ModalInputDeadline from './ModalInputDeadline';
import ModalInputTag from './ModalInputTag';
import Image from 'next/image';
import { BUTTON_COMPONENTS } from '../button/Button.style';

interface ModalNewTodoProps {
  onSubmit: (data: { name: string }) => void;
  onClose: () => void;
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
}

const ModalNewTodo: React.FC<ModalNewTodoProps> = ({ onClose, width, height, mobileWidth, mobileHeight }) => {
  return (
    <ModalBackground onClose={onClose} width='50.6rem' height='90.7rem' mobileWidth='32.7rem' mobileHeight='86.9rem'>
      <S.ModalNewTodoWrapper>
        <S.ModalNewTodoTitle>할 일 생성</S.ModalNewTodoTitle>
        <S.StatusAndManagerWrapper>
          <ModalInputProgress />
          <ModalInputManager />
        </S.StatusAndManagerWrapper>
        <ModalInputTitle title='제목' />
        <ModalInputTitle title='설명' height='9.6rem' isTextarea={true} />
        <ModalInputDeadline />
        <ModalInputTag />
        <S.ModalNewTodoImageWrapper>
          <S.ModalNewTodoImageTitle>이미지</S.ModalNewTodoImageTitle>
          <S.ModalNewTodoImageButton />
        </S.ModalNewTodoImageWrapper>
        <S.ModalDeleteColumnFooter>
          <ModalButton text='취소' variant='cancel' fullWidth={true} onClick={onClose} />
          <ModalButton text='생성' variant='confirm' fullWidth={true} />
        </S.ModalDeleteColumnFooter>
      </S.ModalNewTodoWrapper>
    </ModalBackground>
  );
};

export default ModalNewTodo;
