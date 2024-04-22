import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

type InputStyledProps = {
  $error?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 52rem;
  height: 7.7rem;
  gap: 0.8rem;

  font-size: 1.6rem;
  font-weight: 400;

  @media ${device.mobile} {
    width: 35.1rem;
  }
`;

export const Label = styled.label`
  color: var(--black_050);
`;

export const Input = styled.input<InputStyledProps>`
  width: 100%;
  height: 5rem;
  padding: 1.3rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ $error }) => ($error ? 'var(--red_100)' : 'var(--gray_060)')};
  background-color: var(--white_100);

  &::placeholder {
    color: var(--gray_020);
  }

  &:focus {
    outline: none;
    border: 0.1rem solid var(--violet_000);
  }
`;

export const ImgPosition = styled.div`
  position: absolute;
  bottom: 1.4rem;
  right: 1rem;
`;

export const ErrorMessage = styled.div`
  color: var(--red_100);
  font-size: 1.4rem;
  font-weight: 400;
  justify-content: flex-start;
`;
