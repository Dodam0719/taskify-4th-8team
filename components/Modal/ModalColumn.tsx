import { useForm } from 'react-hook-form';
import * as S from './ModalColumn.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import { useState } from 'react';
import api from '@/pages/api/api';
import { Column } from '../chips/type';

interface ColumnFormProps {
  title: string;
  placeholder: string;
  onSubmit: (data: { name: string }) => void;
  onClose: () => void;
  dashboardId?: number;
  columninfo: Column;
}

const ModalColumn: React.FC<ColumnFormProps> = ({ title, placeholder, onSubmit, onClose, dashboardId, columninfo }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    getValues,
    formState: { errors },
  } = useForm<{ name: string }>();

  const [columnNames, setColumnNames] = useState<string[]>(['']);
  console.log(columnNames);
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

  const handlesSubmitColumn = async () => {
    const columnTitle = getValues('name');
    const dashboardIdAsNumber = dashboardId;
    if (title === '새 컬럼 생성') {
      try {
        await api.post('/columns', {
          title: columnTitle,
          dashboardId: dashboardIdAsNumber,
        });
        setColumnNames((prev) => [...prev, columnTitle]);
      } catch (error) {
        console.error(error);
      }
    } else if (title === '컬럼 관리') {
      try {
        await api.put(`/columns/${columninfo.id}`, {
          title: columnTitle,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handlesSubmitDeleteColumn = async () => {
    try {
      await api.delete(`/columns/${columninfo.id}`, {});
      setColumnNames((prev) => prev.filter((name) => name !== columninfo.title));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalBackground onClose={onClose}>
      <S.ModalColumnForm onSubmit={handleSubmit(submitForm)}>
        <S.ModalColumnFormTitle>{title}</S.ModalColumnFormTitle>
        <S.ModalColumnFormLabel htmlFor='name'>이름</S.ModalColumnFormLabel>
        <S.ModalColumnFormInput id='name' {...register('name', { required: true })} placeholder={placeholder} />
        {errors.name && <S.ModalColumnErrorMessage>{errors.name.message}</S.ModalColumnErrorMessage>}
        <S.ModalColumnFormButtonWrapper>
          {title === '컬럼 관리' ? (
            <S.ModalColumnFormDeleteText onClick={handlesSubmitDeleteColumn}>삭제하기</S.ModalColumnFormDeleteText>
          ) : (
            <S.PlaceholderText /> // PC에서는 공간을 유지하되 모바일에서는 렌더링하지 않음
          )}
          <S.ModalColumnFormButton>
            <ModalButton text='취소' variant='cancel' onClick={onClose} />
            <ModalButton text='확인' variant='confirm' onClick={handlesSubmitColumn} />
          </S.ModalColumnFormButton>
        </S.ModalColumnFormButtonWrapper>
      </S.ModalColumnForm>
    </ModalBackground>
  );
};

export default ModalColumn;
