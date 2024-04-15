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
  background: var(--white-white_FFFFFF, #fff);
`;

export const ModalAlertContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10.8rem auto 4.5rem;
  p {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const ModalAlertFooter = styled.div`
  margin: 0 2.8rem 2.8rem 39.2rem;
`;
