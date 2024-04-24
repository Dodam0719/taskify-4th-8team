import styled from 'styled-components';
import Input from '@/components/input/Input';
import { UseFormRegister, FieldErrors, UseFormGetValues } from 'react-hook-form';
import * as S from './SignupInputs.style';

type FormValues = {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};

const SignupInputs = ({
  register,
  errors,
  getValues,
}: {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  getValues: UseFormGetValues<FormValues>;
}) => {
  return (
    <S.Container>
      <Input
        id='email'
        type='text'
        placeholder='이메일을 입력해 주세요'
        label='이메일'
        width='52rem'
        $mobileWidth='35.1rem'
        height='5rem'
        fontSize='1.6rem'
        fontWeight='400'
        $gap='0.8rem'
        $placeholderFontSize='1.6rem'
        {...register('email', {
          required: { value: true, message: '이메일을 입력해 주세요' },
          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '이메일 형식으로 입력해 주세요.' },
        })}
        errorMsg={errors.email ? errors.email.message : ''}
      />
      <Input
        id='nickname'
        type='text'
        placeholder='닉네임을 입력해 주세요'
        label='닉네임'
        width='52rem'
        $mobileWidth='35.1rem'
        height='5rem'
        fontSize='1.6rem'
        fontWeight='400'
        $gap='0.8rem'
        $placeholderFontSize='1.6rem'
        {...register('nickname', {
          required: { value: true, message: '닉네임을 입력해 주세요.' },
          maxLength: { value: 10, message: '열 자 이하로 작성해 주세요.' },
        })}
        errorMsg={errors.nickname ? errors.nickname.message : ''}
      />
      <Input
        id='password'
        type='password'
        placeholder='8자 이상 입력해 주세요'
        label='비밀번호'
        width='52rem'
        $mobileWidth='35.1rem'
        height='5rem'
        fontSize='1.6rem'
        fontWeight='400'
        $gap='0.8rem'
        $placeholderFontSize='1.6rem'
        $isShow='true'
        {...register('password', {
          required: { value: true, message: '비밀번호를 입력해 주세요.' },
          minLength: { value: 8, message: '8자 이상 입력해 주세요.' },
        })}
        errorMsg={errors.password ? errors.password.message : ''}
      />
      <Input
        id='passwordCheck'
        type='password'
        placeholder='비밀번호를 한번 더 입력해 주세요'
        label='비밀번호 확인'
        width='52rem'
        $mobileWidth='35.1rem'
        height='5rem'
        fontSize='1.6rem'
        fontWeight='400'
        $gap='0.8rem'
        $placeholderFontSize='1.6rem'
        $isShow='true'
        {...register('passwordCheck', {
          required: { value: true, message: '한 번 더 입력해 주세요' },
          validate: (value) => value === getValues('password') || '비밀번호가 일치하지 않습니다',
        })}
        errorMsg={errors.passwordCheck ? errors.passwordCheck.message : ''}
      />
    </S.Container>
  );
};

export default SignupInputs;
