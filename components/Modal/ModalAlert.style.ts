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

export const ModalWrapper = styled.div`
  width: 54rem;
  height: 25rem;
  border-radius: 0.8rem;
  background: var(--white_100, #fff);

  @media (max-width: 767px) {
    min-width: 37.5rem;
    width: 32.7rem;
    height: 22rem;
  }
`;

export const ModalAlertContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10.8rem auto 4.5rem;
  p {
    color: var(--black_050, #333236);
    font-size: 1.8rem;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    min-width: 37.5rem;
    margin: 8.1rem auto 5rem;
    p {
      font-size: 1.6rem;
    }
  }
`;

export const ModalAlertFooter = styled.div`
  margin: 0 2.8rem 2.8rem 39.2rem;

  @media (max-width: 767px) {
    min-width: 37.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
