import React, { InputHTMLAttributes, useRef, useState, useCallback, forwardRef, Ref } from 'react';
import * as S from './Input.style';
import { EyeOff, EyeOn } from '@/components/Icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  errorMsg?: string;
  label: string;
  $gap?: string;
  fontSize?: string;
  $mobileFontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  $mobileWidth?: string;
  $mobileHeight?: string;
  $placeholderFontSize?: string;
  $mobilePlaceholderFontSize?: string;
  $isShow?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    type = 'text',
    $gap,
    placeholder,
    fontSize,
    $mobileFontSize,
    fontWeight,
    width,
    height,
    $mobileWidth,
    $mobileHeight,
    $placeholderFontSize,
    $mobilePlaceholderFontSize,
    $isShow,
    errorMsg,
    label,
    ...props
  },
  ref
) {
  const [isPassword, setIsPassword] = useState(type === 'password');
  const passwordRef = useRef<HTMLInputElement | null>(null);

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

  const handleRef: React.RefCallback<HTMLInputElement> = useCallback(
    (element) => {
      passwordRef.current = element;

      if (ref) {
        if (typeof ref === 'function') {
          ref(element);
        } else {
          ref.current = element;
        }
      }
    },
    [ref]
  );

  return (
    <>
      <S.Container $gap={$gap}>
        <S.Label fontSize={fontSize} fontWeight={fontWeight} $mobileFontSize={$mobileFontSize} htmlFor={id}>
          {label}
        </S.Label>
        <S.Input
          id={id}
          type={type}
          placeholder={placeholder}
          $placeholderFontSize={$placeholderFontSize}
          $mobilePlaceholderFontSize={$mobilePlaceholderFontSize}
          ref={handleRef}
          width={width}
          height={height}
          $mobileWidth={$mobileWidth}
          $mobileHeight={$mobileHeight}
          $error={!!errorMsg}
          {...props}
        />
        {type === 'password' && (
          <S.ImgPosition $isShow={$isShow} onClick={toggleEyesButton}>
            {isPassword ? <EyeOff $width={'2.4rem'} $height={'2.4rem'} /> : <EyeOn $width={'2.4rem'} $height={'2.4rem'} />}
          </S.ImgPosition>
        )}
        {errorMsg && <S.ErrorMessage>{errorMsg}</S.ErrorMessage>}
      </S.Container>
    </>
  );
});

export default Input;
