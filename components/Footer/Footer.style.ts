import styled from 'styled-components';
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;
export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 192rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7rem;
  background-color: var(--black_000);

  @media (max-width: 1280px) {
    padding: 0 2.4rem;
  }

  @media (max-width: 767px) {
    height: 6rem;
    padding: 0 2rem;
  }
`;
export const FooterText = styled.p`
  font-family: pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray_020);
`;
export const FooterMidle = styled.div`
  display: flex;
  gap: 3.2rem;
`;
export const FooterRight = styled.div`
  display: flex;
  gap: 1.4rem;
`;
export const Image = styled.img`
  width: 2rem;
  height: 2rem;
`;
