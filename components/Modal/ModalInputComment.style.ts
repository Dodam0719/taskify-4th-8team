import styled from 'styled-components';
import ModalButton from './ModalButton';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalInputCommentForm = styled.form`
  width: 45rem;
  height: 13.9rem;

  @media (max-width: 767px) {
    width: 28.7rem;
    height: 9.5rem;
  }
`;

export const ModalInputCommentLabel = styled.label`
  color: var(--black_050, #333236);
  font-size: 16px;

  @media (max-width: 767px) {
    font-size: 14px;
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
  border-radius: 6px;
  border: 1px solid var(--gray_060, #d9d9d9);
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
  font-size: 14px;

  &:focus {
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const StyledModalButton = styled(ModalButton)`
  right: 1.2rem;
  bottom: 1.2rem;
`;
