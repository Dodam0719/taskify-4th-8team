import { useForm } from 'react-hook-form';
import * as S from './ModalInvite.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import api from '@/pages/api/axios';

interface InviteFormProps {
  title: string;
  placeholder: string;
  onSubmit: (data: { name: string }) => void;
  onClose: () => void;
  onDelete?: () => void;
  dashboardId: any;
}

const ModalInvite: React.FC<InviteFormProps> = ({ dashboardId, title, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues: { email: '' } });

  const Invite = async (data: any) => {
    try {
      const response = await api.post(`/dashboards/${dashboardId}/invitations`, data);
      if (response.status === 201) {
        console.log('가입이 완료됐습니다.');
        const result = response.data;
        return result;
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <ModalBackground onClose={onClose}>
      <S.ModalInviteForm onSubmit={handleSubmit((data) => Invite(data))}>
        <S.ModalInviteFormTitle>{title}</S.ModalInviteFormTitle>
        <S.ModalInviteFormLabel htmlFor='email'>이메일</S.ModalInviteFormLabel>
        <S.ModalInviteFormInput
          id='email'
          {...register('email', { required: { value: true, message: '이메일을 입력해 주세요.' } })}
          placeholder='이메일을 입력해 주세요.'
        />
        {errors.email && <S.ModalInviteErrorMessage>{errors.email.message}</S.ModalInviteErrorMessage>}
        <S.ModalInviteFormLabel htmlFor='email'>이메일</S.ModalInviteFormLabel>
        <S.ModalInviteFormInput
          id='email'
          {...register('email', { required: { value: true, message: '이메일을 입력해 주세요.' } })}
          placeholder='이메일을 입력해 주세요.'
        />
        {errors.email && <S.ModalInviteErrorMessage>{errors.email.message}</S.ModalInviteErrorMessage>}
        <S.ModalInviteFormButtonWrapper>
          <S.ModalInviteFormButton>
            <ModalButton text='취소' variant='cancel' onClick={onClose} />
            <ModalButton text='확인' variant='confirm' />
          </S.ModalInviteFormButton>
        </S.ModalInviteFormButtonWrapper>
      </S.ModalInviteForm>
    </ModalBackground>
  );
};

export default ModalInvite;
