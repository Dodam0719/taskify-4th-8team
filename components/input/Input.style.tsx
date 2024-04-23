import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

type InputStyledProps = {
  $error?: boolean;
  width?: string;
  height?: string;
  $mobileWidth?: string;
  $mobileHeight?: string;
  $placeholderFontSize?: string;
  $mobilePlaceholderFontSize?: string;
};

export const Container = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: ${({ $gap }) => $gap};
`;

export const Label = styled.label<{
  fontWeight?: string;
  fontSize?: string;
  $mobileFontSize?: string;
}>`
  color: var(--black_050);
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};

  @media ${device.mobile} {
    font-size: ${({ $mobileFontSize }) => $mobileFontSize};
  }
`;

export const Input = styled.input<InputStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 1.3rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ $error }) => ($error ? 'var(--red_100)' : 'var(--gray_060)')};
  background-color: var(--white_100);

  &::placeholder {
    color: var(--gray_020);
    font-size: ${({ $placeholderFontSize }) => $placeholderFontSize};
  }

  &:focus {
    outline: none;
    border: 0.1rem solid var(--violet_000);
  }
  @media ${device.mobile} {
    width: ${({ $mobileWidth }) => $mobileWidth};
    height: ${({ $mobileHeight }) => $mobileHeight};
    &::placeholder {
      font-size: ${({ $mobilePlaceholderFontSize }) => $mobilePlaceholderFontSize};
      color: var(--gray_020);
    }
  }
`;

export const ImgPosition = styled.div<{ $isShow?: string }>`
  display: ${({ $isShow }) => ($isShow ? '' : 'none')};
  position: absolute;
  top: 4rem;
  right: 1rem;
`;

export const ErrorMessage = styled.div`
  color: var(--red_100);
  font-size: 1.4rem;
  font-weight: 400;
  justify-content: flex-start;
`;
