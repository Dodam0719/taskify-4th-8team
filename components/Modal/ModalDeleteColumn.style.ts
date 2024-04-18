import styled from 'styled-components';

export const ModalDeleteColumnContent = styled.div`
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

export const ModalDeleteColumnFooter = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 2.8rem 2.8rem 26rem;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
