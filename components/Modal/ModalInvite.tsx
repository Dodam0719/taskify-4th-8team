import { useForm } from 'react-hook-form';
import * as S from './ModalInvite.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import { useState } from 'react';

interface ColumnFormProps {
  title: string;
  placeholder: string;
  onSubmit: (data: { name: string }) => void;
  onClose: () => void;
  onDelete?: () => void;
}

const ModalColumn: React.FC<ColumnFormProps> = ({ title, placeholder, onSubmit, onClose, onDelete }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<{ name: string }>();

  const [columnNames, setColumnNames] = useState<string[]>(['기존 컬럼1', '기존 컬럼2']); // 예시로 기존 컬럼 이름들

  const submitForm = (data: { name: string }) => {
    // '새 컬럼 생성'일 때만 중복 이름 체크 수행
    if (title === '새 컬럼 생성' && columnNames.includes(data.name)) {
      setError('name', {
        type: 'duplicate',
        message: '중복된 컬럼 이름입니다',
      });
    } else {
      onSubmit(data);
      if (title === '새 컬럼 생성') {
        setColumnNames((prev) => [...prev, data.name]); // 새 컬럼 이름 추가
      }
      reset();
    }
  };

  return (
    <ModalBackground onClose={onClose}>
      <S.ModalInviteForm onSubmit={handleSubmit(submitForm)}>
        <S.ModalInviteFormTitle>{title}</S.ModalInviteFormTitle>
        <S.ModalInviteFormLabel htmlFor='name'>이메일</S.ModalInviteFormLabel>
        <S.ModalInviteFormInput id='name' {...register('name', { required: true })} placeholder={placeholder} />
        {errors.name && <S.ModalInviteErrorMessage>{errors.name.message}</S.ModalInviteErrorMessage>}
        <S.ModalInviteFormButtonWrapper>
          {title === '컬럼 관리' ? (
            <S.ModalInviteFormDeleteText onClick={onDelete}>삭제하기</S.ModalInviteFormDeleteText>
          ) : (
            <S.PlaceholderText /> // PC에서는 공간을 유지하되 모바일에서는 렌더링하지 않음
          )}
          <S.ModalInviteFormButton>
            <ModalButton text='취소' variant='cancel' onClick={onClose} />
            <ModalButton text='확인' variant='confirm' />
          </S.ModalInviteFormButton>
        </S.ModalInviteFormButtonWrapper>
      </S.ModalInviteForm>
    </ModalBackground>
  );
};

export default ModalColumn;
