import LoginInputs from '@/components/pages/login/LoginInputs';
import Button from '@/components/button/Button';
import { useForm } from 'react-hook-form';
import client from '@/lib/axios';
import * as S from '@/components/pages/login/LoginForm.style';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
      const response = await client.post('/auth/login', data);
      if (response.status === 201) {
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
