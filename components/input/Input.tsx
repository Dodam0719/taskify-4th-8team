import React, { InputHTMLAttributes, useRef, useState, useCallback, forwardRef, Ref } from 'react';
import * as S from './Input.style';
import { EyeOff, EyeOn } from '../Icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  errorMsg?: string;
  label: string;
  LabelMarginBottom?: string;
  mobileLabelMarginBottom?: string;
  fontSize?: string;
  mobilefontSize?: string;
  fontweight?: string;
  inputwidth?: string;
  inputheight?: string;
  mobileinputwidth?: string;
  mobileinputheight?: string;
  inputMarginBottom?: string;
  mobileinputMarginBottom?: string;
  placeholderfontSize?: string;
  mobileplaceholderfontSize?: string;
  isShow?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    type = 'text',
    LabelMarginBottom,
    mobileLabelMarginBottom,
    placeholder,
    fontSize,
    mobilefontSize,
    fontweight,
    inputwidth,
    inputheight,
    mobileinputwidth,
    mobileinputheight,
    inputMarginBottom,
    mobileinputMarginBottom,
    placeholderfontSize,
    mobileplaceholderfontSize,
    isShow,
    errorMsg,
    label,
    ...props
  },
  ref
) {
  const [isPassword, setIsPassword] = useState(false);
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
      <S.Container>
        <S.Label
          fontSize={fontSize}
          fontweight={fontweight}
          LabelMarginBottom={LabelMarginBottom}
          mobilefontSize={mobilefontSize}
          mobileLabelMarginBottom={mobileLabelMarginBottom}
          htmlFor={id}>
          {label}
        </S.Label>
        <S.Input
          id={id}
          type={type}
          placeholder={placeholder}
          placeholderfontSize={placeholderfontSize}
          mobileplaceholderfontSize={mobileplaceholderfontSize}
          ref={handleRef}
          inputwidth={inputwidth}
          inputheight={inputheight}
          mobileinputwidth={mobileinputwidth}
          mobileinputheight={mobileinputheight}
          inputMarginBottom={inputMarginBottom}
          mobileinputMarginBottom={mobileinputMarginBottom}
          $error={!!errorMsg}
          {...props}
        />
        {type === 'password' && (
          <S.ImgPosition isShow={isShow} onClick={toggleEyesButton}>
            {isPassword ? <EyeOff $width={'2.4rem'} $height={'2.4rem'} /> : <EyeOn $width={'2.4rem'} $height={'2.4rem'} />}
          </S.ImgPosition>
        )}
      </S.Container>
      {errorMsg && <S.ErrorMessage>{errorMsg}</S.ErrorMessage>}
    </>
  );
});

export default Input;
