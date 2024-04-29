import LoginInputs from '@/components/pages/login/LoginInputs';
import Button from '@/components/button/Button';
import { useForm } from 'react-hook-form';
import api from '@/pages/api/axios';
import * as S from '@/components/pages/login/LoginForm.style';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: 'onBlur', defaultValues: { email: '', password: '' } });

  const watchAllFileds = watch();
  const isAllFiledsEmpty = Object.values(watchAllFileds).some((value) => !value);
  const disabledCondition = !!errors.email || !!errors.password || isAllFiledsEmpty;

  const logIn = async (data: object) => {
    try {
      const response = await api.post('/auth/login', data);
      if (response.status === 201) {
        const result = response.data;
        const accessToken = result.accessToken;
        localStorage.setItem('token', accessToken);
        router.push('/mydashboard');
      }
    } catch (error: any) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(logIn)}>
      <LoginInputs register={register} errors={errors} />
      <Button variant='login' $width='52rem' $height='5rem' type='submit' disabled={disabledCondition}>
        로그인
      </Button>
    </S.Container>
  );
};

export default LoginForm;
