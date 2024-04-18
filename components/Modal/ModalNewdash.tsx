import { useForm } from 'react-hook-form';
import * as S from './ModalNewdash.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import { useState } from 'react';
import ColorChips from '../chips/color-chips/ColorChips';

interface ColumnFormProps {
  title: string;
  placeholder: string;
  onSubmit: (data: { name: string }) => void;
  onClose: () => void;
  onDelete?: () => void;
}

const ModalNewdash: React.FC<ColumnFormProps> = ({ title, placeholder, onSubmit, onClose, onDelete }) => {
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
      <S.ModalNewdashForm onSubmit={handleSubmit(submitForm)}>
        <S.ModalNewdashTitle>{title}</S.ModalNewdashTitle>
        <S.ModalNewdashLabel htmlFor='name'>이름</S.ModalNewdashLabel>
        <S.ModalNewdashInput id='name' {...register('name', { required: true })} placeholder={placeholder} />
        <S.ModalNewdashButtonWrapper>
          <ColorChips />
          <S.ModalNewdashButton>
            <ModalButton text='취소' variant='cancel' onClick={onClose} />
            <ModalButton text='생성' variant='confirm' />
          </S.ModalNewdashButton>
        </S.ModalNewdashButtonWrapper>
      </S.ModalNewdashForm>
    </ModalBackground>
  );
};

export default ModalNewdash;
