import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalColumnForm = styled.form`
  width: 54rem;
  min-height: 27.6rem;
  padding: 3.2rem 2.8rem 2.8rem;
  border-radius: 0.8rem;
  background: var(--white_100, #fff);

  @media (max-width: 767px) {
    width: 32.7rem;
    min-height: 24.1rem;
    padding: 2.8rem 2rem;
  }
`;

export const ModalColumnFormTitle = styled.legend`
  color: var(--black_050, #333236);
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 3.2rem;

  @media (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 2.4rem;
  }
`;

export const ModalColumnFormLabel = styled.label`
  color: var(--black_050, #333236);
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const ModalColumnFormInput = styled.input`
  width: 100%;
  height: 4.8rem;
  padding: 1.5rem 1.6rem 1.4rem;
  margin-top: 1rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray_060, #d9d9d9);
  background: var(--white_100, #fff);

  ::placeholder {
    color: var(--black_050, #333236);
  }
`;

export const ModalColumnErrorMessage = styled.div`
  height: 1.7rem;
  margin-top: 0.8rem;
  color: var(--red_100, #d6173a);
  font-size: 14px;
  font-weight: 400;
`;

export const ModalColumnFormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  margin-top: 2.8rem;

  @media (max-width: 767px) {
    margin-top: 2.4rem;
  }
`;
