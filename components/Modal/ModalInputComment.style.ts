import styled from 'styled-components';
import ModalButton from './ModalButton';
import { device } from '../../styles/breakpoints';

export const ModalInputCommentForm = styled.form`
  width: 45rem;
  height: 13.9rem;
  @media ${device.tablet} {
    width: 42rem;
  }
  @media (max-width: 767px) {
    width: 28.7rem;
    height: 9.5rem;
  }
`;

export const ModalInputCommentLabel = styled.label`
  color: var(--black_050, #333236);
  font-size: 1.6rem;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 11rem;
  margin-top: 1rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--black_025, #171717);
  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray_060, #d9d9d9);
  background: var(--white_100, #fff);

  ::placeholder {
    color: var(--gray_020, #9fa6b2);
  }

  &:focus-within {
    border-color: var(--violet_000, #5534da);
  }

  @media (max-width: 767px) {
    height: 7rem;
    margin-top: 0.8rem;
    padding: 1.2rem;
  }
`;

export const ModalInputCommentInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.4rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const StyledModalButton = styled(ModalButton)`
  right: 1.2rem;
  bottom: 1.2rem;
`;
