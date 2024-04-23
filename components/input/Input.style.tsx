import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

type InputStyledProps = {
  $error?: boolean;
  width?: string;
  height?: string;
  mobilewidth?: string;
  mobileheight?: string;
  placeholderfontsize?: string;
  mobileplaceholderfontsize?: string;
};

export const Container = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: ${({ gap }) => gap};
`;

export const Label = styled.label<{
  fontWeight?: string;
  fontSize?: string;
  mobilefontsize?: string;
}>`
  color: var(--black_050);
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};

  @media ${device.mobile} {
    font-size: ${({ mobilefontsize }) => mobilefontsize};
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
    font-size: ${({ placeholderfontsize }) => placeholderfontsize};
  }

  &:focus {
    outline: none;
    border: 0.1rem solid var(--violet_000);
  }
  @media ${device.mobile} {
    width: ${({ mobilewidth }) => mobilewidth};
    height: ${({ mobileheight }) => mobileheight};
    &::placeholder {
      font-size: ${({ mobileplaceholderfontsize }) => mobileplaceholderfontsize};
      color: var(--gray_020);
    }
  }
`;

export const ImgPosition = styled.div<{ isVisible?: string }>`
  display: ${({ isVisible }) => (isVisible ? '' : 'none')};
  position: absolute;
  bottom: 3rem;
  right: 1rem;
`;

export const ErrorMessage = styled.div`
  color: var(--red_100);
  font-size: 1.4rem;
  font-weight: 400;
`;
