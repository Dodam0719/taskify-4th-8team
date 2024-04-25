import * as S from './ModalTodo.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import ModalInputTitle from './ModalInputTitle';
import ModalInputProgress from './ModalInputProgress';
import ModalInputManager from './ModalInputManager';
import ModalInputDeadline from './ModalInputDeadline';
import ModalInputTag from './ModalInputTag';

interface ModalTodoProps {
  todoTitle: string;
  onSubmit: (data: { name: string }) => void;
  onClose: () => void;
}

const ModalTodo: React.FC<ModalTodoProps> = ({ onClose, todoTitle }) => {
  return (
    <ModalBackground onClose={onClose} width='50.6rem' height='90.7rem' mobileWidth='32.7rem' mobileHeight='86.9rem'>
      <S.ModalTodoWrapper>
        <S.ModalTodoTitle>{todoTitle}</S.ModalTodoTitle>
        <S.StatusAndManagerWrapper>
          {todoTitle === '할 일 수정' && <ModalInputProgress />}
          <ModalInputManager />
        </S.StatusAndManagerWrapper>
        <ModalInputTitle title='제목' />
        <ModalInputTitle title='설명' height='9.6rem' isTextarea={true} />
        <ModalInputDeadline />
        <ModalInputTag />
        <S.ModalTodoImageWrapper>
          <S.ModalTodoImageTitle>이미지</S.ModalTodoImageTitle>
          <S.ModalTodoImageButton />
        </S.ModalTodoImageWrapper>
        <S.ModalTodoButtonWrapper>
          <ModalButton text='취소' variant='cancel' fullWidth={true} onClick={onClose} />
          <ModalButton text='생성' variant='confirm' fullWidth={true} />
        </S.ModalTodoButtonWrapper>
      </S.ModalTodoWrapper>
    </ModalBackground>
  );
};

export default ModalTodo;
