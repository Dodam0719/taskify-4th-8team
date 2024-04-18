import styled from 'styled-components';

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
    width: 100%;
    margin: 8.1rem auto 5rem;
    p {
      font-size: 1.6rem;
    }
  }
`;

export const ModalAlertFooter = styled.div`
  margin: 0 2.8rem 2.8rem 39.2rem;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
