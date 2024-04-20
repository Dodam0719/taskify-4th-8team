import React, { InputHTMLAttributes, useRef, useState } from 'react';
import * as S from './Input.style';
import { EyeOff, EyeOn } from '../Icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  errorMsg?: string;
  label: string;
}

const Input = ({ id, type = 'text', placeholder, errorMsg, label, ...props }: InputProps) => {
  const [isPassword, setIsPassword] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const toggleEyesButton = () => {
    if (passwordRef.current) {
      if (isPassword) {
        passwordRef.current.type = 'text';
        setIsPassword(false);
      } else {
        passwordRef.current.type = 'password';
        setIsPassword(true);
      }
    }
  };

  return (
    <>
      <S.Container>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input id={id} type={type} placeholder={placeholder} ref={passwordRef} $error={!!errorMsg} {...props} />
        {type === 'password' && <S.ImgPosition onClick={toggleEyesButton}>{isPassword ? <EyeOff /> : <EyeOn />}</S.ImgPosition>}
      </S.Container>
      {errorMsg && <S.ErrorMessage>{errorMsg}</S.ErrorMessage>}
    </>
  );
};

export default Input;
