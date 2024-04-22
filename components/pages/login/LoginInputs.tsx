import styled from 'styled-components';
import Input from '@/components/input/Input';
import { useForm } from 'react-hook-form';
import * as S from './LoginInputs.style';

const LoginInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues: { email: '', password: '' } });

  return (
    <S.Container>
      <Input
        id='email'
        type='text'
        placeholder='이메일을 입력해 주세요'
        label='이메일'
        {...register('email', {
          required: { value: true, message: '이메일을 입력해 주세요.' },
          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '이메일 형식으로 작성해 주세요.' },
        })}
        errorMsg={errors.email ? errors.email.message : ''}
      />
      <Input
        id='password'
        type='password'
        placeholder='비밀번호를 입력해 주세요'
        label='비밀번호'
        {...register('password', { required: { value: true, message: '비밀번호를 입력해 주세요.' } })}
        errorMsg={errors.password ? errors.password.message : ''}
      />
    </S.Container>
  );
};

export default LoginInputs;
