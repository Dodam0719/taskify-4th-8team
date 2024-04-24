import { useForm } from 'react-hook-form';
import * as S from './ModalNewdash.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import { useState } from 'react';
import ColorChips, { CHIP_COLORS } from '../chips/color-chips/ColorChips';
import { Dashboard } from '@/hooks/useDashboards';

interface ModalNewdashProps {
  dashboards: Dashboard[];
  onSubmit: (data: { title: string; color: string }) => void;
  onClose: () => void;
}

const ModalNewdash: React.FC<ModalNewdashProps> = ({ dashboards, onSubmit, onClose }) => {
  const { register, handleSubmit, reset, setError } = useForm<{ name: string }>();

  const [selectedColor, setSelectedColor] = useState(CHIP_COLORS[0]);

  const submitForm = (formData: { name: string }) => {
    const { name } = formData;
    if (dashboards.some((dashboard) => dashboard.title === name)) {
      setError('name', {
        type: 'duplicate',
        message: '중복된 대시보드 이름입니다',
      });
    } else {
      onSubmit({ title: name, color: selectedColor });
      reset();
    }
  };

  return (
    <ModalBackground onClose={onClose}>
      <S.ModalNewdashForm onSubmit={handleSubmit(submitForm)}>
        <S.ModalNewdashTitle>새로운 대시보드</S.ModalNewdashTitle>
        <S.ModalNewdashLabel htmlFor='name'>이름</S.ModalNewdashLabel>
        <S.ModalNewdashInput id='name' {...register('name', { required: true })} placeholder='뉴프로젝트' />
        <S.ModalNewdashButtonWrapper>
          <ColorChips onColorSelect={setSelectedColor} />
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
