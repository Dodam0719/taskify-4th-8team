import { useForm } from 'react-hook-form';
import * as S from './ModalInputComment.style';

interface FormData {
  comment: string;
}

const ModalInputComment: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    /* 제출로직 */
    reset();
  });

  return (
    <S.ModalOverlay>
      <S.ModalInputCommentForm onSubmit={onSubmit}>
        <S.ModalInputCommentLabel htmlFor='comment'>댓글</S.ModalInputCommentLabel>
        <S.InputContainer>
          <S.ModalInputCommentInput {...register('comment')} placeholder='댓글 작성하기' />
          <S.StyledModalButton text='입력' variant='comment' />
        </S.InputContainer>
      </S.ModalInputCommentForm>
    </S.ModalOverlay>
  );
};

export default ModalInputComment;
