import styled from 'styled-components';

export const ModalNewdashForm = styled.form`
  width: 54rem;
  min-height: 33.4rem;
  padding: 3.2rem 2.8rem 2.8rem;
  border-radius: 0.8rem;
  background: var(--white_100, #fff);

  @media (max-width: 767px) {
    width: 32.7rem;
    min-height: 29.3rem;
    padding: 2.8rem 2rem;
  }
`;

export const ModalNewdashTitle = styled.legend`
  color: var(--black_050, #333236);
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 3.2rem;

  @media (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 2.4rem;
  }
`;

export const ModalNewdashLabel = styled.label`
  color: var(--black_050, #333236);
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const ModalNewdashInput = styled.input`
  width: 100%;
  height: 4.8rem;
  padding: 1.5rem 1.6rem 1.4rem;
  margin: 1rem 0 2.8rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray_060, #d9d9d9);
  background: var(--white_100, #fff);

  ::placeholder {
    color: var(--black_050, #333236);
  }

  @media (max-width: 767px) {
    margin: 1rem 0 2.4rem;
  }
`;

export const ModalNewdashButtonWrapper = styled.div`
  min-height: 4.8rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    min-height: 4.2rem;
  }
`;

export const ModalNewdashButton = styled.div`
  margin-top: 2.8rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;
