import * as S from './ModalInvite.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import api from '@/pages/api/axios';
import { useState } from 'react';

interface InviteFormProps {
  title: string;
  onClose: () => void;
  dashboardId: any;
}

const ModalInvite: React.FC<InviteFormProps> = ({ dashboardId, title, onClose }) => {
<<<<<<< HEAD
  const {
    register,
    handleSubmit,
\
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues: { email: '' } });
=======
  const [inviteEmail, setInviteEmail] = useState<string>('');
  console.log(inviteEmail);
>>>>>>> 17f6f4b2605b484a2041874baefda1e2df17d78d

  const handleChangeInviteEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInviteEmail(e.target.value);
  };

  const handleInvite = async (dashboardId: number, email: string) => {
    try {
      const response = await api.post(`/dashboards/${dashboardId}/invitations`, { email: inviteEmail });
      if (response.status === 201) {
        console.log('초대가 완료됐습니다.');
        const result = response.data;
        onClose();
        window.location.reload();
        return result;
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <ModalBackground onClose={onClose}>
      <S.ModalInviteForm onSubmit={(e) => e.preventDefault()}>
        <S.ModalInviteFormTitle>{title}</S.ModalInviteFormTitle>
        <S.ModalInviteFormLabel htmlFor='email'>이메일</S.ModalInviteFormLabel>
        <S.ModalInviteFormInput placeholder='이메일을 입력해 주세요.' value={inviteEmail} onChange={handleChangeInviteEmail} />
        <S.ModalInviteFormButtonWrapper>
          <S.ModalInviteFormButton>
            <ModalButton text='취소' variant='cancel' onClick={onClose} />
            <ModalButton text='확인' variant='confirm' onClick={() => handleInvite(dashboardId, inviteEmail)} />
          </S.ModalInviteFormButton>
        </S.ModalInviteFormButtonWrapper>
      </S.ModalInviteForm>
    </ModalBackground>
  );
};

export default ModalInvite;
